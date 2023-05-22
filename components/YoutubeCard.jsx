import { View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const YoutubeCard = ({ video_id }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="mr-4"
      onPress={() => {
        return navigation.navigate("PlayerScreen", { key: video_id });
      }}
    >
      <View>
        <Image
          source={{
            uri: `https://img.youtube.com/vi/${video_id}/0.jpg`,
          }}
          className="h-36 w-40"
        />
        <View className="absolute top-[45%] left-[45%] shadow-lg">
          <FontAwesome5 name="play" size={22} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default YoutubeCard;
