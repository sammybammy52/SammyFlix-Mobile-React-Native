import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from "@expo/vector-icons";

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
          handleGetToken();
        }, 1000);
      });
    
      const handleGetToken = async () => {
        const dataToken = await AsyncStorage.getItem('AccessToken');
        if (!dataToken) {
          navigation.replace('Login');
        } else {
          navigation.replace('HomeTabs');
        }
      };
    
  return (
    <View className='flex-1 items-center justify-center bg-black'>
      <View className="flex-row gap-1">
        <Feather name="play-circle" size={32} color="#553c9a" />
          <Text className="text-white ml-1 text-xl">SAMMYFLIX</Text>
      </View>
      
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})