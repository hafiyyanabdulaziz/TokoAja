import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../pages/Home'
import Landing from './../pages/Landing'
import Login from './../pages/Login'
import Product from './../pages/Product'
import Register from './../pages/Register'
import Splash from './../pages/Splash'
import Store from './../pages/Store'

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <Home {...props} />}>
            <Tab.Screen name="Product" component={Product} />
            <Tab.Screen name="Store" component={Store} />
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

