import { Text,  View,} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigation';


export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <SideMenuNavigator/>
    </NavigationContainer>
  );
}

