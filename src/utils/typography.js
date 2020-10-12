import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Raleway"],
  bodyFontFamily: ["Montserrat"],
  googleFonts: [
    {
      name: 'Raleway',
      styles: [
        '300',
        '400',
        '500',
        '600',
        '700'
      ],
    },
    {
      name: 'Montserrat',
      styles: [
        '300',
        '400',
        '500',
        '600',
        '700'
      ],
    }
  ]
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;