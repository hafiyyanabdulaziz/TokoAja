import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import MyColors from '../utils/MyColors'
import MyFonts from '../utils/MyFonts'

const CustomSearchBar = () => {
    return (
        <TextInput style={styles.textInput} placeholder={'Search...'} />
    )
}

export default CustomSearchBar

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 15,
        padding: 10,
        backgroundColor: MyColors.background,
        fontFamily: MyFonts[700]
    },
})
