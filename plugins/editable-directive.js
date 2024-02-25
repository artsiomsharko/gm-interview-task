import { CUSTOM_TRANSLATION_LS_KEY } from "@/constants/locale";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("editable", {
    mounted(el, { value: key }) {
      const locale = useCookie("locale");

      const saveText = () => {
        const newText = el.innerText;

        const oldState = JSON.parse(localStorage.getItem(CUSTOM_TRANSLATION_LS_KEY));
        const newState = {
          ...oldState,
          [locale.value]: { ...oldState?.[locale.value], [key]: newText },
        };

        localStorage.setItem(CUSTOM_TRANSLATION_LS_KEY, JSON.stringify(newState));
      };

      const disableEditor = () => {
        el.contentEditable = "false";
        saveText();
      };

      const enableEditor = () => {
        el.contentEditable = "true";
        el.focus();
      };

      el.addEventListener("dblclick", (e) => {
        if (!e.ctrlKey) return;

        if (el.contentEditable === "true") {
          disableEditor();
        } else {
          enableEditor();
        }
      });

      el.addEventListener("keydown", (event) => {
        if (["Escape", "Enter"].includes(event.key) && el.contentEditable === "true") {
          disableEditor();
        }
      });
    },
  });
});
