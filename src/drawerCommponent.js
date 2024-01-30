import React, { useRef, useState } from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import images from './images';
import { ScrollView } from 'react-native-gesture-handler';
const DrawerCommponent = ({ navigation }) => {
  const generalOptions = [
    { title: 'Home' },
    { title: 'Bookmarks' },
    { title: 'Rate Us' },
  ];

  const proOptions = [
    { title: 'Get Pro To Remove Ads' },
  ];

  const moreOptions = [
    { title: 'More Apps' },
    { title: 'Feedback' },
    { title: 'Share App' },
  ];

  const renderOptionItem = ({ item }) => (
    <TouchableOpacity style={styles.optionItem} onPress={() => {}}>
      <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
    <View style={styles.container}>
     
      <ImageBackground
        style={styles.drawerHeader}
        source={images.icon}
      >
        {/* <Image
          style={styles.drawerLogo}
          source={images.icon}
        /> */}
      </ImageBackground>
      <View style={styles.drawerOptionsContainer}>
        <Text style={styles.drawerSectionHeading}>General</Text>
        {generalOptions.map((option, index) => (
          <React.Fragment key={index}>
            {renderOptionItem({ item: option })}
          </React.Fragment>
        ))}
        <Text style={styles.drawerSectionHeading}>Get Pro Version</Text>
        {proOptions.map((option, index) => (
          <React.Fragment key={index}>
            {renderOptionItem({ item: option })}
          </React.Fragment>
        ))}
        <Text style={styles.drawerSectionHeading}>More</Text>
        {moreOptions.map((option, index) => (
          <React.Fragment key={index}>
            {renderOptionItem({ item: option })}
          </React.Fragment>
        ))}
      </View>
    </View>
    </ScrollView>
  );
};

export default DrawerCommponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  drawerHeader: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  drawerLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  drawerOptionsContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 16,
  },
  drawerSectionHeading: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  optionItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 17,
    fontWeight: '500',
    color: 'gray',
  },
});


