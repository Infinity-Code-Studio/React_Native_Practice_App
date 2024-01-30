// this is dev
// misam ali raza 
import React, {useEffect} from 'react';

import {useRef, useState} from 'react';
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
import {updateGlobalValue} from './util';
import CatergeryPage from './categeryPage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const BottomTab1 = ({...props}) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  // const handleScroll = event => {
  //   const scrollOffset = event.nativeEvent.contentOffset.y;
  //   updateGlobalValue(scrollOffset);
  //   setScrollValue(scrollOffset);
  //   false;

  //   if (scrollOffset > scrollValue) {
  //     // Scrolling down, hide the header
  //     setTimeout(() => {
  //       setIsHeaderVisible(false);
  //     }, 500);
  //   } else {
  //     // Scrolling up, show the header
  //     setTimeout(() => {
  //       setIsHeaderVisible(true);
  //     }, 500);
  //   }
  // };
  const handleScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    setIsHeaderVisible(currentScrollY <= 0 || currentScrollY < scrollY);
    setScrollY(currentScrollY);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      {isHeaderVisible && (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => props.navigation.openDrawer()}
            style={styles.backButton}>
            <Image source={images.drawericon} style={{height: '60%',resizeMode:'contain',marginLeft:-35}} />
          </TouchableOpacity>
          <Text style={styles.title}>Chemistry Book</Text>
        </View>
      )}

<ScrollView onScroll={handleScroll} scrollEventThrottle={500}>
        <View
          style={{
            flexDirection:'row',
            width: window.width * 0.95,
            height: window.height * 0.20,
            backgroundColor: '#ffffff',
            borderRadius: 6,
            marginBottom: 20,
            elevation: 10,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          {/* <Image style={styles.topImageStyle} source={images.bgcolorimage} /> */}
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              width: window.width * 0.9,
              height: window.height * 0.15,
              // backgroundColor: '#ffffff',
              borderRadius: 6,
              // padding: 16,
              // marginBottom: 20,
              // elevation: 6,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                flex: 2,
                fontSize: 25,
                fontWeight: '700',
                color: 'black',
                marginLeft: 20,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              Chemistry Book {'\n'} & Quiz
            </Text>

            <Image style={styles.Cardicons1} source={images.bottles} />
          </View>
          <Text
            style={{
              fontSize: 17,
              color: 'gray',
              marginTop: 90,
              marginRight: 200,
            }}>
            Smart Education
          </Text>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 100,
                marginTop: 15,
                marginLeft: 10,
                elevation:20
              }}
              source={images.bottles}
            />
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                fontWeight: 'bold',
                marginTop: 20,
                marginLeft: 10,
                marginBottom: 10,
              }}>
              Introduction :
            </Text>
          </View>

          {/* Row Card   */}
          <SafeAreaView style={styles.container2}>

            <FlatList
              data={INTRO}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
                const handleItemPress = () => {
                  if (item.id === 0) {
                    props.navigation.navigate('CatergeryPage', {  INTRO });

                  } else if (item.id === 1) {
                    props.navigation.navigate('CatergeryPage', {  INTRO });
                  }  else if (item.id === 2) {
                    props.navigation.navigate('CatergeryPage', { INTRO });
                  } else if (item.id === 3) {
                    props.navigation.navigate('CatergeryPage', {  INTRO });
                  }
                };
                return (
                  <TouchableWithoutFeedback onPress={handleItemPress}>
                  <View style={[styles.card]}>
                    <Image style={styles.Cardicons} source={images.icon} />
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
        </View>

        {/* Grid Cards   */}
        <SafeAreaView style={styles.container2}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 100,
                marginTop: 5,
                marginLeft: 10,
              }}
              source={images.bottles}
            />
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                fontWeight: 'bold',
                marginTop: 10,
                marginLeft: 10,
                marginBottom: 30,
              }}>
              Branches Of Chemistry :
            </Text>
          </View>
          <FlatList
            numColumns={2}
            data={INTRO}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View style={[styles.card2]}>
                  <Image style={styles.Cardicons2} source={images.bottles} />
                  <Text style={styles.cardtitle2}>{item.title}</Text>
                  <Image style={styles.rightarrow2} source={images.backArrow} />
                </View>
              );
            }}
          />
        </SafeAreaView>

        {/* slider Cards  */}
        <SafeAreaView style={styles.container2}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 100,
                marginTop: 5,
                marginLeft: 10,
              }}
              source={images.bottles}
            />
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                fontWeight: 'bold',
                marginTop: 10,
                marginLeft: 10,
                marginBottom: 30,
              }}>
              Chemistry Chapter's
            </Text>
          </View>
          <FlatList
            horizontal
            data={INTRO}
            keyExtractor={item => item.id.toString()} // Make sure to convert the id to a string
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.card2}
                onPress={() => navigation.navigate('CatergeryPage')}>
                <Image style={styles.Cardicons2} source={images.bottles} />
                <Text style={styles.cardtitle2}>{item.title}</Text>
                <Image style={styles.rightarrow2} source={images.rightarrow2} />
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default BottomTab1;

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    // width: window.width * 0.47,
    height: window.height * 0.07,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    // padding: 16,
    // marginBottom: 20,
    elevation: 2,
    // margin: 4,
    alignItems: 'center',
  },
  backButton: {
    // backgroundColor: '#ddd',
  },
  title: {
    flex: 1,
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
    // textAlign: 'center',
    // textShadowColor: '#bbb',
    // textShadowOffset: {width: 10, height: 10},
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
    width: window.width * 0.46,
    height: window.height * 0.26,
    backgroundColor: '#ffffff',
    borderRadius: 1,
    marginBottom: 10,
    marginLeft:9,
    alignSelf:"center",
    alignItems:'center',
    justifyContent: 'space-evenly',
    borderRadius:3,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),
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
    alignSelf: 'flex-end',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#f7eee3',
  },

  // ................

  Cardicons1:{
    flex: 1,
    height: '90%',
    // resizeMode: 'contrain',
  },

  Cardicons: {
    flex: 1,
    height: '120%',
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
    marginLeft: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightarrow: {
    // flex:0.5,
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
    height: window.height * 0.13,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    padding: 16,
    marginRight:10,
    marginLeft:10,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 6,
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
    heading: '1: Baics Of Chemistry',
    icons: images.icon,
    title: '1: Basic Of Chemistry',

    id: 0,
  },
  {
    heading: 'Branches Of Chemistry',
    icons: images.icon,
    title: '2: Branches Of Chemistry',
    id: 1,
  },
  {
    heading: 'History Of Chemistry',
    icons: images.icon,
    title: '3: History Of Chemistry',
    id: 2,
  },
  {
    heading: 'History Of Chemistry',
    icons: images.icon,
    title: '4: History Of Chemistry',
    id: 3,
  },
];
