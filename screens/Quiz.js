import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState();
    const [question, setQuestion] = useState(0);
    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data.results[0]);
        setQuestions(data.results);
    }
    useEffect(() => {
        getQuiz()
    }, [])
    return (
        <View style={styles.container}>
            {
                questions &&
                <View style={styles.parent}>
                    <View style={styles.heading}>
                        <Text style={styles.question}>
                            Q. {questions[question].question}
                        </Text>
                    </View>
                    <View style={styles.options}>
                        {questions[question].incorrect_answers.map((option, index) => (
                            <TouchableOpacity key={index} style={styles.optionButton}>
                                <Text style={styles.option}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.option}>{questions[question].correct_answer}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomButtonArea}>
                        <TouchableOpacity style={styles.bottomButton}>
                            <Text style={styles.buttonText}>SKIP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomButton}>
                            <Text style={styles.buttonText}>NEXT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.bottomButton}
                            onPress={() => navigation.navigate("Result")}
                        >
                            <Text style={styles.buttonText}>END</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}

export default Quiz;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        height: '100%'
    },
    parent: {
        height: '100%'
    },
    heading: {
        marginVertical: 16,
    },
    question: {
        fontSize: 26
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    optionButton: {
        padding: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        borderRadius: 12,
    },
    option: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white'

    },
    bottomButtonArea: {
        marginBottom: 12,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomButton: {
        backgroundColor: '#2889cd',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    }
})