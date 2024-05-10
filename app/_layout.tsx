import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import useDatabase from '~hooks/useDatabase'
import HabitsProvider from '~providers/HabitsProvider'
import ThemeProvider from '~providers/ThemeProvider'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  // Services
  const { ready, error } = useDatabase()

  useEffect(() => {
    if (ready) {
      SplashScreen.hideAsync()
    }
  }, [ready])

  if (error != null) return null

  return (
    <ThemeProvider>
      <HabitsProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="settings" options={{ title: 'Settings', presentation: 'modal' }} />
          <Stack.Screen name="archive" options={{ title: 'Archive', presentation: 'modal' }} />
          <Stack.Screen name="habit/[id]" options={{ title: 'Habit', presentation: 'modal' }} />
        </Stack>
      </HabitsProvider>
    </ThemeProvider>
  )
}
