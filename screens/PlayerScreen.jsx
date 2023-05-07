import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';
import { useRoute } from '@react-navigation/native';

const PlayerScreen = () => {
    const { params: { key}} = useRoute();
  return (
    <View>
      <YoutubePlayer
      height={300}
      play={true}
      videoId={key}
      />
    </View>
  )
}

export default PlayerScreen

const styles = StyleSheet.create({})