import React, { useEffect } from 'react'
import { Image, ImageBackground, StyleSheet } from 'react-native'
import { BackgroundCreative, LogoWithText } from './../assets'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Landing')
        }, 3000);
    }, [navigation])

    return (
        <ImageBackground source={BackgroundCreative} style={styles.screen}>
            <Image source={LogoWithText} style={styles.logo} />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 134,
        height: 202,
        resizeMode: 'contain',
    }
})
