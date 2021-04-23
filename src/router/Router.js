import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Landing from './../pages/Landing'
import Login from './../pages/Login'
import Register from './../pages/Register'
import Splash from './../pages/Splash'
import ScreenOne from './../pages/ScreenOne'
import ScreenTwo from './../pages/ScreenTwo'
import ScreenThree from './../pages/ScreenThree'
import CustomTopTab from './../components/CustomTopTab'
import Home from '../pages/Home'

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <Home {...props} />}>
            <Tab.Screen name="ScreenOne" component={ScreenOne} />
            <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
            <Tab.Screen name="ScreenThree" component={ScreenThree} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router

