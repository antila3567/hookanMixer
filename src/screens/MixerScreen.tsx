import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { grad } from '../utils/gradient'
import Androw from 'react-native-androw'
import { SafeAreaView } from 'react-native-safe-area-context'
import { sizes } from '../utils/ThemeContext'
import { getFF } from '../utils/getFF'
import { TabakList } from '../mockData/TabakList'
import { ScrollView } from 'react-native-gesture-handler'
import { NavigationProp } from '@react-navigation/core'

const MixerScreen = ({ navigation }: any) => {

    const gotToList = (id: number, name: string) => {
        navigation.navigate('MixList', {
            id,
            name,
        })
    }


    return (
        <LinearGradient colors={grad.darkBg} style={{ flex: 1 }}>
            <Androw style={styles.shadow2}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Популярные табаки</Text>
                </View>
            </Androw>
            <ScrollView contentContainerStyle={{ paddingBottom: sizes[150] }}>
                {TabakList.map((item) => (
                    <Androw key={item.id} style={styles.shadow}>
                        <TouchableOpacity onPress={() => gotToList(item.id, item.title)}>
                            <LinearGradient colors={item.colors} style={styles.mix}>
                                <Image resizeMode='stretch' style={styles.img} source={item.img} />
                                <View style={styles.infoBlock}>
                                    <Text style={[styles.defText, { fontWeight: 'bold' }]}>{item.title}</Text>
                                    <Text style={styles.defText}>ср. цена - {item.price} ГРН</Text>
                                    <Text style={styles.defText}>упаковка - {item.gram} грам</Text>
                                </View>
                                <View style={styles.infoBlock}>
                                    <Image style={styles.arrow} source={require('../images/arrow.png')} />
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </Androw>
                ))}
            </ScrollView>
        </LinearGradient>
    )
}

export default MixerScreen

const styles = StyleSheet.create({
    header: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center',
        padding: sizes[20]
    },
    headerText: {
        fontFamily: getFF(500),
        textTransform: 'uppercase',
        fontSize: sizes[14],
        marginTop: sizes[10],
        opacity: 0.7
    },
    mix: {
        marginHorizontal: sizes[20],
        marginTop: sizes[10],
        padding: sizes[20],
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 100
    },
    shadow: {
        shadowColor: '#fff',
        shadowOffset: {
            width: 1,
            height: sizes[2],
        },
        shadowOpacity: 0.7,
        shadowRadius: sizes[1],
    },
    shadow2: {
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: sizes[2],
        },
        shadowOpacity: 0.7,
        shadowRadius: sizes[7],
    },
    infoBlock: {
        alignItems: 'center'
    },
    defText: {
        fontFamily: getFF(300),
        color: '#d3d3d3',
        fontSize: sizes[13],
        lineHeight: sizes[20]
    },
    arrow: {
        width: sizes[45],
        height: sizes[45]
    }
})
