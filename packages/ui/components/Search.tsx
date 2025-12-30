import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { SearchIndex, SearchableItem } from "../utils/search";
import Input from "./Input";
import Modal from "./Modal";
import { SearchIcon, ArrowRightIcon } from "@azodik/icons";

export interface SearchProps {
  /**
   * Search index instance
   */
  searchIndex: SearchIndex;
  /**
   * Callback when a result is selected
   */
  onSelect?: (item: SearchableItem) => void;
  /**
   * Placeholder text for search input
   */
  placeholder?: string;
  /**
   * Maximum number of results to display
   */
  maxResults?: number;
  /**
   * Keyboard shortcut to open search (default: "k")
   */
  shortcutKey?: string;
  /**
   * Current language code for filtering results (e.g., 'en', 'es')
   */
  language?: string;
  /**
   * Custom render function for search results
   */
  renderResult?: (item: SearchableItem, index: number) => React.ReactNode;
  /**
   * Custom empty state message
   */
  emptyMessage?: string;
  /**
   * Custom no results message
   */
  noResultsMessage?: string;
  /**
   * Show keyboard shortcut hint
   */
  showShortcutHint?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export default function Search({
  searchIndex,
  onSelect,
  placeholder = "Search...",
  maxResults = 10,
  shortcutKey = "k",
  language,
  renderResult,
  emptyMessage = "Start typing to search",
  noResultsMessage = "No results found",
  showShortcutHint = true,
  className = "",
}: SearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<SearchableItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("azodik_recent_searches");
      if (saved) {
        setRecentSearches(JSON.parse(saved).slice(0, 5));
      }
    } catch (e) {
      console.error("Failed to load recent searches", e);
    }
  }, []);

  // Save search to recent searches
  const addToRecent = useCallback((item: SearchableItem) => {
    setRecentSearches((prev) => {
      const filtered = prev.filter((i) => i.id !== item.id);
      const updated = [item, ...filtered].slice(0, 5);
      localStorage.setItem("azodik_recent_searches", JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Search results
  const results = useMemo(() => {
    if (!query.trim()) {
      return recentSearches;
    }
    const searchResults = searchIndex.search(query, undefined, language).slice(0, maxResults);
    return searchResults.map((res) => {
      const doc = searchIndex.getStoredDocument(res.id);
      return (doc || res) as SearchableItem;
    });
  }, [query, searchIndex, maxResults, language, recentSearches]);

  // Handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isMac = typeof navigator !== "undefined" && navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const modifier = isMac ? event.metaKey : event.ctrlKey;

      if (modifier && event.key.toLowerCase() === shortcutKey.toLowerCase()) {
        event.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shortcutKey]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      // Use requestAnimationFrame for cleaner focus transition
      const frameId = requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [isOpen]);

  // Reset search state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleSelect = useCallback(
    (item: SearchableItem) => {
      addToRecent(item);
      onSelect?.(item);
      setIsOpen(false);
      setQuery("");
      setSelectedIndex(0);
    },
    [onSelect, addToRecent],
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (results.length === 0) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (event.key === "Enter") {
        event.preventDefault();
        const selected = results[selectedIndex];
        if (selected) {
          handleSelect(selected);
        }
      } else if (event.key === "Escape") {
        setIsOpen(false);
      }
    },
    [results, selectedIndex, searchIndex, handleSelect],
  );

  // Scroll selected result into view
  useEffect(() => {
    if (resultsRef.current && selectedIndex >= 0) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex]);

  const defaultRenderResult = (item: SearchableItem, index: number) => {
    const isSelected = index === selectedIndex;
    const itemId = item.id || `result-${index}`;

    return (
      <div
        key={itemId}
        className={`search-result ${isSelected ? "selected" : ""}`}
        onClick={() => handleSelect(item)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleSelect(item);
          }
        }}
        onMouseEnter={() => setSelectedIndex(index)}
        role="button"
        tabIndex={0}
      >
        <div className="search-result-content">
          <div className="search-result-title">{item.title}</div>
          {item.description && <div className="search-result-description">{item.description}</div>}
          {item.category && <div className="search-result-category">{item.category}</div>}
        </div>
        <ArrowRightIcon size={16} className="search-result-icon" />
      </div>
    );
  };

  const renderResultFn = renderResult || defaultRenderResult;

  return (
    <>
      <button
        className={`search-trigger ${className}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open search"
      >
        <SearchIcon size={18} />
        <span className="search-trigger-text">{placeholder}</span>
        {showShortcutHint && (
          <span className="search-shortcut">
            <kbd>{navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? "⌘" : "Ctrl"}</kbd>
            <kbd>{shortcutKey.toUpperCase()}</kbd>
          </span>
        )}
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="3"
        showCloseButton={false}
        className="search-modal"
      >
        <div className="search-container">
          <div className="search-input-wrapper">
            <SearchIcon size={20} className="search-input-icon" />
            <Input
              ref={inputRef}
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              className="search-input"
              autoComplete="off"
            />
          </div>

          <div className="search-results" ref={resultsRef}>
            {!query.trim() && recentSearches.length > 0 ? (
              <>
                <div className="search-section-header">Recent Searches</div>
                {results.map((result, index) => renderResultFn(result, index))}
              </>
            ) : !query.trim() ? (
              <div className="search-empty">{emptyMessage}</div>
            ) : results.length === 0 ? (
              <div className="search-empty">{noResultsMessage}</div>
            ) : (
              results.map((result, index) => {
                // Get stored document from search index
                const storedDoc = searchIndex.getStoredDocument(result.id);
                const item: SearchableItem = storedDoc || {
                  id: result.id,
                  title: result.id,
                  url: "",
                };
                return renderResultFn(item, index);
              })
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
