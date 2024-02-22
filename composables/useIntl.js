import { DEFAULT_LOCALE } from "@/constants/locale";

import en from "@/locales/en.json";
import ru from "@/locales/ru.json";
import zh from "@/locales/zh.json";

export const useIntl = () => {
  const locale = useCookie("locale", {
    default: () => DEFAULT_LOCALE,
  });

  const translation = computed(
    () =>
      ({
        en,
        ru,
        zh,
      }[locale.value] || en)
  );

  const t = (key) => {
    if (!key) return "";

    const translatedValue = key
      .split(".")
      .filter((k) => k)
      .reduce((obj, k) => obj[k], translation.value);

    return translatedValue || key;
  };

  return {
    locale,
    translation,
    t,
  };
};
