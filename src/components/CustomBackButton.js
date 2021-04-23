import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyColors from '../utils/MyColors'
import { BackgroundCreative, IconBack } from './../assets'

const CustomBackButton = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <IconBack />
            </View>
        </TouchableOpacity>
    )
}

export default CustomBackButton

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        backgroundColor: MyColors.background,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
