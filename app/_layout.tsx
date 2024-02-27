import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import ThemeProvider from '~providers/ThemeProvider'

if (__DEV__) {
  import('../reactotron').then(() => console.log('Reactotron Configured'))
}

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  useEffect(() => {
    // Placeholder timeout before db search is developer
    setTimeout(() => {
      SplashScreen.hideAsync()
    }, 2000)
  }, [])

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="settings" options={{ title: 'Settings' }} />
        <Stack.Screen name="archive" options={{ title: 'Archive' }} />
      </Stack>
    </ThemeProvider>
  )
}
