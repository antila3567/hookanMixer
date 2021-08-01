import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getFF } from '../utils/getFF'
import { grad } from '../utils/gradient'
import { cwo, sizes } from '../utils/ThemeContext'
import Androw from 'react-native-androw'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useActions } from '../hooks/useActions'

const OnboardingScreen = () => {
    const { firstStartApp } = useActions()
    return (
        <LinearGradient colors={grad.darkBg2} style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Text style={styles.title}>Кальянный миксер</Text>
                <Image source={require('../images/logo.webp')} resizeMode='contain' style={styles.img} />
                <Androw style={styles.shadow}>
                    <View style={styles.descriptionBlock}>
                        <Text style={styles.descriptionText}>Давно прошло то время, когда готовили кальян на табачных листьях без каких-либо добавок. Ныне нам доступны даже не десятки, а сотни разнообразных вкусов. Но и это еще не предел – кальянные миксы создают настолько потрясающие вкусовые сочетания, что превратили традиционные рецепты кальяна в настоящее искусство</Text>
                    </View>
                </Androw>
                <Androw style={[styles.shadow, styles.downBtn]}>
                    <TouchableOpacity onPress={() => firstStartApp(false)}>
                        <LinearGradient colors={grad.darkBg} style={styles.btn}>
                            <Text style={styles.btnText}>начать 👉</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </Androw>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    title: {
        fontSize: sizes[17],
        textTransform: 'uppercase',
        fontFamily: getFF(500),
        textAlign: 'center',
        color: '#d3d3d3',
        marginTop:sizes[25]
    },
    img: {
        width: '100%',
        height: sizes[200],
    },
    descriptionBlock: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: sizes[10],
        marginHorizontal: sizes[20],
        marginTop: sizes[20],
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: sizes[12]
    },
    shadow: {
        shadowColor: '#fff',
        shadowOffset: {
            width: 1,
            height: sizes[3],
        },
        shadowOpacity: 0.7,
        shadowRadius: sizes[3],
    },
    descriptionText: {
        fontSize: sizes[12],
        textTransform: 'uppercase',
        fontFamily: getFF(300),
        textAlign: 'center',
        color: '#d3d3d3',
        lineHeight: sizes[23]
    },
    btn: {
        // backgroundColor: '#D3D3D3',
        marginHorizontal: sizes[20],
        justifyContent: 'center',
        alignItems: 'center',
        padding: sizes[10],
        borderRadius: sizes[8],
        marginBottom: sizes[20]
    },
    downBtn: {
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    btnText: {
        fontSize: sizes[20],
        fontFamily: getFF(500),
        color:'#d3d3d3'
    }
})
