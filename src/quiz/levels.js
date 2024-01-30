import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView, TouchableWithoutFeedback, Text, StyleSheet, Button } from "react-native";
import { levelsData, getUserScore, isLevelUnlocked, saveUserProgress, getUserLevel } from "./data";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import images from '../images';

const Levels = ({ navigation }) => {
  const [userLevel, setUserLevel] = useState(1);
  const [userScore, setUserScore] = useState([]);

  useEffect(() => {
    // Fetch the user's level from local storage on screen load
    getUserLevel().then((level) => setUserLevel(level));
    getUserScore().then((score) => userScore(score));
  }, []);

  const unlockLevel = (levelId) => {
    if (isLevelUnlocked(levelId - 1)) {
      // Implement unlocking logic, e.g., by checking the user's score
      const updatedLevels = [...levelsData];
      updatedLevels[levelId - 1].unlocked = true;
      saveUserProgress(levelId, 0); // Reset the score for the new level
      levelsData = updatedLevels;
      setUserLevel(levelId);
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#f9f9f9' }}>
      
      <SafeAreaView style={styles.container2}>
        {levelsData.map((level) => (
          <TouchableWithoutFeedback key={level.id} onPress={() => level.unlocked ? navigation.navigate("Question", { levelId: level.id }) : {}}>
            <View style={[styles.card]}>
              <Image style={styles.Cardicons} source={images.icon} />
              <Text style={styles.cardtitle}>Level {level.id}</Text>
              <Image
                style={styles.rightarrow}
                source={images.backArrow}
              />
            </View>
          </TouchableWithoutFeedback>
        ))}

      </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    // width: window.width * 0.47,
    height: responsiveHeight(8),
    backgroundColor: '#ffffff',
    borderRadius: 6,
    // padding: 16,
    // marginBottom: 20,
    elevation: 2,
    // margin: 4,
    alignItems: 'center',
  },

  container2: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  Cardicons1: {
    flex: 1,
    height: responsiveHeight(16),
    // resizeMode: 'contrain',
  },
  Cardicons: {
    flex: 1,
    height: responsiveHeight(12),
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
    height: responsiveHeight(15),
    backgroundColor: '#ffffff',
    borderRadius: 6,
    padding: 16,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 6,
  },
});

export default Levels;