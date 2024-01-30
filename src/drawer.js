import {View, Text} from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';
import DrawerCommponent from './drawerCommponent';

const _Drawer = createDrawerNavigator()

const Drawer = () => {
  return (
    
      <_Drawer.Navigator drawerContent={props=> <DrawerCommponent{...props}/>} >
       <_Drawer.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
       />
      </_Drawer.Navigator>
    
  );
};

export default Drawer;