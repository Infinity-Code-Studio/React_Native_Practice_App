import React, { useEffect } from 'react';
import { Text, View,Button } from 'react-native';

const BottomTab3 = ({navigation}) => {
  return( 
    <View style={{flex:1,justifyContent:'center'}} >
  <Text  style={{color:'black'}} >BottomTab3</Text>
  <Button
        title="Close drawer"
        onPress={() => {navigation.openDrawer()}}
      />
  </View>
  )
};

export default BottomTab3;