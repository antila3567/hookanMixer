import React, { useEffect, useMemo, useState } from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { grad } from '../../utils/gradient'
import Androw from 'react-native-androw'
import { sizes } from '../../utils/ThemeContext'
import { getFF } from '../../utils/getFF'
import { useNavigation, useRoute } from '@react-navigation/core'
import { MixesList } from '../../mockData/MixesList'
import ProgressBar from '../../components/ProgressBar'

type IProp = {
    item: {
        id: number;
        mixes: [{
            progress: number,
            title: string;
            img: any,
            mix: [{
                tabak: string,
                vkus: string,
                percent: number,
                color: string
            }]
        }]
    },
    index: number
}

const MixList = () => {
    const nav = useNavigation()
    const { id, name }: any = useRoute().params
    const [data, setData] = useState<any>()

    useMemo(() => {
        if (id) {
            MixesList.map((item) => {
                if (item.id === id) {
                    setData([item])
                }
            })
        }
    }, [id])

    const goToMix = (mix: any) => {
        nav.navigate('Mix', {
            mix: mix,
        })
    }

    const renderItem = ({ item, index }: IProp) => {
        return (
            <View style={styles.wrap}>
                {item.mixes.map((item, index) => (
                    <React.Fragment key={index}>
                        {!!item.title && <Text style={styles.category}>{item.title}</Text>}
                        <Androw style={styles.shadow2}>
                            <TouchableOpacity onPress={() => goToMix(item)}>
                                <ImageBackground
                                    resizeMode='cover'
                                    imageStyle={{ borderRadius: 12 }}
                                    source={item.img}
                                    style={styles.img}
                                >
                                    <View style={styles.mask} />
                                    <View>
                                        {!!item.mix && item.mix.map((item, i) => (
                                            <View key={i} style={styles.tabakBlock}>
                                                <>
                                                    <View style={{
                                                        width: 15,
                                                        height: 15,
                                                        backgroundColor: item.color,
                                                        borderRadius: 30,
                                                    }} />
                                                    <Text style={styles.tabak}>{item.tabak}:</Text>
                                                    <Text style={styles.vkus}>{item.vkus}</Text>
                                                </>
                                            </View>
                                        ))}
                                    </View>
                                    <View style={styles.arrowBlock}>
                                        <Image style={styles.arrow} source={require('../../images/arrow.png')} />
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </Androw>
                    </React.Fragment>
                ))}
            </View>
        )
    }

    return (
        <LinearGradient colors={grad.darkBg} style={{ flex: 1 }}>
            <Androw style={styles.shadow2}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => nav.navigate('Main')}>
                        <Image style={styles.goBack} source={require('../../images/left.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>{name}</Text>
                    <Text style={styles.helper} onPress={() => console.log('hello')}></Text>
                </View>
            </Androw>
            <FlatList
                windowSize={5}
                maxToRenderPerBatch={80}
                removeClippedSubviews={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => String(item.id)}
                contentContainerStyle={{ paddingBottom: sizes[150] }}
            />
        </LinearGradient>
    )
}

export default MixList

const styles = StyleSheet.create({
    wrap: {
        marginHorizontal: sizes[20],
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
    shadow2: {
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: sizes[2],
        },
        shadowOpacity: 0.7,
        shadowRadius: sizes[7],
    },
    category: {
        fontFamily: getFF(500),
        color: '#fff',
        marginTop: sizes[20],
        textTransform: 'uppercase',
        fontSize: sizes[20],
        textAlign: 'center'
    },
    img: {
        width: '100%',
        height: sizes[160],
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: sizes[20]
    },
    tabak: {
        fontFamily: getFF(500),
        fontSize: sizes[14],
        color: '#fff',
        marginLeft: sizes[5]
    },
    vkus: {
        color: '#fff',
        fontSize: sizes[14],
        fontFamily: getFF(300),
        marginLeft: sizes[5],
    },
    tabakBlock: {
        flexDirection: 'row',
        marginVertical: sizes[10],
        marginHorizontal: sizes[10],
        alignItems: 'flex-start',
        maxWidth: '75%'
    },
    mask: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#000',
        opacity: 0.7,
        borderRadius: sizes[12]
    },
    arrow: {
        width: sizes[50],
        height: sizes[50]
    },
    arrowBlock: {
        backgroundColor: '#d3d3d3',
        borderRadius: 80,
        padding: sizes[5],
        marginRight:5
    },
    krepost: {
        color: '#fff',
        fontFamily: getFF(300),
        position: 'absolute',
        bottom: 40,
        right: 30,
        fontSize: sizes[11],
    },
    goBack: {
        width: 30,
        height: 30,
    },
    helper: {
        fontSize: sizes[30],
        paddingTop: sizes[5]
    }
})
