export default {
  /**
   * Concerne les styles généraux en fonction des settings
   */
  color: {
    text: "var(--wp--preset--color--black)",
  },
  spacing: {
    blockGap: "32px",
  },
  /**
   * Concerne les styles spécifiques à un block
   */
  blocks: {
    "core/paragraph": {
      typography: {
        fontFamily: "var(--wp--preset--font-family--inter)",
        fontSize: "var(--wp--preset--font-size--medium)",
        fontWeight: "500",
        lineHeight: "1.4",
      },
    },
    "core/heading": {
      typography: {
        fontFamily: "var(--wp--preset--font-family--work-sans)",
        fontWeight: "600",
        lineHeight: "1.2",
      },
    },
    "core/button": {
      border: { radius: "48px", width: "2px" },
      color: {
        text: "#fff",
        background: "#1D4ED8",
      },
      spacing: {
        padding: {
          top: "var(--wp--preset--spacing--12)",
          right: "var(--wp--preset--spacing--32)",
          bottom: "var(--wp--preset--spacing--12)",
          left: "var(--wp--preset--spacing--32)",
        },
      },
      variations: {
        fill: {
          color: {
            text: "#fff",
            background: "#1D4ED8",
          },
        },
        outline: {
          color: {
            text: "#fff",
            background: "transparent",
          },
        },
      },
    },
    "core/cover": {
      border: { radius: "20px" },
      spacing: {
        padding: {
          top: "167.5px",
          bottom: "167.5px",
        },
      },
    },
    "core/media-text": {
      spacing: {
        padding: {
          top: "var(--wp--preset--spacing--20)",
          bottom: "var(--wp--preset--spacing--20)",
        },
      },
    },
    "telescope-blocks/hero-section": {
      spacing: {
        margin: {
          bottom: "var(--wp--preset--spacing--84)",
        },
      },
    },
    "telescope-blocks/hero-section-content": {
      /**
       * Uniquement pour les éléments :
       * - link (a)
       * - h1 to h6
       * - heading : all h
       * - button
       * - caption
       * - cite
       * - form elements
       * https://fullsiteediting.com/lessons/theme-json-elements/
       */
      elements: {
        heading: {
          typography: {
            fontSize: "var(--wp--preset--font-size--4-x-large)",
          },
        },
      },
    },
    "telescope-blocks/slider-posts-section": {
      spacing: {
        margin: {
          bottom: "var(--wp--preset--spacing--84)",
        },
      },
      elements: {
        heading: {
          typography: {
            fontSize: "var(--wp--preset--font-size--3-x-large)",
          },
          spacing: {
            margin: {
              bottom: "var(--wp--preset--spacing--32)",
            },
          },
        },
      },
    },
    "telescope-blocks/half-section-content": {
      elements: {
        heading: {
          typography: {
            fontSize: "var(--wp--preset--font-size--4-x-large)",
          },
          spacing: {
            padding: {
              left: "var(--wp--preset--spacing--84)",
              right: "var(--wp--preset--spacing--84)",
            },
            margin: {
              top: "var(--wp--preset--spacing--20)",
            },
          },
        },
      },
    },
    "telescope-blocks/newsletter-section": {
      color: {
        text: "var(--wp--preset--color--black)",
      },
      spacing: {
        padding: {
          top: "var(--wp--preset--spacing--84)",
          bottom: "var(--wp--preset--spacing--84)",
        },
      },
      elements: {
        heading: {
          typography: {
            fontSize: "var(--wp--preset--font-size--3-x-large)",
          },
        },
      },
    },
  },
};
