import ko from "../../locales/ko.json";
import en from "../../locales/en.json";
import ja from "../../locales/ja.json";
import zh from "../../locales/zh.json";

export const locales = {
  ko,
  en,
  ja,
  zh,
};

export type Locale = keyof typeof locales;

export const localeNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
};

export const localeFlags: Record<Locale, string> = {
  ko: "🇰🇷",
  en: "🇺🇸",
  ja: "🇯🇵",
  zh: "🇨🇳",
};

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split(".");
  let value: any = locales[locale];

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      // Fallback to English if translation not found
      value = getNestedValue(locales.en, keys);
      break;
    }
  }

  return typeof value === "string" ? value : key;
}

function getNestedValue(obj: any, keys: string[]): any {
  let value = obj;
  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      return undefined;
    }
  }
  return value;
}

export function getTranslations(locale: Locale, key: string): any {
  const keys = key.split(".");
  let value: any = locales[locale];

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      // Fallback to English if translation not found
      value = getNestedValue(locales.en, keys);
      break;
    }
  }

  return value;
}
