import { THabit } from '~@types/habits'
import TextLabel from '~components/atoms/TextLabel'
import DangerButton from '~components/molecules/DangerButton'
import BottomModal from '~components/organisms/BottomModal'
import * as Haptics from 'expo-haptics'

type TDeleteBottomModalProps = {
  habit: THabit
  open: boolean
  close: () => void
  remove: () => void
}

const DeleteBottomModal = ({ habit, open, close, remove }: TDeleteBottomModalProps) => {
  /**
   * Toggle new habit input
   */
  const removeWithHaptics = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
    remove()
  }

  return (
    <BottomModal {...{ open, close }} title="Are you sure?">
      <TextLabel size="md" weight="medium" color="n60" style={{ lineHeight: 20, marginVertical: 10 }}>
        Do you really want to remove{' '}
        <TextLabel weight="bold" color="n80">
          {habit?.name}
        </TextLabel>
        ? This action can’t be undone.
      </TextLabel>
      <DangerButton action={removeWithHaptics}>Delete habit</DangerButton>
    </BottomModal>
  )
}

export default DeleteBottomModal
