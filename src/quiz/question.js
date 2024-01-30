import React, { useState, useEffect } from "react";
import { View, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Text, Button, StyleSheet, Pressable, Image, Modal } from "react-native";
import { questionsData, saveUserProgress, getUserLevel } from "./data";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import images from '../images';
import * as Progress from "react-native-progress";

const QuestionScreen = ({ route, navigation }) => {
    const { levelId } = route.params;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [ans, setAns] = useState(false);
    const question = questionsData[currentQuestionIndex];
    const progressBarDuration = 30;
    const [progress, setProgress] = useState(0);
    const [numb, setnumb] = useState(1);
    const [currentInterval, setCurrentInterval] = useState(0);
    const [check, setCheck] = useState({
        '0': 0,
        '1': false,
    });
    const [check2, setCheck2] = useState({
        '0': 0,
        '1': false,
    });

    useEffect(() => {
        const interval = currentInterval; 

        const progressTimer = setInterval(() => {
            if (interval < 29) {
                setCurrentInterval(interval + 1);
            } else {
                setCurrentInterval(0);
            }
            if (progress < 1) {
                setProgress(progress + 1 / progressBarDuration);
            } else {
                clearInterval(progressTimer);
            }
        }, 1000);

        return () => clearInterval(progressTimer);
    }, [progress]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentQuestionIndex < questionsData.length - 1) {
                setAns(false);
                setProgress(0);
                setnumb(numb + 1);
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                // Save the score and unlock the next level in local storage
                saveUserProgress(levelId, score);

                // Navigate back to the level selection screen

                navigation.navigate("homePage");
            }
        }, 34000); // 30 seconds in milliseconds

        return () => clearInterval(timer);
    }, [currentQuestionIndex, levelId, score, navigation]);

    function waitFor(delayInMilliseconds) {
        return new Promise((resolve) => {
            setTimeout(resolve, delayInMilliseconds);
        });
    }


    const handleAnswer = async (userAnswer, no) => {
        if (userAnswer === question.answer) {
            setScore(score + 1);
            setCheck((prevState) => ({
                ...prevState,
                '0': no,
                '1': true,
            }));
            await waitFor(500);
            setCheck((prevState) => ({
                ...prevState,
                '0': no,
                '1': false,
            }));
            setAns(false);
        } else {
            setCheck2((prevState) => ({
                ...prevState,
                '0': no,
                '1': true,
            }));
            await waitFor(500);
            setCheck2((prevState) => ({
                ...prevState,
                '0': no,
                '1': false,
            }));
            return;
        }

        if (currentQuestionIndex < questionsData.length - 1) {
            setProgress(0);
            setnumb(numb + 1);
            setCurrentInterval(0);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Save the score and unlock the next level in local storage
            saveUserProgress(levelId, score);

            // Navigate back to the level selection screen
            navigation.navigate("homePage");
        }
    };

    return (
        <View style={{ flex: 1, paddingBottom: 20 }}>
            <View style={{ flexDirection:'row',justifyContent:'space-between',paddingHorizontal:responsiveWidth(5)}}>
                <Text style={styles.level} >Time : {currentInterval}</Text>
                <Text style={styles.level}>Q.No : {numb + "/" + questionsData.length}</Text>
            </View>
            <Progress.Bar
                style={{ alignSelf: 'center' }}
                progress={progress}
                width={responsiveWidth(90)} // Adjust the width as needed
                color="purple" // Set the progress bar color
                height={responsiveHeight(2)} />
            <ScrollView>
                <View style={styles.questionView}>
                    <Text style={styles.question}
                        adjustsFontSizeToFit={true}
                    >{question.question}</Text>
                </View>
                <Pressable onPress={() => handleAnswer(question.options.a, 1)}>
                    <View style={[styles.card, { backgroundColor: check['1'] ? (check['0'] == 1 ? 'green' : (check2['1'] ? (check2['0'] == 1 ? 'red' : '#ffffff') : '#ffffff')) : (check2['1'] ? (check2['0'] == 1 ? 'red' : '#ffffff') : '#ffffff') }]}>
                        <Text style={styles.optionText}
                            adjustsFontSizeToFit={true}
                            numberOfLines={4}
                        >
                            {question.options.a}
                        </Text>

                    </View>
                </Pressable>
                <Pressable onPress={() => handleAnswer(question.options.b, 2)}>
                    <View style={[styles.card, { backgroundColor: check['1'] ? (check['0'] == 2 ? 'green' : (check2['1'] ? (check2['0'] == 2 ? 'red' : '#ffffff') : '#ffffff')) : (check2['1'] ? (check2['0'] == 2 ? 'red' : '#ffffff') : '#ffffff') }]}>
                        <Text style={styles.optionText}>{question.options.b}</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handleAnswer(question.options.c, 3)}>
                    <View style={[styles.card, { backgroundColor: check['1'] ? (check['0'] == 3 ? 'green' : (check2['1'] ? (check2['0'] == 3 ? 'red' : '#ffffff') : '#ffffff')) : (check2['1'] ? (check2['0'] == 3 ? 'red' : '#ffffff') : '#ffffff') }]}>
                        <Text style={styles.optionText}>{question.options.c}</Text>
                    </View>
                </Pressable>
                <TouchableWithoutFeedback onPress={() => handleAnswer(question.options.d, 4)}>
                    <View style={[styles.card, { backgroundColor: check['1'] ? (check['0'] == 4 ? 'green' : (check2['1'] ? (check2['0'] == 4 ? 'red' : '#ffffff') : '#ffffff')) : (check2['1'] ? (check2['0'] == 4 ? 'red' : '#ffffff') : '#ffffff') }]}>
                        <Text style={styles.optionText}>{question.options.d}</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => setAns(true)}>
                    <View style={styles.quit}>
                        <Text style={[styles.optionText]}>Answer</Text>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={ans}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setAns(!ans);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.RnModalView}>
                            <Text style={{ fontSize: responsiveFontSize(4), fontWeight: "700" }}>Answer :</Text>
                            <Text style={{ fontSize: responsiveFontSize(2.5), marginVertical: 10 }}>
                                {question.answer + " "}
                            </Text>
                            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                <TouchableOpacity
                                    style={styles.rnmodalButton}
                                    onPress={() => setAns(false)}>
                                    <Text style={styles.rnmodalButtonText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.rnmodalButton}
                                    onPress={() => setAns(false)}>
                                    <Text style={styles.rnmodalButtonText}>Ok</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    Scrol: {
        paddingBottom: 60,

    },
    level: {
        marginTop: 20,
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        color: 'purple',
        fontWeight: 400,

    },
    questionView: {
        height: responsiveHeight(22),

    },
    option2: {
        width: responsiveWidth(70),
    },
    optionText: {
        fontSize: responsiveFontSize(3),
        color: 'gray',
        textAlign: 'center',
        fontFamily: "Raleway-Italic",
        fontWeight: 500,
    },
    quit: {
        alignSelf: 'center',
        borderRadius: 6,
        marginTop: responsiveHeight(3),
        marginBottom: responsiveHeight(5),
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(6),
        paddingVertical: responsiveHeight(1.5),
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        elevation: 6,
    },
    card: {
        flexDirection: 'row',
        borderRadius: 6,
        marginTop: responsiveHeight(2),
        paddingLeft: responsiveWidth(2),
        paddingRight: responsiveWidth(2),
        height: responsiveHeight(10),
        width: responsiveWidth(90),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        elevation: 6,
    },
    circle: {
        resizeMode: 'contain',
        color: '#87CEEB',
        height: responsiveHeight(5),
        width: responsiveWidth(5),
        alignSelf: 'center'
    },
    question: {
        marginHorizontal: 20,
        marginTop: 20,
        fontFamily: "Raleway-Italic",
        fontSize: responsiveFontSize(3.5),
        color: '#7B7D7D',
        fontWeight: 600,

    },
    circleContainer: {
        alignSelf: 'flex-end',
        padding: 5, // Add padding to properly position the image
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    RnModalView: {
        backgroundColor: "white",
        borderRadius: 8,
        paddingHorizontal: 10,
        width: responsiveWidth(80),
        paddingVertical: responsiveWidth(2),

        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
    rnmodalButton: {
        backgroundColor: "#03203C",
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 6,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 2,
        marginHorizontal: 5,
    },
    rnmodalButtonText: {
        color: "#fff",
        fontSize: 16,
    }

});

export default QuestionScreen;