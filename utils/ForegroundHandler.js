/* import PushNotification from "react-native-push-notification";
import React, { useEffect } from "react";
import { messaging } from "@react-native-firebase/messaging";
import { Platform } from "react-native";

const ForegroundHandler = () => {
    useEffect(() => {
        const unsubscribe = messaging().onMessage((remoteMessage) => {
            console.log("Handle in foreground", remoteMessage);
            const { notification, messageId } = remoteMessage;

            PushNotification.localNotification({
                id: messageId,
                body: "Android Body",
                title: "Android Title",
                soundName: 'default',
                vibrate: true,
                playSound: true
            });
        });
        return unsubscribe
    }, []);
    return null
};

export default ForegroundHandler; */