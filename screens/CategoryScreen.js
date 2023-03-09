import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useLayoutEffect} from 'react'
import { ArrowLeftCircleIcon } from 'react-native-heroicons/outline'
import { useNavigation,useRoute } from '@react-navigation/native'
import ResturantCard from '../components/ResturantCard'
import sanityClient from "../sanity"
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CategoryScreen() {
    const navigation = useNavigation()
    const route = useRoute()
    const [categoryRestaurants, setCategoryRestaurants] = useState([])
    const restaurants = categoryRestaurants.restaurants
    const { id } = route.params
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    },[])

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == 'category' && _id == $id]{
                ...,
            restaurants[]->{
                ...,
                dishes[]->,
            },
        }[0]`, { id: id })
        .then((data) => {
            setCategoryRestaurants(data)
        })
    }, [])
    
    return (
        <SafeAreaView className='bg-white'>
            <View className='flex-row  items-center mx-4 space-x-2'>
                <Text className='flex-1 font-bold text-xl' >{categoryRestaurants.name}</Text>
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className=''>
                    <ArrowLeftCircleIcon size={40} color={'#00CCBB'}/>
                </TouchableOpacity>
                
            </View>

            <ScrollView className=' '>
                {restaurants?.map((restaurant) => (
                    <View key={restaurant._id} className='p-8'>
                            <ResturantCard
                                key={restaurant._id}
                                id={restaurant._id}
                                imgUrl={restaurant.image}
                                title={restaurant.name}
                                rating={restaurant.rating}
                                genre={restaurant.type?.name}
                                address={restaurant.address}
                                short_description={restaurant.short_description}
                                dishes={restaurant.dishes}
                                long={restaurant.long}
                                lat={restaurant.lat}
                            />                           
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}
