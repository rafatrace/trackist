import Svg, { SvgProps, Path } from 'react-native-svg'
import Block from './Block'
import TextLabel from './TextLabel'
import { useTheme } from '~providers/ThemeProvider'

const Empty = (props: SvgProps) => {
  // Services
  const { colors } = useTheme()

  return (
    <Block rowCenter>
      <Svg width={140} height={153} fill="none" {...props} style={{ marginTop: 100 }}>
        <Path
          fill="#F2F2EF"
          d="M9.233 10c0-5.523 4.477-10 10-10h6.38c5.522 0 10 4.477 10 10v61.224H9.232V10ZM55.397 17.914c0-5.523 4.477-10 10-10h6.379c5.523 0 10 4.477 10 10v104.75h-26.38V17.914ZM101.56 33.742c0-5.523 4.477-10 10-10h6.38c5.522 0 10 4.477 10 10v63.861h-26.38V33.742Z"
        />
        <Path fill="#F2F2EF" d="M32.974 44.845h25.06v26.379h-25.06zM79.138 71.224h25.06v26.379h-25.06z" />
        <Path
          fill="#E9E9E7"
          d="M120.026 114.75h3.957v3.957h-3.957zM93.647 116.069h3.957v3.957h-3.957zM112.112 129.259h3.957v3.957h-3.957zM102.879 138.491h3.957v3.957h-3.957zM71.224 134.534h3.957v3.957h-3.957zM84.414 143.767h3.957v3.957h-3.957zM122.664 147.724h3.957v3.957h-3.957zM135.853 134.534h3.957v3.957h-3.957zM40.888 125.302h3.957v3.957h-3.957zM34.293 112.112h3.957v3.957h-3.957z"
        />
        <Path
          fill="#D5D5D3"
          d="M26.379 19.784h3.957v3.957h-3.957zM15.828 29.017h3.957v3.957h-3.957zM25.06 35.612h3.957v3.957H25.06zM15.828 48.802h3.957v3.957h-3.957zM23.741 59.353h3.957v3.957h-3.957zM31.655 50.121h3.957v3.957h-3.957zM38.25 59.353h3.957v3.957H38.25zM47.483 52.758h3.957v3.957h-3.957z"
        />
        <Path
          fill="#B3B4AE"
          d="M71.224 21.104h2.638v2.638h-2.638zM60.672 17.146h2.638v2.638h-2.638zM58.034 30.336h2.638v2.638h-2.638zM67.267 32.974h2.638v2.638h-2.638zM73.862 29.017H76.5v2.638h-2.638zM64.629 26.379h2.638v2.638h-2.638zM71.224 44.845h2.638v2.638h-2.638zM60.672 40.888h2.638v2.638h-2.638zM58.034 54.078h2.638v2.638h-2.638zM67.267 56.716h2.638v2.638h-2.638zM73.862 52.758H76.5v2.638h-2.638zM64.629 50.121h2.638v2.638h-2.638z"
        />
        <Path
          fill="#D5D5D3"
          d="M118.707 35.612h2.638v2.638h-2.638zM105.517 40.888h2.638v2.638h-2.638zM108.155 29.017h2.638v2.638h-2.638zM120.026 51.44h2.638v2.638h-2.638zM106.836 59.353h2.638v2.638h-2.638zM120.026 72.543h2.638v2.638h-2.638zM112.112 68.586h2.638v2.638h-2.638zM109.474 91.008h2.638v2.638h-2.638zM104.198 80.457h2.638v2.638h-2.638zM96.284 88.371h2.638v2.638h-2.638zM89.69 76.5h2.638v2.638H89.69z"
        />
        <Path
          fill="#B3B4AE"
          d="M71.224 67.267h2.638v2.638h-2.638zM60.672 63.31h2.638v2.638h-2.638zM58.034 76.5h2.638v2.638h-2.638zM67.267 79.138h2.638v2.638h-2.638zM73.862 75.181H76.5v2.638h-2.638zM64.629 72.543h2.638v2.638h-2.638zM71.224 91.008h2.638v2.638h-2.638zM60.672 87.052h2.638v2.638h-2.638zM58.034 100.241h2.638v2.638h-2.638zM67.267 102.879h2.638v2.638h-2.638zM73.862 98.922H76.5v2.638h-2.638zM64.629 96.284h2.638v2.638h-2.638zM71.224 113.431h2.638v2.638h-2.638zM60.672 109.474h2.638v2.638h-2.638zM64.629 118.707h2.638v2.638h-2.638z"
        />
        <Path
          fill="#E9E9E7"
          d="M19.784 123.983h3.957v3.957h-3.957zM48.802 138.491h3.957v3.957h-3.957zM58.034 149.043h3.957V153h-3.957zM27.698 142.448h3.957v3.957h-3.957zM7.914 146.405h3.957v3.957H7.914zM0 123.983h3.957v3.957H0z"
        />
      </Svg>
      <TextLabel size="xxl" weight="medium" color="n80" center style={{ marginTop: 30 }}>
        Oops!
      </TextLabel>
      <TextLabel size="md" weight="medium" color="n40" height={20} center style={{ marginTop: 10, maxWidth: 250 }}>
        You are not tracking any habbits yet. Start tracking now.
      </TextLabel>
    </Block>
  )
}

export default Empty