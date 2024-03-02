import { router, useLocalSearchParams } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Block from '~components/atoms/Block'
import TextLabel from '~components/atoms/TextLabel'

export default function Habit() {
  const { id } = useLocalSearchParams()

  const goBack = () => {
    if (router.canGoBack()) {
      router.back()
    }
  }

  return (
    <Block flex={1} style={{ padding: 20 }}>
      <SafeAreaView edges={['bottom']}>
        <TouchableOpacity onPress={goBack}>
          <TextLabel size="lg" color="n80">
            Close
          </TextLabel>
        </TouchableOpacity>
        <TextLabel>Id: {id}</TextLabel>
      </SafeAreaView>
    </Block>
  )
}
