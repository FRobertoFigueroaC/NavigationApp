import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { Text, useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabsNavigator';
import { Ionicon } from '../../components/shared/Ionicon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () =>  {
  const dimensions = useWindowDimensions()
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawerContent {...props}></CustomDrawerContent>}
      screenOptions={{
        drawerType: (dimensions.width >= 758) ? 'permanent': 'slide',
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20
        }
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        options={{drawerIcon: ({color}) => (<Ionicon name='grid-outline' color={color}/>)}}
        name="Tabs" 
        component={BottomTabNavigator} />
      <Drawer.Screen
        options={{drawerIcon: ({color}) => (<Ionicon name='person-outline' color={color}/>)}}
        name="Profile"
        component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
 return (
  <DrawerContentScrollView>
    <View style={{
      height: 200,
      backgroundColor: globalColors.primary,
      margin: 30,
      borderRadius: 50
    }}>
    </View>
    <DrawerItemList {...props}/>
    <Text> Hola Mundo </Text>
  </DrawerContentScrollView>
 )
}