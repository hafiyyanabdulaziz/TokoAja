import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Splash from './../pages/Splash'
import Landing from './../pages/Landing'
import Login from './../pages/Login'
import Register from './../pages/Register'

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router
