import React, { useEffect } from 'react';
import { Text, View,Image, StyleSheet } from 'react-native';
import images from './images';

const SplashScreen = ({navigation}) => {

useEffect(()=>{
   setTimeout(()=>{
   navigation.replace('homePage')
   },2000)  
},[])

  return( 
    <View style={styles.splashscreen_main_view} >  
      
      <Image style={styles.Cardicons2} source={images.bottles} />
      <Text  style={{color:'black',fontWeight:'bold',fontSize:27,marginTop:20}} >Chemistry Quiz {'\n'}And Smart Book</Text>
    </View>
  
  
  )
};

export default SplashScreen;

const styles = StyleSheet.create({

  splashscreen_main_view :{
    flex:1,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',

  },

  Cardicons2: {
    height: 150,
    width: 150,
    marginTop:-150,
    
    // resizeMode: 'contrain',
    borderRadius: 10,
    // justifyContent: 'center',
    // alignSelf: 'center',
    // margin: 10,
    // marginLeft: 10,
    // color: 'black',
    // alignItems: 'center',
    // borderRadius: 20,
    // width: 300,
    // padding: 0,
    // paddingVertical: 4,
    // flexDirection: 'row',
    // alignSelf:'center',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    // backgroundColor: '#f7eee3',
  },
})