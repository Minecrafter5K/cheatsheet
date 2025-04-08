import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cheatsheet",
  description:
    "Daten, Fakten und Übersichten über verschiedenste naturwissenschfliche/technische Themen.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Übersicht", link: "/uebersicht" },
      { text: "Chemie", link: "/chemie/" },
    ],

    sidebar: [
      {
        text: "Chemie",
        items: [{ text: "Übersicht", link: "/chemie/" }],
      },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" }
    // ]
  },
});
