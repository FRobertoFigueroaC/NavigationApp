import { Pressable, Text, View } from 'react-native';
import { useNavigation , DrawerActions} from '@react-navigation/native';
import { useEffect } from 'react';
import { Ionicon } from './Ionicon';
import { globalColors } from '../../presentation/theme/theme';

export const HamburgerMenu = () => {

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable 
          style={{marginLeft: 5}}
          onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Ionicon name='menu-outline' color={globalColors.primary}/>
        </Pressable>
      )
    });
  
    
  }, [])
  
  return (<></>)
}