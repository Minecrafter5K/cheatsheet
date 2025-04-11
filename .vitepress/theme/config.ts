export default {
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
};
