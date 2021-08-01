import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import Androw from 'react-native-androw'
import LinearGradient from 'react-native-linear-gradient'
import { getFF } from '../../utils/getFF'
import { grad } from '../../utils/gradient'
import { sizes } from '../../utils/ThemeContext'
import Pie from 'react-native-pie'
import { useActions } from '../../hooks/useActions'
import ProgressBar from '../../components/ProgressBar'


const Mix = () => {
    const nav = useNavigation()
    const route: any = useRoute()
    const [data, setData] = useState()
    const [percent, setPercent] = useState(0)
    const { addNewFavorite } = useActions()

    const addToFavorite = () => {
        const newFav: any = {
            id: Math.random() * 10000,
            mix: data
        }
        addNewFavorite(newFav)
    }

    useEffect(() => {
        if (route) {
            setData(route.params.mix.mix)
            setPercent(route.params.mix.progress)
        }
    }, [route])

    return (
        <LinearGradient colors={grad.darkBg} style={{ flex: 1 }}>
            <Androw style={styles.shadow2}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => nav.navigate('MixList')}>
                        <Image style={styles.goBack} source={require('../../images/left.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>микс</Text>
                    <Text style={styles.helper} onPress={() => console.log('hello')}></Text>
                </View>
            </Androw>
            <Androw style={styles.shadow}>
                <View
                    style={{
                        paddingVertical: 15,
                        flexDirection: 'row',
                        width: Dimensions.get('window').width,
                        justifyContent: 'center',
                    }}
                >
                    <Pie
                        radius={sizes[120]}
                        innerRadius={sizes[70]}
                        sections={route.params.mix.mix}
                        dividerSize={2}
                        backgroundColor="#000"
                        strokeCap={'butt'}
                    />
                    <View style={styles.cup}>
                        <ProgressBar progress={percent} />
                        <Text style={styles.cupText}>крепость</Text>
                    </View>
                </View>
            </Androw>
            <Androw style={styles.shadow}>
                <View style={{
                    backgroundColor: '#d3d3d3',
                    marginHorizontal: sizes[20],
                    borderRadius: 12,
                    paddingHorizontal: sizes[20],
                    paddingVertical: sizes[5]
                }}>
                    {route.params.mix.mix.map((item: any, i: number) => (
                        <View key={i} style={{
                            flexDirection: 'row',
                            marginVertical: sizes[10],
                        }}>
                            <View style={{
                                backgroundColor: item.color,
                                width: sizes[20],
                                height: sizes[20],
                                borderRadius: 30
                            }} />
                            <Text style={{
                                fontFamily: getFF(300),
                                fontSize: sizes[14],
                                marginLeft: sizes[10]
                            }}>{item.tabak}: {item.vkus} - ( {item.percentage}% )</Text>
                        </View>
                    ))}
                </View>
            </Androw>
            <Androw style={styles.shadow3}>
                <TouchableOpacity style={styles.btnBlock} onPress={() => addToFavorite()}>
                    <Text style={styles.btnText}>Добавить в любимые ✨</Text>
                </TouchableOpacity>
            </Androw>
        </LinearGradient>
    )
}

export default Mix

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
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: sizes[2],
        },
        shadowOpacity: 0.9,
        shadowRadius: sizes[10],
    },
    shadow3: {
        shadowColor: '#fff',
        shadowOffset: {
            width: 1,
            height: sizes[2],
        },
        shadowOpacity: 0.9,
        shadowRadius: sizes[2],
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
    cup: {
        position: 'absolute',
        top: sizes[80],
        fontFamily: getFF(500),
        color: '#fff',
        fontSize: sizes[25]
    },
    cupText: {
        color: '#fff',
        position: 'absolute',
        bottom: sizes[40],
        right: sizes[32],
        fontFamily: getFF(300),
        fontSize: sizes[9]
    },
    btnBlock: {
        padding: sizes[15],
        backgroundColor: '#d3d3d3',
        marginHorizontal: sizes[20],
        borderRadius: sizes[8],
        marginTop: sizes[20]
    },
    btnText: {
        textAlign: 'center',
        fontFamily: getFF(300),
        fontSize: sizes[18]
    }
})
