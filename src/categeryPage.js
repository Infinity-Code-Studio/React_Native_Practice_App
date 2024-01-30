import React, { useEffect, useState ,useRef} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  TextBase,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import images from './images';


const CatergeryPage = ({...props}) => {

  return( 
    <ScrollView style={styles.mainView} >
      <TouchableOpacity onPress={() => props.navigation.goBack() }>
      <Image style={styles.rightarrow2} source={images.backArrow} />
      </TouchableOpacity>
        <View style={{
            height:150,
            backgroundColor: '#ffffff',
            borderRadius: 10,
            marginBottom: 20,
            marginLeft:10,
            marginRight:10,
            elevation: 10,
            margin: 4,
            marginTop: 20,
            }}>
        <View
            style={{
              flexDirection: 'row',
              height:'60%',
              backgroundColor: '',
              borderRadius: 6,
              marginTop:20,
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: 'black',
                marginLeft: '5%',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                width:'60%'
              }}>
             ok
            </Text>

            <Image style={{
              resizeMode: 'contain',
              height:'100%',
              // width: window.width * 0.32,
              // height: window.height * 0.18,
            }} source={images.bottles} />
          </View>
          <Text
            style={{
              fontSize: 17,
              color: 'gray',
              marginTop: -30,
              marginLeft: 20,

            }}>
            2 minutes read
          </Text>
        
        
        </View>
        

        <SafeAreaView style={styles.container2}>

            <FlatList
              data={INTRO}
              scrollEnabled={false} 
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
              
                
                return (
                  <TouchableWithoutFeedback onPress={()=> props.navigation.navigate('CategeryContent', { introduction: "this is content" })}>
                  <View style={[styles.card]}>
                    {/* <Image style={styles.Cardicons} source={images.icon} /> */}
                    <Image style={{
              resizeMode: 'contain',
              marginLeft:-10,
              height:'80%',
            }} source={images.bottles} />
                    <Text style={styles.cardtitle}>{item.title}</Text>
                    <Image
                      style={styles.rightarrow}
                      source={images.backArrow}
                    />
                  </View>
                  </TouchableWithoutFeedback>
                );
              }}
            />
          </SafeAreaView>
  
  
  </ScrollView>
  )
};

export default CatergeryPage;



const window = Dimensions.get('window');
const styles = StyleSheet.create({


  mainView:{
    flex:1,
    
  },
  headingText:{
    color:'black',
    fontSize:20,
    alignSelf:'center'
  },
  container: {
    flexDirection: 'row',
    position: 'relative',
    // width: window.width * 0.47,
    height: window.height * 0.08,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    // padding: 16,
    // marginBottom: 20,
    elevation: 6,
    // margin: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  backButton: {
    marginRight: 8,
    padding: 4,
    // backgroundColor: '#ddd',
    borderRadius: 4,
  },
  title: {
    flex: 1,
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 10,
    // textAlign: 'center',
    // textShadowColor: '#bbb',
    textShadowOffset: {width: 0, height: 0},
    // textShadowRadius: 2,
  },

  topImageStyle: {
    width: '95%',
    height: '95%',
    resizeMode: 'cover',
    borderRadius: 6,
    borderRadius: 10,
    // justifyContent: 'center',
    alignSelf: 'center',
    // color: 'black',
    // alignItems: 'center',
    // borderRadius: 20,
    // width: 300,
    // paddingVertical: 4,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#f7eee3',
  },
  card2: {
    width: window.width * 0.47,
    height: window.height * 0.28,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    // padding: 16,
    marginBottom: 20,
    elevation: 10,
    margin: 4,
    // alignSelf:"center",
    // alignItems:'center',
    // justifyContent: 'space-evenly',
  },

  Cardicons2: {
    height: 100,
    width: 100,

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
    alignSelf: 'center',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    // backgroundColor: '#f7eee3',
  },

  cardtitle2: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    marginLeft: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightarrow2: {
    height: 30,
    width: 30,
    tintColor: '#06d006',
    marginRight: 15,
    // marginTop:5,
    // resizeMode: 'contrain',
    // borderRadius: 10,
    // justifyContent: 'center',
    // alignSelf: 'center',
    // margin: 10,
    // color: 'black',
    // alignItems: 'center',
    // borderRadius: 20,
    // width: 300,
    // padding: 0,
    // paddingVertical: 4,
    // flexDirection: 'row',
    // alignSelf: 'flex-end',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#f7eee3',
  },

  // ................

  Cardicons: {
    
    height: '90%',
    width:'20%',
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
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#f7eee3',
  },

  cardtitle: {
    flex: 2,
    fontSize: 19,
    fontWeight: '500',
    color: 'black',
    marginLeft: 0,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightarrow: {
    // flex:0.5,
    marginRight:15,
    height: 30,
    width: 30,
    tintColor: '#d007d0',
    // resizeMode: 'contrain',
    // borderRadius: 10,
    // justifyContent: 'center',
    // alignSelf: 'center',
    // margin: 10,
    // color: 'black',
    // alignItems: 'center',
    // borderRadius: 20,
    // width: 300,
    // padding: 0,
    // paddingVertical: 4,
    // flexDirection: 'row',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    // backgroundColor: '#f7eee3',
  },

  card: {
    flexDirection: 'row',
    height: window.height * 0.15,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 0,
    marginRight:10,
    marginLeft:10,
    marginBottom: 20,
    elevation: 6,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  container2: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

const INTRO = [
  {
    heading: 'Basic Of Chemistry Chemistry',
    icons: images.icon,
    title: '1: Basic Of Chemistry Chemistry',
    id: 1,
  },
  {
    heading: 'Brancher Of Chemistry',
    icons: images.icon,
    title: '2: Brancher Of Chemistry',
    id: 2,
  },
  {
    heading: 'History Of Chemistry',
    icons: images.icon,
    title: '3: History Of Chemistry',
    id: 3,
  },
  {
    heading: 'History Of Chemistry',
    icons: images.icon,
    title: '4: History Of Chemistry',
    id: 4,
  },
];
