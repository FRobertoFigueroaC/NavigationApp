
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import { globalStyles } from '../../presentation/theme/theme';

interface Props {
  onPress: () => void;
  // onPress: ((event?: GestureResponderEvent) => void) | null | undefined;
  label: string;
}



export const PrimaryButton = ({onPress, label}: Props) => {
  return (
    <Pressable 
      onPress={ () => onPress() }
      style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  )
}