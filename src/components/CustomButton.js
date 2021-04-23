import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyColors from './../utils/MyColors'
import MyFonts from './../utils/MyFonts'

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container(title)}>
                <Text style={styles.text(title)}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: (title) => ({
        backgroundColor: (title == 'Login') ? MyColors.button.primary : MyColors.button.secondary,
        paddingVertical: 10,
        borderRadius: 20
    }),
    text: (title) => ({
        fontFamily: MyFonts[700],
        fontSize: 25,
        textAlign: 'center',
        color: (title == 'Login') ? MyColors.text.button.primary : MyColors.text.button.secondary
    })
})
