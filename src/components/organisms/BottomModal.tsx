import { ReactNode, useEffect, useState } from 'react'
import { Animated, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Block from '~components/atoms/Block'
import Icon from '~components/atoms/Icon'
import TextLabel from '~components/atoms/TextLabel'
import { radius } from '~constants/radius'
import { useTheme } from '~providers/ThemeProvider'

const opacity = new Animated.Value(0)
const bottom = new Animated.Value(-300)

type TBottomModalProps = {
  open: boolean
  close: () => void
  title: string
  children?: ReactNode
}

const BottomModal = ({ open, close, title, children }: TBottomModalProps) => {
  // Services
  const { colors } = useTheme()

  // Local state
  const [closing, setClosing] = useState<boolean>(false)

  useEffect(() => {
    if (open) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false
      }).start()

      Animated.timing(bottom, {
        toValue: 40,
        duration: 200,
        useNativeDriver: false
      }).start(() => {
        Animated.timing(bottom, {
          toValue: 30,
          duration: 200,
          useNativeDriver: false
        }).start()
      })
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }).start()

      Animated.timing(bottom, {
        toValue: -300,
        duration: 100,
        useNativeDriver: false
      }).start()

      setTimeout(() => {
        setClosing(false)
      }, 300)
    }
  }, [open])

  useEffect(() => {
    if (closing) {
      close()
    }
  }, [closing])

  const closeModal = () => {
    setClosing(true)
  }

  if (!open && !closing) return null

  return (
    <Block style={styles.mainContainer}>
      <TouchableWithoutFeedback style={styles.outside} onPress={closeModal}>
        <Animated.View style={{ ...styles.outsideAnimated, opacity }} />
      </TouchableWithoutFeedback>
      <Animated.View style={{ ...styles.container, bottom, backgroundColor: colors.n10 }}>
        <Block row colCenter spaceBetween>
          <TextLabel size="lg" weight="bold" color="n80">
            {title}
          </TextLabel>
          <TouchableOpacity onPress={closeModal}>
            <Icon type="close" color={colors.n80} />
          </TouchableOpacity>
        </Block>
        {children}
      </Animated.View>
    </Block>
  )
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  mainContainer: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  outside: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 },
  outsideAnimated: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
  container: { position: 'absolute', left: 30, right: 30, padding: 20, borderRadius: radius.xl }
})

export default BottomModal
