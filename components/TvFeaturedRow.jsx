import { ScrollView, Text, View } from 'react-native'
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

      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
        {
            movies.map((movie) => (
                <TvCard key={movie.id} movie={movie}/>
            ))
        }

      </ScrollView>
    

    </View>
  )
}

export default TvFeaturedRow

