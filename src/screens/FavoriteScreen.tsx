import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Androw from 'react-native-androw'
import LinearGradient from 'react-native-linear-gradient'
import { grad } from '../utils/gradient'
import { sizes } from '../utils/ThemeContext'
import { getFF } from '../utils/getFF'
import { useNavigation } from '@react-navigation/core'
import { useActions } from '../hooks/useActions'

const FavoriteScreen = () => {
    const nav = useNavigation()
    const mixes = useTypedSelector(state => state.mixes.mixes)
    const { removeFavorite } = useActions()

    return (
        <LinearGradient colors={grad.darkBg} style={{ flex: 1 }}>
            <Androw style={styles.shadow2}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => nav.navigate('Main')}>
                        <Image style={styles.goBack} source={require('../images/left.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>любимые</Text>
                    <Text style={styles.helper} onPress={() => console.log('hello')}></Text>
                </View>
            </Androw>
            {mixes.length !== 0
                ? <ScrollView bounces={false} contentContainerStyle={{ paddingBottom: sizes[100] }}>
                    {mixes.map((item, i) => (
                        <Androw key={i} style={styles.shadow}>
                            <View style={styles.card}>
                                <View style={{maxWidth:'80%'}}>
                                    {item.mix.map((itm, i) => (
                                        <View style={styles.insideCard} key={i}>
                                            <View style={{
                                                backgroundColor: itm.color,
                                                width: 15,
                                                height: 15,
                                                borderRadius: 30
                                            }} />
                                            <Text style={styles.defText}>{itm.tabak}: {itm.vkus} - ( {itm.percentage} %)</Text>
                                        </View>
                                    ))}
                                </View>
                                <TouchableOpacity onPress={() => removeFavorite(item.id)} >
                                    <Text style={styles.deleteFav}>x</Text>
                                </TouchableOpacity>
                            </View>
                        </Androw>
                    ))}
                </ScrollView>
                : <Text style={styles.noOne}>Еще нету любимых миксов</Text>
            }
        </LinearGradient>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    shadow2: {
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: sizes[2],
        },
        shadowOpacity: 0.7,
        shadowRadius: sizes[7],
    },
    shadow: {
        shadowColor: '#fff',
        shadowOffset: {
            width: 1,
            height: sizes[2],
        },
        shadowOpacity: 0.7,
        shadowRadius: sizes[7],
    },
    header: {
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: '#d3d3d3',
        padding: sizes[20],
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: getFF(500),
        textTransform: 'uppercase',
        fontSize: sizes[14],
        marginTop: sizes[10],
        opacity: 0.7,
        marginRight: sizes[25]
    },
    goBack: {
        width: sizes[30],
        height: sizes[30],
    },
    helper: {
        fontSize: sizes[30],
        paddingTop: sizes[5]
    },
    noOne: {
        color: '#d3d3d3',
        fontFamily: getFF(500),
        fontSize: sizes[20],
        textAlign: 'center',
        marginTop: sizes[25]
    },
    card: {
        backgroundColor: '#d3d3d3',
        marginVertical: sizes[10],
        marginHorizontal: sizes[20],
        padding: sizes[20],
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    insideCard: {
        marginVertical: sizes[8],
        flexDirection: 'row',
    },
    defText: {
        fontFamily: getFF(300),
        marginLeft: sizes[20]
    },
    deleteFav: {
        fontSize: sizes[25],
        fontFamily: getFF(500)
    }
})
