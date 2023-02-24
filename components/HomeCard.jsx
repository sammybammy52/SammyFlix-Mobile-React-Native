import { Image, SafeAreaView, View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from 'react'
import AvatarMobile from "../assets/avatar-mobile.jpg";
import { FontAwesome5 } from '@expo/vector-icons'; 

const HomeCard = () => {
  return (
    <View className="mt-8 relative flex-1 justify-center items-center" >
        <View className="absolute bg-black w-[90vw] h-full z-10 opacity-40"></View>
        <Image source={AvatarMobile} className="h-[40vh] w-[90vw] rounded-lg" />
        <TouchableOpacity
          className=" w-[80vw] justify-center flex-row items-center h-16 absolute bottom-6 rounded-lg z-10"
          style={{
            backgroundColor: "rgba(200, 200, 200, 0.4)",
            
          }}
        >
          <View className="bg-purple-800 rounded-full h-10 w-10 justify-center items-center mr-3">
            <View>
              <FontAwesome5 name="play" size={18} color="white" />
            </View>
          
          </View>
          <View>
            <Text className="text-white text-base">Watch Now</Text>
            <Text className="text-xl text-white font-bold">
            Avatar:Way of Water
          </Text>
          </View>
          
        </TouchableOpacity>
        
      </View>
  )
}

export default HomeCard
