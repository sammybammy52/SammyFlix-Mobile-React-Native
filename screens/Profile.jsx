import {  Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    AsyncStorage.removeItem("AccessToken");
    navigation.replace("Login");
  };
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-black">
      <Text className="text-3xl text-white">Welcome Mate</Text>
      <Text className="text-white mb-4">You are logged in</Text>
      <TouchableOpacity
        className="bg-purple-800 rounded-full px-10 py-3"
        onPress={handleLogout}
      >
        <Text className="text-white">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile

