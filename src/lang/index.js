import Vue from "vue";
import VueI18n from "vue-i18n";
import elementEnLocale from "element-ui/lib/locale/lang/en"; // element-ui lang
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN"; // element-ui lang
import neoEnLocale from "neo-components/lib/locale/lang/en"; // neo-components lang
import neoZhLocale from "neo-components/lib/locale/lang/zh-CN"; // neo-components lang
import enLocale from "./en";
import zhLocale from "./zh";
import { getLocalDataByName } from "../utils/index";

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
    ...neoEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale,
    ...neoZhLocale
  }
};

const i18n = new VueI18n({
  locale: getLocalDataByName("language") || "zh", // set locale
  messages,
  fallbackLocale: "zh"
});

export default i18n;
