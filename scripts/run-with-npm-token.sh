#!/bin/bash

# Script to load npm token and run commands
# Loads token from .npmrc.local or NPM_TOKEN environment variable

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
NPMRC_LOCAL="$ROOT_DIR/.npmrc.local"

# Function to load token
load_token() {
  # Check environment variable first
  if [ -n "$NPM_TOKEN" ]; then
    echo "$NPM_TOKEN"
    return 0
  fi

  # Check .npmrc.local file
  if [ -f "$NPMRC_LOCAL" ]; then
    # Use sed for macOS compatibility (BSD grep doesn't support -P)
    TOKEN=$(grep '//registry\.npmjs\.org/:_authToken=' "$NPMRC_LOCAL" | sed -n 's/.*_authToken=\([^[:space:]]*\).*/\1/p' | head -1 | tr -d '[:space:]')
    if [ -n "$TOKEN" ]; then
      echo "$TOKEN"
      return 0
    fi
  fi

  return 1
}

TOKEN=$(load_token)

if [ -z "$TOKEN" ]; then
  echo "❌ NPM token not found!"
  echo ""
  echo "Please set up authentication:"
  echo "  1. Run: pnpm run setup:auth"
  echo "  2. Or create .npmrc.local with: //registry.npmjs.org/:_authToken=YOUR_TOKEN"
  echo "  3. Or set NPM_TOKEN environment variable"
  echo ""
  exit 1
fi

# Write token to .npmrc temporarily (pnpm reads from .npmrc)
NPMRC="$ROOT_DIR/.npmrc"
# Backup original .npmrc if it doesn't have the token line
if ! grep -q "^//registry\.npmjs\.org/:_authToken=" "$NPMRC" 2>/dev/null; then
  # Add token to .npmrc
  echo "//registry.npmjs.org/:_authToken=$TOKEN" >> "$NPMRC"
  CLEANUP_NPMRC=true
else
  # Replace existing token line
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS (BSD sed)
    sed -i '' "s|^//registry\.npmjs\.org/:_authToken=.*|//registry.npmjs.org/:_authToken=$TOKEN|" "$NPMRC"
  else
    # Linux (GNU sed)
    sed -i "s|^//registry\.npmjs\.org/:_authToken=.*|//registry.npmjs.org/:_authToken=$TOKEN|" "$NPMRC"
  fi
  CLEANUP_NPMRC=false
fi

# Export token as env var as well (for npm/pnpm compatibility)
export NPM_TOKEN="$TOKEN"

# Run the command
"$@"
EXIT_CODE=$?

# Cleanup: remove token line if we added it
if [ "$CLEANUP_NPMRC" = true ]; then
  if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS (BSD sed)
    sed -i '' '/^\/\/registry\.npmjs\.org\/:_authToken=/d' "$NPMRC"
  else
    # Linux (GNU sed)
    sed -i '/^\/\/registry\.npmjs\.org\/:_authToken=/d' "$NPMRC"
  fi
fi

exit $EXIT_CODE

