import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import CustomBackButton from '../components/CustomBackButton'
import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput'
import { BackgroundCreative } from './../assets'
import MyColors from './../utils/MyColors'
import MyFonts from './../utils/MyFonts'

const Login = ({ navigation }) => {
    return (
        <ImageBackground source={BackgroundCreative} style={styles.screen}>
            <View style={styles.header}>
                <CustomBackButton onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.content}>
                <View style={{ height: 50 }} />
                <Text style={styles.title}>Login</Text>
                <View style={{ height: 40 }} />
                <CustomTextInput label={'Email'} />
                <View style={{ height: 15 }} />
                <CustomTextInput label={'Password'} />
                <View style={{ height: 50 }} />
                <CustomButton title={'Login'} />
                <View style={{ height: 50 }} />
            </View>
        </ImageBackground>
    )
}

export default Login

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
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    title: {
        fontFamily: MyFonts[700],
        fontSize: 30,
        color: MyColors.text.title
    }
})
