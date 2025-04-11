// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

import Infobox from "../../components/infobox.vue";
import Footer from "../../components/Footer.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "doc-footer-before": () => h(Footer),
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("Infobox", Infobox);
  },
} satisfies Theme;
