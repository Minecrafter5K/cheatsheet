import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cheatsheet",
  description:
    "Daten, Fakten und Übersichten über verschiedenste naturwissenschfliche/technische Themen.",
  markdown: {
    math: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Übersicht", link: "/uebersicht" },
      { text: "Biologie", link: "/biologie/" },
      { text: "Chemie", link: "/chemie/" },
    ],

    sidebar: [
      { text: "Physikalische Größen", link: "physikalischegroessen" },
      { text: "Einheiten", link: "einheiten" },
      {
        text: "Biologie",
        collapsed: true,
        items: [
          { text: "Übersicht", link: "/biologie/" },
          { text: "DNA", link: "/biologie/dna" },
          { text: "Protein Biosynthese", link: "/biologie/proteinbiosysthese" },
        ],
      },
      {
        text: "Chemie",
        items: [{ text: "Übersicht", link: "/chemie/" }],
      },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" }
    // ]
  },

  transformHead({ assets }) {
    const SpaceGrotesk = assets.find(
      (file) => /fonts\/SpaceGrotesk-VariableFont_wght\.\w+\.ttf/
    );
    if (SpaceGrotesk) {
      return [
        [
          "link",
          {
            rel: "preload",
            href: SpaceGrotesk,
            as: "font",
            type: "font/ttf",
            crossorigin: "",
          },
        ],
      ];
    }
  },
});
