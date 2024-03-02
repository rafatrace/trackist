import Block from '~components/atoms/Block'
import SmallTitle from '~components/atoms/SmallTitle'
import OptionButton from '~components/molecules/OptionButton'

type TOptionsProps = {
  archive: () => void
  remove: () => void
}

const Options = ({ archive, remove }: TOptionsProps) => {
  // Services
  return (
    <>
      <SmallTitle>More</SmallTitle>
      <Block style={{ marginTop: 5 }}>
        <OptionButton icon="box" action={archive}>
          Archive habit
        </OptionButton>
        <OptionButton icon="trash" action={remove}>
          Delete forever
        </OptionButton>
      </Block>
    </>
  )
}

export default Options
