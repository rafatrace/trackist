import { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import themeColors, { Colors as ColorsType, Theme, Themes } from '~constants/themeColors'
import { useColorScheme } from 'react-native'

/**
 * Create context
 */
export const ThemeContext = createContext<{
  theme: Themes
  colors: ColorsType
  isLoaded: boolean
  changeTopTheme?: (t: 'default' | Themes) => void
  changeColors?: (t: string) => void
}>({
  theme: 'light',
  colors: themeColors.light,
  isLoaded: false,
  changeTopTheme: () => null,
  changeColors: () => null
})

/**
 * Create provider
 */
export default function ThemeProvider({ children }: React.PropsWithChildren<unknown>) {
  // Services
  const systemMode = useColorScheme()

  // Local state
  const [theme, setTheme] = useState<Themes>(systemMode)
  const [systemDefault, setSystemDefault] = useState<boolean>(true)
  const [colors, setColors] = useState<ColorsType>(themeColors[systemMode])
  const [isLoaded, setLoaded] = useState<boolean>(false)

  // When system mode changes
  useEffect(() => {
    if (systemDefault) {
      setTheme(systemMode)
      setColors(themeColors[systemMode])
    }
  }, [systemMode, systemDefault])

  // On first load
  useEffect(() => {
    const loadThemeFromStorage = async () => {
      const defaultTheme = (await AsyncStorage.getItem('default_theme')) as '0' | '1' | null
      if (defaultTheme === '0') {
        const storageTheme = (await AsyncStorage.getItem('theme')) as Themes | null
        if (storageTheme != null) {
          changeTheme(storageTheme)
        }
      }

      setLoaded(true)
    }

    loadThemeFromStorage()
  }, [])

  // Save in store everythimg systemDefault changes
  useEffect(() => {
    AsyncStorage.setItem('default_theme', systemDefault ? '1' : '0')
  }, [systemDefault])

  /**
   * Change top theme
   */
  const changeTopTheme = (t: 'default' & Theme) => {
    if (t === 'default') {
      setSystemDefault(true)
      changeTheme(systemMode)
    } else {
      setSystemDefault(false)
      changeTheme(t)
    }
  }

  // Change theme
  const changeTheme = (t: Themes): void => {
    if (t) {
      setTheme(t)
      setColors(themeColors[t])
      AsyncStorage.setItem('theme', t)
    }
  }

  // Change colors
  const changeColors = (): void => {
    setColors(themeColors[theme])
  }

  return (
    <ThemeContext.Provider value={{ theme, colors, isLoaded, changeTopTheme, changeColors }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
