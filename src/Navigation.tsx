import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTypedSelector } from './hooks/useTypedSelector';
import MixerScreen from './screens/MixerScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import { getFF } from './utils/getFF';
import { sizes } from './utils/ThemeContext';
import FavoriteScreen from './screens/FavoriteScreen';
import { Image, StyleSheet } from 'react-native';
import MixList from './screens/homeScreens/MixList';
import Mix from './screens/homeScreens/Mix';

export default () => {
    const Auth = createStackNavigator();
    const Home = createStackNavigator()
    const Tab = createBottomTabNavigator();
    const isInit = useTypedSelector((state) => state.auth.isFirstTime);

    const homeStack = () => {
        return (
            <Home.Navigator>
                <Home.Screen
                    name="Main"
                    component={MixerScreen}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Home.Screen
                    name="MixList"
                    component={MixList}
                    options={{ headerShown: false, animationEnabled: false }}
                />
                <Home.Screen
                    name="Mix"
                    component={Mix}
                    options={{ headerShown: false, animationEnabled: false }}
                />
            </Home.Navigator>
        )
    }

    return (
        <NavigationContainer>
            {!isInit ? (
                <Tab.Navigator
                    initialRouteName="Mixes"
                    tabBarOptions={{
                        activeTintColor: '#000',
                        labelStyle: { fontFamily: getFF(300), paddingBottom: sizes[5], fontSize: sizes[10] },
                        style: {
                            backgroundColor: '#d3d3d3',
                            position: 'absolute',
                            borderTopRightRadius: 15,
                            borderTopLeftRadius: 15
                        },
                    }}
                >
                    <Tab.Screen
                        name="Mixes"
                        component={homeStack}
                        options={{
                            tabBarLabel: 'МИКСЫ',
                            tabBarIcon: ({ focused }) => (
                                <Image source={require('../src/images/mix.png')} style={styles.img} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Favorite"
                        component={FavoriteScreen}
                        options={{
                            tabBarLabel: 'ЛЮБИМЫЕ',
                            tabBarIcon: ({ focused }) => (
                                <Image source={require('../src/images/star.png')} style={{
                                    width: 35,
                                    height: 35
                                }} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            ) : (
                <Auth.Navigator>
                    <Auth.Screen
                        name="Onboarding"
                        component={OnboardingScreen}
                        options={{ headerShown: false }}
                    />
                </Auth.Navigator>
            )}
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 25,
        height: 25
    }
})