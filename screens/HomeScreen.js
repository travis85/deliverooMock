import React, {useLayoutEffect, useState, useEffect} from 'react'
import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon, AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from "../sanity"
import ResturantCard from '../components/ResturantCard';

export default function HomeScreen() {
    const navigation = useNavigation()
    const [search, setSearch] = useState('')
    const [featuredCatagories, setFeaturedCatagories] = useState([])
    const [filteredSearch, setFilteredSearch] = useState([])

    const searchFilterFunction = (text) => {
        const restaurantArray = featuredCatagories[1].restaurants
        if (text) {
            const newData = restaurantArray.filter((restaurant) => {
                const searchData = restaurant.name ? restaurant.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return searchData.indexOf(textData) > -1; //returns true or false
            });
            setFilteredSearch(newData);
            setSearch('');
        } else {
            setFilteredSearch([]);
            setSearch('');
        }
    };

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
    },[]);
    
   
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
                    < TextInput
                        onChangeText={(text) => setSearch(text)}
                        onSubmitEditing={()=>searchFilterFunction(search)}
                        placeholder='Resturants and Cuisines'
                    />
                </View>
                < AdjustmentsHorizontalIcon color='#00CCBB' />
            </View>

            {/* BODY */}
            
            <ScrollView>
                
                <Categories />

                { filteredSearch.length < 1 ?
                    /* FEATURED ROW */ 
                    featuredCatagories?.map((category) => (
                        < FeaturedRow
                            key={category._id}
                            id= {category._id}
                            title= {category.name}
                            description={category.short_description}
                        />
                    )) :
                    filteredSearch?.map((restaurant) => (
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
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}
