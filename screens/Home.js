import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/Title';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title />
            <View style={styles.bannerContainer}>
                <Image
                    style={styles.banner}
                    resizeMode="contain"
                    source={{ uri: 'https://img.freepik.com/free-vector/quiz-background-with-items-flat-design_23-2147599082.jpg?w=826&t=st=1686824531~exp=1686825131~hmac=ba15cb748f8d81e1ae9d1571364f45060baf2d45c6d7d405cb2a1f591f9f0453' }}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Quiz")}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        height: '100%'
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    banner: {
        height: 300,
        width: 300,
    },
    button: {
        width: '100%',
        backgroundColor: '#2889cd',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white'
    }
});