import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken();
    }
};

const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log(fcmToken, 'The old Token');

    if (!fcmToken) {
        try {
            const newFcmToken = await messaging().getToken();
            if (newFcmToken) {
                console.log(newFcmToken, 'The new generated token');
                await AsyncStorage.setItem('fcmToken', newFcmToken);
                sendNotification(newFcmToken);
            }
        } catch (error) {
            console.log(error, 'Error Raised');
        }
    }
};

const sendNotification = async (token) => {
    const message = {
        notification: {
            title: 'Results Notification',
            body: 'The results have been sent to the parents.',
        },
        android: {
            priority: 'high',
            channelId: 'default',
        },
        data: {},
        token: token,
    };

    try {
        await messaging().send(message);
        console.log('Push notification sent successfully!');
    } catch (error) {
        console.log('Error sending push notification:', error);
    }
};