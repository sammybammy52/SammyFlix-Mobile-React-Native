import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

const PlayerScreen = () => {
  const {
    params: { key },
  } = useRoute();
  return (
    <SafeAreaView className="bg-black h-screen py-56">
      <View className="h-full">
        <WebView
          source={{ uri: `https://www.youtube.com/embed/${key}?playsinline=1` }}
          className="h-56"
          allowsFullscreenVideo={true}
          mediaPlaybackRequiresUserAction={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({});
