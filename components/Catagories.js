import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import CatagoryCard from './CatagoryCard'
import sanityClient, { urlFor } from '../sanity'


export default function Catagories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == 'category']
    `).then((data) => {
      setCategories(data)
    })
  }, [])
  
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>
          
      {/* Catagory View */}
      {categories.map((category) => {
        return (
          <CatagoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
          />
        )
        
      })
        
      }
        
  
    </ScrollView>
  )
}
