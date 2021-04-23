import React from 'react'
import { ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native'
import CustomSearchBar from '../components/CustomSearchBar'
import { BackgroundCreative } from './../assets'
import MyColors from './../utils/MyColors'
import MyFonts from './../utils/MyFonts'
import Animated from 'react-native-reanimated';

const Home = ({ state, descriptors, navigation, position }) => {
    return (
        <ImageBackground source={BackgroundCreative} style={styles.screen}>
            <View style={styles.header}>
                <CustomSearchBar />
            </View>
            <View style={styles.content}>
                <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name);
                            }
                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };
                        // modify inputRange for custom behavior
                        const inputRange = state.routes.map((_, i) => i);
                        const opacity = Animated.interpolate(position, {
                            inputRange,
                            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                        });

                        return (
                            <TouchableOpacity
                                accessibilityRole="button"
                                accessibilityState={isFocused ? { selected: true } : {}}
                                accessibilityLabel={options.tabBarAccessibilityLabel}
                                testID={options.tabBarTestID}
                                onPress={onPress}
                                onLongPress={onLongPress}
                                style={{ flex: 1 }}
                            >
                                <Animated.Text style={{ opacity }}>{label}</Animated.Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </ImageBackground>
    )
}

export default Home

const styles = StyleSheet.create({
    screen: {
    },
    content: {
        backgroundColor: MyColors.background,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
        height: 50
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20
    },
})
