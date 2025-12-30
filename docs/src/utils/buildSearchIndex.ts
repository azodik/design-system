import { SearchIndex, SearchableItem } from "@azodik/ui";
import { routes } from "@/config/routes";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import fr from "@/locales/fr.json";
import de from "@/locales/de.json";
import hi from "@/locales/hi.json";

/**
 * Supported languages
 */
const SUPPORTED_LANGUAGES = ["en", "es", "fr", "de", "hi"] as const;
type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

/**
 * Locale data mapping
 * Note: Locales may contain nested objects, so we use `any` and handle safely
 */
const locales: Record<SupportedLanguage, Record<string, unknown>> = {
  en,
  es,
  fr,
  de,
  hi,
};

/**
 * Component metadata mapping to translation keys
 */
interface ComponentMetadata {
  nameKey: string; // Translation key for component name (e.g., "button")
  descriptionKey: string; // Translation key for description (e.g., "buttonDescription")
  categoryKey?: string; // Translation key for category
  route: string;
  category?: string; // Fallback category if no translation
  tags?: string[];
}

/**
 * Component metadata for all docs pages
 */
const componentMetadata: ComponentMetadata[] = [
  { 
    nameKey: "gettingStarted", 
    descriptionKey: "installDescription", 
    route: routes.gettingStarted, 
    category: "Guides" 
  },
  { 
    nameKey: "button", 
    descriptionKey: "buttonDescription", 
    route: routes.buttonDocs, 
    category: "Components", 
    tags: ["interactive", "action"] 
  },
  { 
    nameKey: "input", 
    descriptionKey: "inputDescription", 
    route: routes.inputDocs, 
    category: "Components", 
    tags: ["form", "input"] 
  },
  { 
    nameKey: "card", 
    descriptionKey: "cardDescription", 
    route: routes.cardDocs, 
    category: "Components", 
    tags: ["layout", "container"] 
  },
  { 
    nameKey: "container", 
    descriptionKey: "containerDescription", 
    route: routes.containerDocs, 
    category: "Components", 
    tags: ["layout", "container"] 
  },
  { 
    nameKey: "flex", 
    descriptionKey: "boxDescription", // Flex uses similar description to Box
    route: routes.flexDocs, 
    category: "Components", 
    tags: ["layout", "flexbox", "flex"] 
  },
  { 
    nameKey: "modal", 
    descriptionKey: "modalDescription", 
    route: routes.modalDocs, 
    category: "Components", 
    tags: ["overlay", "dialog"] 
  },
  { 
    nameKey: "table", 
    descriptionKey: "tableDescription", 
    route: routes.tableDocs, 
    category: "Components", 
    tags: ["data", "table"] 
  },
  { 
    nameKey: "sidebar", 
    descriptionKey: "sidebarDescription", 
    route: routes.sidebarDocs, 
    category: "Components", 
    tags: ["navigation", "layout"] 
  },
  { 
    nameKey: "navigation", 
    descriptionKey: "navigationDescription", 
    route: routes.navigationDocs, 
    category: "Components", 
    tags: ["navigation", "menu"] 
  },
  { 
    nameKey: "tabs", 
    descriptionKey: "tabsDescription", 
    route: routes.tabsDocs, 
    category: "Components", 
    tags: ["navigation", "tabs"] 
  },
  { 
    nameKey: "accordion", 
    descriptionKey: "accordionDescription", 
    route: routes.accordionDocs, 
    category: "Components", 
    tags: ["collapsible", "content"] 
  },
  { 
    nameKey: "alert", 
    descriptionKey: "alertDescription", 
    route: routes.alertDocs, 
    category: "Components", 
    tags: ["notification", "alert"] 
  },
  { 
    nameKey: "badge", 
    descriptionKey: "badgeDescription", 
    route: routes.badgeDocs, 
    category: "Components", 
    tags: ["badge", "label"] 
  },
  { 
    nameKey: "avatar", 
    descriptionKey: "avatarDescription", 
    route: routes.avatarDocs, 
    category: "Components", 
    tags: ["avatar", "user"] 
  },
  { 
    nameKey: "breadcrumb", 
    descriptionKey: "breadcrumbDescription", 
    route: routes.breadcrumbDocs, 
    category: "Components", 
    tags: ["navigation", "breadcrumb"] 
  },
  { 
    nameKey: "checkbox", 
    descriptionKey: "checkboxDescription", 
    route: routes.checkboxDocs, 
    category: "Components", 
    tags: ["form", "checkbox"] 
  },
  { 
    nameKey: "radio", 
    descriptionKey: "radioDescription", 
    route: routes.radioDocs, 
    category: "Components", 
    tags: ["form", "radio"] 
  },
  { 
    nameKey: "switch", 
    descriptionKey: "switchDescription", 
    route: routes.switchDocs, 
    category: "Components", 
    tags: ["form", "switch"] 
  },
  { 
    nameKey: "select", 
    descriptionKey: "selectDescription", 
    route: routes.selectDocs, 
    category: "Components", 
    tags: ["form", "select"] 
  },
  { 
    nameKey: "textarea", 
    descriptionKey: "textareaDescription", 
    route: routes.textareaDocs, 
    category: "Components", 
    tags: ["form", "textarea"] 
  },
  { 
    nameKey: "dialog", 
    descriptionKey: "dialogDescription", 
    route: routes.dialogDocs, 
    category: "Components", 
    tags: ["overlay", "dialog"] 
  },
  { 
    nameKey: "drawer", 
    descriptionKey: "drawerDescription", 
    route: routes.drawerDocs, 
    category: "Components", 
    tags: ["overlay", "drawer"] 
  },
  { 
    nameKey: "popover", 
    descriptionKey: "popoverDescription", 
    route: routes.popoverDocs, 
    category: "Components", 
    tags: ["tooltip", "popover"] 
  },
  { 
    nameKey: "tooltip", 
    descriptionKey: "tooltipDescription", 
    route: routes.tooltipDocs, 
    category: "Components", 
    tags: ["tooltip"] 
  },
  { 
    nameKey: "toast", 
    descriptionKey: "toastDescription", 
    route: routes.toastDocs, 
    category: "Components", 
    tags: ["notification", "toast"] 
  },
  { 
    nameKey: "pagination", 
    descriptionKey: "paginationDescription", 
    route: routes.paginationDocs, 
    category: "Components", 
    tags: ["pagination", "navigation"] 
  },
  { 
    nameKey: "scrollArea", 
    descriptionKey: "scrollAreaDescription", 
    route: routes.scrollAreaDocs, 
    category: "Components", 
    tags: ["scroll", "layout"] 
  },
  { 
    nameKey: "charts", 
    descriptionKey: "chartsDescription", 
    route: routes.chartsDocs, 
    category: "Components", 
    tags: ["chart", "data", "visualization"] 
  },
  { 
    nameKey: "dataTable", 
    descriptionKey: "dataTableDescription", 
    route: routes.datatableDocs, 
    category: "Components", 
    tags: ["table", "data"] 
  },
  { 
    nameKey: "theming", 
    descriptionKey: "themingDesc", 
    route: routes.themingDocs, 
    category: "Guides", 
    tags: ["theme", "customization"] 
  },
  { 
    nameKey: "typography", 
    descriptionKey: "typographyDescription", 
    route: routes.typographyDocs, 
    category: "Components", 
    tags: ["typography", "text"] 
  },
  { 
    nameKey: "icons", 
    descriptionKey: "iconsDescription", 
    route: routes.iconsDocs, 
    category: "Resources", 
    tags: ["icons"] 
  },
];

/**
 * Get translation for a key, with fallback
 * Handles nested objects by returning fallback
 */
function getTranslation(locale: Record<string, unknown>, key: string, fallback: string): string {
  const value = locale[key];
  // Only return string values, skip nested objects
  if (typeof value === "string") {
    return value;
  }
  return fallback;
}

/**
 * Get category translation
 */
function getCategoryTranslation(locale: Record<string, unknown>, category: string): string {
  const categoryKey = `${category.toLowerCase()}Components`;
  return getTranslation(locale, categoryKey, category);
}

/**
 * Build search index with multilingual support
 */
export function buildSearchIndex(): SearchIndex {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchIndex = new SearchIndex({
    fields: ["title", "description", "category", "tags"],
    storeFields: ["id", "title", "description", "url", "category", "language"],
    defaultLanguage: "en",
  } as any);

  const searchableItems: SearchableItem[] = [];

  // Build items for each language
  for (const lang of SUPPORTED_LANGUAGES) {
    const locale = locales[lang];
    
    for (const meta of componentMetadata) {
      const title = getTranslation(locale, meta.nameKey, meta.nameKey);
      const description = getTranslation(locale, meta.descriptionKey, "");
      const category = meta.categoryKey 
        ? getCategoryTranslation(locale, meta.category || "Components")
        : (meta.category || "Components");

      // Store translations for other languages (for potential cross-language search)
      const translations: Record<string, { title?: string; description?: string }> = {};
      for (const otherLang of SUPPORTED_LANGUAGES) {
        if (otherLang !== lang) {
          const otherLocale = locales[otherLang];
          translations[otherLang] = {
            title: getTranslation(otherLocale, meta.nameKey, title),
            description: getTranslation(otherLocale, meta.descriptionKey, description),
          };
        }
      }

      // Create item for this language
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const item: any = {
        id: `${meta.route}-${lang}`, // Unique ID per language
        title,
        description: description || undefined,
        url: meta.route,
        category,
        tags: meta.tags || [],
        language: lang,
        translations,
      };

      searchableItems.push(item);
    }
  }

  searchIndex.replaceItems(searchableItems);
  return searchIndex;
}
