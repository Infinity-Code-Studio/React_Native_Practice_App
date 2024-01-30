import React, { useEffect } from 'react';
import { Text, View,Button } from 'react-native';
import { updateGlobalValue } from './util';

const BottomTab2 = ({navigation}) => {
  return( 
    <View style={{flex:1,justifyContent:'center'}} >
  <Text  style={{color:'black'}} >{updateGlobalValue}</Text>
  <Button
        title="Close drawer"
        onPress={() => {navigation.openDrawer()}}
      />
  </View>
  )
};

export default BottomTab2;