import React, { useEffect } from 'react';
import { Text,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTab1 from './bottomTab1';
import BottomTab2 from './bottomTab2';
import BottomTab3 from './bottomTab3';
import images from './images';
import BottomTab4 from './bottomTab4';

const bottomTab = createBottomTabNavigator();

const BottomTab = ({navigation}) => {

  return( 
  <bottomTab.Navigator>
    <bottomTab.Screen
       name="BottomTab1"
       component={BottomTab1}
       options={{headerShown: false,tabBarIcon: tabInfo => {
        return(
          <Image
          source={images.homeicon}
          style={{
            height:30,
            width:30,
            tintColor: tabInfo.focused ? "#ed29ed":"black"
          }}
          />
        )
       }}}
    />
     <bottomTab.Screen
       name="BottomTab2"
       component={BottomTab2}
       options={{headerShown: false,tabBarIcon: tabInfo => {
        return(
          <Image
          source={images.plusicon}
          style={{
            height:30,
            width:30,
            tintColor: tabInfo.focused ? "#ed29ed":"black"
          }}
          />
        )
       }}}
    />
     <bottomTab.Screen
       name="BottomTab3"
       component={BottomTab3}
       options={{headerShown: false,tabBarIcon: tabInfo => {
        return(
          <Image
          source={images.settingicon}
          style={{
            height:30,
            width:30,
            tintColor: tabInfo.focused ? "#ed29ed":"black"
          }}
          />
        )
       }}}
    />
      <bottomTab.Screen
       name="BottomTab4"
       component={BottomTab4}
       options={{headerShown: false,tabBarIcon: tabInfo => {
        return(
          <Image
          source={images.backArrow}
          style={{
            height:30,
            width:30,
            tintColor: tabInfo.focused ? "#ed29ed":"black"
          }}
          />
        )
       }}}
    />
  </bottomTab.Navigator>
  )
};



// function BottomTab0({navigation}){
//   return   <Stack.Navigator initialRouteName='bottomTab1'>
//     <Stack.Screen
//      name='bottomTab1'
//      component={BottomTab1}
//      options={{
//       headerLeft: () => (
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//           <Image source={images.drawericon} style={{height: 30, width: 35}} />
//         </TouchableOpacity>
//       )
//      }}/>
//     <Stack.Screen
//      name='categoryPage'
//      component={CatergeryPage}
//      options={{
//       headerLeft: () => (
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//           <Text>Drawer</Text>
//         </TouchableOpacity>
//       )
//      }}/>
     
//   </Stack.Navigator>
// }
export default BottomTab;