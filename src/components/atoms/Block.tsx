import { View, StyleProp, ViewStyle, StyleSheet, LayoutChangeEvent } from 'react-native'

interface BlockProps {
  flex?: number
  gap?: number
  col?: boolean
  row?: boolean
  wrap?: boolean
  colCenter?: boolean
  colStart?: boolean
  colEnd?: boolean
  rowCenter?: boolean
  rowStart?: boolean
  rowEnd?: boolean
  spaceBetween?: boolean
  alignCenter?: boolean
  onLayout?: (event: LayoutChangeEvent) => void
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

export default function Block(props: BlockProps) {
  const blockStyles = [
    props.flex ? { flex: props.flex } : null,
    props.gap ? { gap: props.gap } : null,
    props.wrap ? styles.wrap : null,
    props.col ? styles.col : null,
    props.row ? styles.row : null,
    props.colCenter ? (props.row ? styles.colCenter : styles.rowCenter) : null,
    props.colStart ? (props.row ? styles.colStart : styles.rowStart) : null,
    props.colEnd ? (props.row ? styles.colEnd : styles.rowEnd) : null,
    props.rowCenter ? (props.row ? styles.rowCenter : styles.colCenter) : null,
    props.rowStart ? (props.row ? styles.rowStart : styles.colStart) : null,
    props.rowEnd ? (props.row ? styles.rowEnd : styles.colEnd) : null,
    props.spaceBetween ? styles.spaceBetween : null,
    props.alignCenter ? styles.alignCenter : null,
    props.style
  ]

  return (
    <View style={blockStyles} onLayout={props.onLayout}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  col: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  wrap: {
    flexWrap: 'wrap'
  },
  colCenter: {
    alignItems: 'center'
  },
  colStart: {
    alignItems: 'flex-start'
  },
  colEnd: {
    alignItems: 'flex-end'
  },
  rowCenter: {
    justifyContent: 'center'
  },
  rowEnd: {
    justifyContent: 'flex-end'
  },
  rowStart: {
    justifyContent: 'flex-start'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  alignCenter: {
    alignItems: 'center'
  }
})
