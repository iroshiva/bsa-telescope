/**
 * Concerne les settings pour le block editor
 * - inspector control
 * - content width
 * What customization options should be made available or hidden from the user.
 * What are the default colors, font sizes… available to the user.
 * Defines the default layout of the editor (widths and available alignments).
 */
export default {
  /**
   * If true, enable following sections
   * - Dimensions
   * - Block spacing
   * - Border
   */
  appearanceTools: true,
  /**
   * General settings Presets
   * Class generated --wp--preset...
   */
  // Inspector color section
  color: {
    // Default color settings displayed Color sections.
    defaultPalette: false,
    defaultDuotone: false,
    defaultGradients: false,
    // Custom settings
    custom: false,
    customDuotone: false,
    customGradient: false,
    // Allow Color sections.
    text: true,
    background: false,
    heading: true,
    overlay: true,
    link: false,
    // Define a Theme Palette
    palette: [
      {
        slug: "primary",
        color: "#1D4ED8",
        name: "Primary",
      },
      {
        slug: "accent",
        color: "#B48E42",
        name: "Accent",
      },
      {
        slug: "black",
        color: "#0A0A0B",
        name: "Black",
      },
      {
        slug: "white",
        color: "#FFFFFF",
        name: "White",
      },
      {
        slug: "base",
        color: "#FFFFFF",
        name: "Base",
      },
      {
        slug: "contrast-lower",
        color: "#F4F4F5",
        name: "Lower",
      },
      {
        slug: "contrast-low",
        color: "#D4D4D8",
        name: "Low",
      },
      {
        slug: "contrast-medium",
        color: "#71717A",
        name: "Medium",
      },
      {
        slug: "contrast-high",
        color: "#3F3F46",
        name: "High",
      },
      {
        slug: "contrast-higher",
        color: "#18181B",
        name: "Higher",
      },
    ],
    // Define a Theme duotone
    duotone: [],
    // Define a Theme Gradients for Background color
    gradients: [],
  },
  // Inspector typography section
  typography: {
    // Font size section is always enabled
    customFontSize: false,
    fontStyle: true,
    fontWeight: true, // called Appearence
    lineHeight: true,
    letterSpacing: true,
    textDecoration: true,
    textTransform: true, // called Letter Case
    dropCap: false,
    fluid: false,
    fontSizes: [
      {
        slug: "x-small",
        size: "12px",
        name: "X Small",
      },
      {
        slug: "small",
        size: "14px",
        name: "Small",
      },
      {
        slug: "base",
        size: "16px",
        name: "Base",
      },
      {
        slug: "medium",
        size: "18px",
        name: "Medium",
      },
      {
        slug: "large",
        size: "20px",
        name: "Large",
      },
      {
        slug: "x-large",
        size: "24px",
        name: "X Large",
      },
      {
        slug: "2-x-large",
        size: "30px",
        name: "2X Large",
      },
      {
        slug: "3-x-large",
        size: "36px",
        name: "3X Large",
      },
      {
        slug: "4-x-large",
        size: "48px",
        name: "4X Large",
      },
    ],
    fontFamilies: [
      {
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
        name: "System Font",
        slug: "system-font",
      },
      {
        fontFamily: "Inter, serif",
        name: "Inter",
        slug: "inter",
        fontFace: [
          {
            fontFamily: "Inter ExtraLight",
            fontStyle: "normal",
            fontWeight: "200",
            src: [
              "file:./assets/fonts/Inter-ExtraLight.woff2",
              "file:./assets/fonts/Inter-ExtraLight.woff",
            ],
          },
          {
            fontFamily: "Inter Light",
            fontStyle: "normal",
            fontWeight: "300",
            src: [
              "file:./assets/fonts/Inter-Light.woff2",
              "file:./assets/fonts/Inter-Light.woff",
            ],
          },
          {
            fontFamily: "Inter Regular",
            fontStyle: "normal",
            fontWeight: "400",
            src: [
              "file:./assets/fonts/Inter-Regular.woff2",
              "file:./assets/fonts/Inter-Regular.woff",
            ],
          },
          {
            fontFamily: "Inter Medium",
            fontStyle: "normal",
            fontWeight: "500",
            src: [
              "file:./assets/fonts/Inter-Medium.woff2",
              "file:./assets/fonts/Inter-Medium.woff",
            ],
          },
          {
            fontFamily: "Inter SemiBold",
            fontStyle: "normal",
            fontWeight: "600",
            src: [
              "file:./assets/fonts/Inter-SemiBold.woff2",
              "file:./assets/fonts/Inter-SemiBold.woff",
            ],
          },
          {
            fontFamily: "Inter Bold",
            fontStyle: "normal",
            fontWeight: "700",
            src: [
              "file:./assets/fonts/Inter-Bold.woff2",
              "file:./assets/fonts/Inter-Bold.woff",
            ],
          },
          {
            fontFamily: "Inter ExtraBold",
            fontStyle: "normal",
            fontWeight: "800",
            src: [
              "file:./assets/fonts/Inter-ExtraBold.woff2",
              "file:./assets/fonts/Inter-ExtraBold.woff",
            ],
          },
          {
            fontFamily: "Inter Black",
            fontStyle: "normal",
            fontWeight: "900",
            src: [
              "file:./assets/fonts/Inter-Black.woff2",
              "file:./assets/fonts/Inter-Black.woff",
            ],
          },
        ],
      },
      {
        fontFamily: "'Work Sans', sans-serif",
        name: "Work Sans",
        slug: "work-sans",
        fontFace: [
          {
            fontFamily: "'Work Sans ExtraLight'",
            fontStyle: "normal",
            fontWeight: "200",
            src: [
              "file:./assets/fonts/Work-Sans-ExtraLight.woff2",
              "file:./assets/fonts/Work-Sans-ExtraLight.woff",
            ],
          },
          {
            fontFamily: "'Work Sans Light'",
            fontStyle: "normal",
            fontWeight: "300",
            src: [
              "file:./assets/fonts/Work-Sans-Light.woff2",
              "file:./assets/fonts/Work-Sans-Light.woff",
            ],
          },
          {
            fontFamily: "'Work Sans Regular'",
            fontStyle: "normal",
            fontWeight: "400",
            src: [
              "file:./assets/fonts/Work-Sans-Regular.woff2",
              "file:./assets/fonts/Work-Sans-Regular.woff",
            ],
          },
          {
            fontFamily: "'Work Sans Medium'",
            fontStyle: "normal",
            fontWeight: "500",
            src: [
              "file:./assets/fonts/Work-Sans-Medium.woff2",
              "file:./assets/fonts/Work-Sans-Medium.woff",
            ],
          },
          {
            fontFamily: "'Work Sans SemiBold'",
            fontStyle: "normal",
            fontWeight: "600",
            src: [
              "file:./assets/fonts/Work-Sans-SemiBold.woff2",
              "file:./assets/fonts/Work-Sans-SemiBold.woff",
            ],
          },
          {
            fontFamily: "'Work Sans Bold'",
            fontStyle: "normal",
            fontWeight: "700",
            src: [
              "file:./assets/fonts/Work-Sans-Bold.woff2",
              "file:./assets/fonts/Work-Sans-Bold.woff",
            ],
          },
          {
            fontFamily: "'Work Sans ExtraBold'",
            fontStyle: "normal",
            fontWeight: "800",
            src: [
              "file:./assets/fonts/Work-Sans-ExtraBold.woff2",
              "file:./assets/fonts/Work-Sans-ExtraBold.woff",
            ],
          },
          {
            fontFamily: "'Work Sans Black'",
            fontStyle: "normal",
            fontWeight: "900",
            src: [
              "file:./assets/fonts/Work-Sans-Black.woff2",
              "file:./assets/fonts/Work-Sans-Black.woff",
            ],
          },
        ],
      },
    ],
  },
  /**
   * General Custom settings
   * Class generated --wp--custom...
   */
  custom: {
    baseFont: 16,
    lineHeight: {
      small: 1.2,
      medium: 1.4,
      large: 1.8,
    },
  },
  /**
   * If appearanceTools set to true.
   */
  // Inspector Dimensions section
  spacing: {
    padding: true,
    margin: true,
    units: ["px", "em", "rem", "vh", "vw", "%"],
    spacingScale: {
      steps: 0,
    },
    spacingSizes: [
      {
        name: "XXXXS",
        size: "2px",
        slug: "2",
      },
      {
        name: "XXXS",
        size: "4px",
        slug: "4",
      },
      {
        name: "XXS",
        size: "6px",
        slug: "6",
      },
      {
        name: "XS",
        size: "8px",
        slug: "8",
      },
      {
        name: "SM",
        size: "12px",
        slug: "12",
      },
      {
        name: "MD",
        size: "20px",
        slug: "20",
      },
      {
        name: "LG",
        size: "32px",
        slug: "32",
      },
      {
        name: "XL",
        size: "32px",
        slug: "52",
      },
      {
        name: "XXL",
        size: "84px",
        slug: "84",
      },
      {
        name: "XXXL",
        size: "136px",
        slug: "136",
      },
      {
        name: "XXXXL",
        size: "220px",
        slug: "220",
      },
    ],
  },
  // Inspector Border section
  border: {
    radius: false,
    color: false,
    style: false,
    width: false,
  },
  /**
   * Defines the width of the content.
   */
  layout: {
    contentSize: "768px",
    wideSize: "1024px",
  },
  /**
   * Specific Block Default settings.
   * Will override the default general settings.
   */
  blocks: {
    // "core/button": {
    //   border: {
    //     radius: false,
    //   },
    //   color: {
    //     palette: [
    //       {
    //         slug: "cyan",
    //         color: "#03cffc",
    //         name: "Cyan",
    //       },
    //     ],
    //   },
    // },
  },
};