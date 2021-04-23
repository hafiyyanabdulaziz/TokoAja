import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import MyColors from './../utils/MyColors'
import MyFonts from './../utils/MyFonts'

const CustomTextInput = ({ label }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={{ height: 5 }} />
            <TextInput style={styles.textInput} />
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: MyColors.textInput.border,
        padding: 10,
    },
    label: {
        color: MyColors.textInput.label,
        fontSize: 20,
        fontFamily: MyFonts[400],
    }
})
