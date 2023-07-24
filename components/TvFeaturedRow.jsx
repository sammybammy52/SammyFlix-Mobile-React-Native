import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import MovieCard from './MovieCard';
import TvCard from './TvCard';
const TvFeaturedRow = ({ title, movies}) => {
  return (
    <View>
      <View className='mt-6 flex-row items-center justify-between px-4'>
        <Text className=' text-white font-bold text-lg'>{title}</Text>
        <AntDesign name="arrowright" size={24} color="white" />
      </View>

      

      <FlatList
      className="pt-4 px-4"
      data={movies}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TvCard movie={item}/>
      )}
      keyExtractor={(item) => item.id}
      />
    

    </View>
  )
}

export default TvFeaturedRow

