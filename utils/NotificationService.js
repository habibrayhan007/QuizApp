import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestUserPermission = async () => {
    getFcmToken();

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

export const notificationListener = async () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            "Notification caused app to open from background state:", remoteMessage.notification);
    });

    messaging().onMessage(async remoteMessage => {
        console.log("Receive in foreGround", remoteMessage);
    })

    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
            }
        });
}

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