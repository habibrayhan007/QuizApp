import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { getFcmToken, notificationListener } from '../utils/NotificationService';
/* import ForegroundHandler from '../utils/ForegroundHandler'; */

const Result = ({ navigation }) => {
    const handleSendNotification = () => {
        getFcmToken();
        notificationListener();
    };

    return (
        <View style={styles.container}>

            <View>
                <Text>Result</Text>
            </View>
            <View style={styles.bannerContainer}>
                <Image
                    style={styles.banner}
                    resizeMode="contain"
                    source={{
                        uri:
                            'https://img.freepik.com/free-vector/sunburst-background-questionnaire-with-pencil_23-2147593791.jpg?w=826&t=st=1686813594~exp=1686814194~hmac=a9c0b3e33e8b484b158ede179aad3d4edc1c5eaae4a6c233ced79d759c6d8c4e',
                    }}
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomButton} onPress={handleSendNotification}>
                    <Text style={styles.buttonText}>Send The Results to the Parents Phone</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Result;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        height: '100%',
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        height: 300,
        width: 300,
    },
    bottomButton: {
        backgroundColor: '#2889cd',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
    },
});