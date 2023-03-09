import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CateagoryCard({ imgUrl, title, id}) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={()=>{navigation.navigate('CategoryScreen',{id:id})}}
            className='relative mr-2'
        >
            <Image source={{ uri: imgUrl }} className='h-20 w-20 rounded' />
            <Text className='absolute bottom-1 left-1 text-white font'>{ title }</Text>
        </TouchableOpacity>
    )
}