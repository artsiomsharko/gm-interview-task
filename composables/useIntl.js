import { CUSTOM_TRANSLATION_LS_KEY, DEFAULT_LOCALE } from "@/constants/locale";

import en from "@/locales/en.json";
import ru from "@/locales/ru.json";
import zh from "@/locales/zh.json";

export const useIntl = () => {
  const locale = useCookie("locale", {
    default: () => DEFAULT_LOCALE,
  });

  const defaultTranslation = computed(
    () =>
      ({
        en,
        ru,
        zh,
      }[locale.value] || en)
  );

  const translation = computed(() => {
    const customTranslation = process.client
      ? JSON.parse(localStorage.getItem(CUSTOM_TRANSLATION_LS_KEY))?.[locale.value] || {}
      : {};

    Object.entries(customTranslation).forEach(([key, value]) => {
      const keys = key.split(".").filter((k) => k);
      let currentObj = defaultTranslation.value;

      keys.slice(0, -1).forEach((k) => {
        if (currentObj.hasOwnProperty(k)) {
          currentObj = currentObj[k];
        }
      });

      const lastKey = keys[keys.length - 1];
      if (currentObj.hasOwnProperty(lastKey)) {
        currentObj[lastKey] = value;
      }
    });

    return defaultTranslation.value;
  });

  const t = (key) => {
    if (!key) return "";

    const translatedValue = key
      .split(".")
      .filter((k) => k)
      .reduce((obj, k) => obj?.[k], translation.value);

    return translatedValue || key;
  };

  return {
    locale,
    t,
  };
};
