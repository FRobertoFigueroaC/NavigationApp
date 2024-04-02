import { useEffect } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { RootStackParams } from '../../routes/StackNavigator';

import { globalStyles } from '../../theme/theme';

export const ProductScreen = () => {

  const navigation = useNavigation();
  const params= useRoute<RouteProp<RootStackParams, 'Product'>>().params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    });
  }, [])
  


  return (
    <View style={globalStyles.container}>
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
      }}>
        {params.id} - {params.name}
      </Text>
    </View>
  )
}