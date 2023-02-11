import React, {useLayoutEffect, useState, useEffect} from 'react'
import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Catagories from '../components/Catagories';
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from "../sanity"
// https://www.youtube.com/watch?v=AkEnidfZnCU&t=21s


export default function HomeScreen() {
    const navigation = useNavigation()
    const [featuredCatagories, setFeaturedCatagories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    },[])

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "featured"] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->
                }
            }`
        ).then(data => {
            setFeaturedCatagories(data)
        });
    }, []);

    return (
        <SafeAreaView className='bg-white pt-5'>
            
            {/* Header */}
            <View className='flex-row pb-3 items-center mx-4 space-x-2'>
                <Image source={{ uri: 'https://links.papareact.com/wru' }} className='h-7 w-7 bg-gray-300 p-4 rounded-full' /> 

                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>
                        Deliver Now
                    </Text>   
                    <Text className='font-bold text-xl'>
                        Current Location
                        <ChevronDownIcon size={20} color='#00CCBB' />
                    </Text>  
                </View> 
                
                <UserIcon size={35}  color='#00CCBB' />  
            </View>  
        
        
            {/* SEARCH BAR */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4'>
                <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
                    <MagnifyingGlassIcon color='gray' size={20}/>
                    < TextInput placeholder='Resturants and Cuisines'/>
                </View>
                < AdjustmentsHorizontalIcon color='#00CCBB' />
            </View>

            {/* BODY */}
            <ScrollView className=''>
                <Catagories />

                {/* FEATURED ROW */}
                {featuredCatagories.map((category) => (
                    < FeaturedRow
                        key={category._id}
                        id= {category._id}
                        title= {category.name}
                        description={category.short_description}
                    />
                ))}
                
               
               
            </ScrollView>
        </SafeAreaView>
    
    )
}
