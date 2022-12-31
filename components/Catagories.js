import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CatagoryCard from './CatagoryCard'

export default function Catagories() {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>
          
        {/* Catagory View */}
        <CatagoryCard imgUrl="https://links.papareact.com/wru" title="testing"/>
        <CatagoryCard imgUrl='https://links.papareact.com/wru' title='testing'/>
        <CatagoryCard imgUrl='https://links.papareact.com/wru' title='testing'/>
        <CatagoryCard imgUrl='https://links.papareact.com/wru' title='testing'/>
        <Text>Catagories</Text>
    </ScrollView>
  )
}
