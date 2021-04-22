import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import CustomButton from '../components/CustomButton'
import { BackgroundCreative, LogoWithoutText } from './../assets'
import MyColors from './../utils/MyColors'

const Landing = () => {
    return (
        <ImageBackground source={BackgroundCreative} style={styles.screen}>
            <View>
                <Image source={LogoWithoutText} style={styles.logo} />
                <Text>Belanja Serba Mudah di TokoAja. Sekalian Bantu #GoUMKM</Text>
            </View>
            <View style={styles.content}>
                <View style={{ height: 50 }} />
                <CustomButton />
                <View style={{ height: 20 }} />
                <CustomButton />
                <View style={{ height: 50 }} />
            </View>
        </ImageBackground>
    )
}

export default Landing

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between'
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    content: {
        backgroundColor: MyColors.background,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20
    }
})
