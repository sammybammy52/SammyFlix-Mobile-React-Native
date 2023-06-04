import {  View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MovieCard = ({ movie }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity className="mr-4" onPress={() => {
      return navigation.navigate('DetailsScreen', movie);
    }}>
      <View>
        <Image source={{
          uri: `https://image.tmdb.org/t/p/w300/${movie?.poster_path}`,
        }} className="h-56 w-36"/>

      </View>
    </TouchableOpacity>
  )
}

export default MovieCard
