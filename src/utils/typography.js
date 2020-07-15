import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.618,
  scaleRatio: 2,
  bodyFontFamily: [
  	"-apple-system", 
    "BlinkMacSystemFont",
    "avenir next",
    "avenir",
    "helvetica neue", 
    "helvetica",
    "Ubuntu",
    "roboto",
    "noto", 
    "segoe ui",
    "arial", 
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
