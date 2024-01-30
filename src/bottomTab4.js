import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView, TouchableWithoutFeedback, Text, StyleSheet, Button } from "react-native";
import { levelsData, getUserScore, isLevelUnlocked, saveUserProgress, getUserLevel } from "./quiz/data";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import images from './images';
import * as Progress from "react-native-progress";


const CustomProgressBar = ({ progress, width, color, height }) => {
  return (
    <View style={{ marginLeft: responsiveWidth(4), marginTop: responsiveHeight(2) }}>
      <Progress.Bar
        progress={progress}
        width={width}
        color={color}
        height={height}
      />
      <View style={{ position: 'absolute', width: '100%', alignItems: 'center' }}>
        <Text style={{ color: 'black' }}>{`${Math.round(progress * 100)}% Completed`}</Text>
      </View>
    </View>
  );
};


const BottomTab4 = ({ navigation }) => {

  const [progress, setProgress] = useState(0);

  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#f9f9f9' }}>

      <SafeAreaView style={styles.container2}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("levels", { name: "" })}>
          <View style={[styles.card]}>
            <View style={[styles.card2]}>
              <Image style={styles.Cardicons} source={images.icon} />
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Text style={styles.cardtitle}
                  adjustsFontSizeToFit={true}
                  numberOfLines={2}>1: Periodic Table Quiz</Text>
                <CustomProgressBar
                  progress={0.1}
                  width={responsiveWidth(55.5)}
                  color="#00C853"
                  height={responsiveHeight(2)}
                />
              </View>
              <Image
                style={styles.rightarrow}
                source={images.lock}
              />
            </View>
          </View>

        </TouchableWithoutFeedback>


        <TouchableWithoutFeedback onPress={() => navigation.navigate("levels", { name: "" })}>
          <View style={[styles.card]}>
            <View style={[styles.card2]}>
              <Image style={styles.Cardicons} source={images.icon} />
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Text style={styles.cardtitle}
                  adjustsFontSizeToFit={true}
                  numberOfLines={2}>2: Formulas Quiz?</Text>
                <CustomProgressBar
                  progress={0.1}
                  width={responsiveWidth(55.5)}
                  color="#00C853"
                  height={responsiveHeight(2)}
                />
              </View>
              <Image
                style={styles.rightarrow}
                source={images.lock}
              />
            </View>
          </View>

        </TouchableWithoutFeedback>


        <TouchableWithoutFeedback onPress={() => navigation.navigate("levels", { name: "" })}>
          <View style={[styles.card]}>
            <View style={[styles.card2]}>
              <Image style={styles.Cardicons} source={images.icon} />
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Text style={styles.cardtitle}
                  adjustsFontSizeToFit={true}
                  numberOfLines={2}>3: Q and A Quiz?</Text>
                <CustomProgressBar
                  progress={0.1}
                  width={responsiveWidth(55.5)}
                  color="#00C853"
                  height={responsiveHeight(2)}
                />
              </View>
              <Image
                style={styles.rightarrow}
                source={images.lock}
              />
            </View>
          </View>

        </TouchableWithoutFeedback>


        <TouchableWithoutFeedback onPress={() => navigation.navigate("levels", { name: "" })}>
          <View style={[styles.card]}>
            <View style={[styles.card2]}>
              <Image style={styles.Cardicons} source={images.icon} />
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Text style={styles.cardtitle}
                  adjustsFontSizeToFit={true}
                  numberOfLines={2}>4: All random Quiz?</Text>
                <CustomProgressBar
                  progress={0.1}
                  width={responsiveWidth(55.5)}
                  color="#00C853"
                  height={responsiveHeight(2)}
                />
              </View>
              <Image
                style={styles.rightarrow}
                source={images.lock}
              />
            </View>
          </View>

        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigation.navigate("levels", { name: "" })}>
          <View style={[styles.card]}>
            <View style={[styles.card2]}>
              <Image style={styles.Cardicons} source={images.icon} />
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Text style={styles.cardtitle}
                  adjustsFontSizeToFit={true}
                  numberOfLines={2}>5: Chemistry Master ?</Text>
                <CustomProgressBar
                  progress={0.1}
                  width={responsiveWidth(55.5)}
                  color="#00C853"
                  height={responsiveHeight(2)}
                />
              </View>
              <Image
                style={styles.rightarrow}
                source={images.lock}
              />
            </View>
          </View>

        </TouchableWithoutFeedback>

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
    height: responsiveHeight(12),
    width: responsiveWidth(25),
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
    fontSize: 19,
    fontWeight: '500',
    marginTop:responsiveHeight(2),
    color: 'black',
    marginLeft: 20,
  },
  rightarrow: {
    // flex:0.5,
    height: responsiveHeight(3.5),
    width: responsiveWidth(7),
    marginTop:responsiveHeight(2),
    marginRight: responsiveWidth(2),
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
    height: responsiveHeight(15),
    backgroundColor: '#ffffff',
    borderRadius: 6,
    padding: 16,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
    elevation: 6,
    justifyContent: 'space-evenly',
  },
  card2: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
});

export default BottomTab4;