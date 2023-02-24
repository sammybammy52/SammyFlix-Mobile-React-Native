import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <TouchableOpacity className="mr-4">
      <View>
        <Image source={{
          uri: movie.poster,
        }} className="h-56 w-36"/>
    
      </View>
    </TouchableOpacity>
  )
}

export default MovieCard
