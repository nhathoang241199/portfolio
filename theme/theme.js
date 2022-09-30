import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  blackAlpha: {
    500: '#191919'
  },
}

const fonts = {
    heading: `'DM Sans', sans-serif`,
    body: `'Poppins', sans-serif`,
  };
const theme = extendTheme({ colors, fonts })
export default theme;