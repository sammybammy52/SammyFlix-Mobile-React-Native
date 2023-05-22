import {  View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SeasonsCard = ({ season }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity className="mr-4" onPress={() => {
    //   return navigation.navigate('SeasonDetails', season);
        alert("Season Details Coming Soon")
    }}>
      <View>
        <Image source={{
          uri: `https://image.tmdb.org/t/p/w300/${season.poster_path}`,
        }} className="h-56 w-36 object-cover"/>
        <Text className="absolute text-white top-2 right-2 bg-gray-900 p-1 font-semibold rounded-md">Season {season.season_number}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SeasonsCard
