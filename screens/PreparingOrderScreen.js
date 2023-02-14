import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatible from 'react-native-animatable'
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native'

export default function PreparingOrderScreen() {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    },4000)
  },[])

  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatible.Image
        source={require('../assets/deliveryGif.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='h-96 w-96'
      />
      <Animatible.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-lg my-10 text-white font-bold text-center'
      >
        Waiting for the Restaurant to accept your order!
      </Animatible.Text>

      <Progress.Circle size={60} indeterminate={true} color='white'/>
    </SafeAreaView>
  )
}

// https://github.com/oblador/react-native-animatable 