import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log(fcmToken, 'The old Token');

    if (!fcmToken) {
        try {
            const newFcmToken = await messaging().getToken();
            if (newFcmToken) {
                console.log(newFcmToken, 'The new generated token');
                await AsyncStorage.setItem('fcmToken', newFcmToken);
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
        console.log("Message handled in the foreGround!", remoteMessage);
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