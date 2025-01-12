import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',
      rocketseat: '#8257e6',

      gray100: '#e1e1e6',
      gray400: '#8D8D99',
      gray300: '#c4c4cc',
      gray900: '#121214',
      gray800: '#202024',
      gray700: '#1e1e1e',
      
      green500: '#00875f',
      green300: '#00b37e',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '1.0rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  }
})