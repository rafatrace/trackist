import { Stack } from 'expo-router'
import ThemeProvider from '~providers/ThemeProvider'

export default function Layout() {
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