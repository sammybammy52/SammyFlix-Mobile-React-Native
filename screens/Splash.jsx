import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <View className='flex-1 items-center justify-center bg-slate-900'>
      <Text className="font-bold text-3xl text-white">Splash Screen</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})