import {Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
const MovieRow = ({movie}) => {
    const navigation = useNavigation();
    const handlePress = () => {
        return navigation.navigate('DetailsScreen', movie);
       }
  return (
    <TouchableOpacity className='flex-row bg-black py-3 gap-4 pl-2' onPress={handlePress}>
      <Image source={{
          uri: `https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
        }} className="h-44 w-28"/>
        <View className='w-[60%]'>
            <Text className='text-white font-medium text-lg'>{movie.title}</Text>
            <Text className='text-gray-400 text-sm'>{movie.release_date}</Text>
            <Text className="text-white text-sm">{movie.vote_average}{" "}<FontAwesome name="star" size={16} color="#553c9a" className='ml-2'/></Text>
        </View>
      
    </TouchableOpacity>
  )
}

export default MovieRow
