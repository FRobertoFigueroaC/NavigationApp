import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { Ionicon } from '../../components/shared/Ionicon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () =>  {
  return (
    <Tab.Navigator 
      sceneContainerStyle={{
        backgroundColor: globalColors.background
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        // headerShown: false
        tabBarLabelStyle: {
          marginBottom: 5
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent'
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0
        }
      }}>
      <Tab.Screen 
        name="Tab1"
        component={Tab1Screen}
        options={{
            title: 'Tab1',
            tabBarIcon: ({color}) => (<Ionicon name='rocket' color={color} size={20}/>)
          }} />
      <Tab.Screen 
        name="Tab2"
        component={TopTabsNavigator}
        options={{
            title: 'Tab2',
            tabBarIcon: ({color}) => (<Ionicon name='logo-docker' color={color} size={20}/>)
          }} />
      <Tab.Screen 
        name="Tab3"
        component={StackNavigator}
        options={{
            title: 'Tab3',
            tabBarIcon: ({color}) =>(<Ionicon name='logo-amazon' color={color} size={20}/>)
          }} />
    </Tab.Navigator>
  );
}