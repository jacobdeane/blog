import Typography from "typography"
//import sutroTheme from "typography-theme-sutro"

//delete sutroTheme.googleFonts

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.618,
  headerFontFamily: [
  	"-apple-system",
  	"BlinkMacSystemFont",
  	"Segoe UI",
  	"Roboto",
  	"Oxygen",
  	"Ubuntu",
  	"Cantarell",
  	"Fira Sans",
  	"Droid Sans",
  	"Helvetica Neue",
  	"sans-serif"
  ],
  bodyFontFamily: [
  	"-apple-system",
  	"BlinkMacSystemFont",
  	"Segoe UI",
  	"Roboto",
  	"Oxygen",
  	"Ubuntu",
  	"Cantarell",
  	"Fira Sans",
  	"Droid Sans",
  	"Helvetica Neue",
  	"sans-serif"
  ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
