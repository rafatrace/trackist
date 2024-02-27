export type Theme = Record<string, string>

const themeColors: Record<Themes, Colors> = {
  light: {
    n10: '#FFFFFF',
    n20: '#F3F3F3',
    n30: '#D9D9DD',
    n40: '#868686',
    n60: '#3F3F3F',
    n70: '#1B1C1D',
    n80: '#101313',
    accent: '#37A79E'
  },
  dark: {
    n10: '#101313',
    n20: '#1B1C1D',
    n30: '#3F3F3F',
    n40: '#868686',
    n60: '#D9D9DD',
    n70: '#F3F3F3',
    n80: '#FFFFFF',
    accent: '#37A79E'
  }
}

export default themeColors

export type Themes = 'dark' | 'light'

export type Colors = {
  n10: string
  n20: string
  n30: string
  n40: string
  n60: string
  n70: string
  n80: string
  accent: string
}
