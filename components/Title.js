import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Test Your Knowledge
            </Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 26,
        fontWeight: '600'
    }
});