import MiniSearch, { SearchOptions, SearchResult } from "minisearch";

export interface SearchableItem {
  id: string;
  title: string;
  description?: string;
  content?: string;
  url: string;
  category?: string;
  tags?: string[];
  language?: string; // Language code (e.g., 'en', 'es', 'fr')
  // Multilingual support - store translations
  translations?: Record<
    string,
    {
      title?: string;
      description?: string;
    }
  >;
}

export interface SearchConfig {
  fields?: string[];
  storeFields?: string[];
  searchOptions?: SearchOptions;
  defaultLanguage?: string; // Default language for filtering
}

export class SearchIndex {
  private minisearch: MiniSearch<SearchableItem>;
  private items: SearchableItem[] = [];
  private defaultLanguage: string;

  constructor(config: SearchConfig = {}) {
    const fields = config.fields || ["title", "description", "content", "category", "tags"];
    const storeFields = config.storeFields || [
      "id",
      "title",
      "description",
      "url",
      "category",
      "language",
    ];
    this.defaultLanguage = config.defaultLanguage || "en";

    this.minisearch = new MiniSearch<SearchableItem>({
      fields,
      storeFields,
      searchOptions: {
        boost: { title: 3, description: 2, category: 1.5 },
        fuzzy: 0.1, // Reduced for better exact matching
        prefix: true,
        // Prioritize exact matches
        weights: { fuzzy: 0.3, prefix: 0.7 },
        ...config.searchOptions,
      },
    });
  }

  /**
   * Add items to the search index
   */
  addItems(items: SearchableItem[]): void {
    this.items = [...this.items, ...items];
    this.minisearch.addAll(items);
  }

  /**
   * Replace all items in the search index
   */
  replaceItems(items: SearchableItem[]): void {
    this.items = items;
    this.minisearch.removeAll();
    if (items.length > 0) {
      this.minisearch.addAll(items);
    }
  }

  /**
   * Search the index
   * @param query - Search query
   * @param options - Search options
   * @param language - Optional language filter (filters by language field)
   */
  search(query: string, options?: SearchOptions, language?: string): SearchResult[] {
    if (!query.trim()) {
      return [];
    }

    const results = this.minisearch.search(query, options);

    // Filter by language if specified
    if (language) {
      return results.filter((result) => {
        const item = this.getItemById(result.id);
        return (
          item?.language === language || (!item?.language && language === this.defaultLanguage)
        );
      });
    }

    return results;
  }

  /**
   * Get items by language
   */
  getItemsByLanguage(language: string): SearchableItem[] {
    return this.items.filter(
      (item) => item.language === language || (!item.language && language === this.defaultLanguage),
    );
  }

  /**
   * Get all items
   */
  getAllItems(): SearchableItem[] {
    return this.items;
  }

  /**
   * Get item by ID
   */
  getItemById(id: string): SearchableItem | undefined {
    return this.items.find((item) => item.id === id);
  }

  /**
   * Get stored document from search result
   */
  getStoredDocument(id: string): SearchableItem | null {
    // Get the item from our stored items array
    const item = this.items.find((item) => item.id === id);
    return item || null;
  }
}
