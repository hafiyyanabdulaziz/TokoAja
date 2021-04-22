import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyColors from './../utils/MyColors'
import MyFonts from './../utils/MyFonts'

const CustomButton = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: MyColors.button.primary,
        paddingVertical: 10,
        borderRadius: 20
    },
    text: {
        fontFamily: MyFonts[700],
        fontSize: 25,
        textAlign: 'center'
    }
})
