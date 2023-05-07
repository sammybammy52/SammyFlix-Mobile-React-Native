import { Image, SafeAreaView, View, Text, ScrollView, TouchableOpacity } from "react-native";
import AvatarMobile from "../assets/avatar-mobile.jpg";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useState, useEffect } from "react";
import { truncateText } from "../utils/Helpers";
import { useNavigation } from "@react-navigation/native";
const HomeCard = ({ popular }) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({})

  const navigation = useNavigation();

  useEffect(() => {
    setItems(popular);
    console.log("hello")
    console.log(popular);
  }, [popular]);

  useEffect(() => {
    // Set a random item initially
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    setSelectedItem(randomItem);

    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * items.length);
      const randomItem = items[randomIndex];
      setSelectedItem(randomItem);
    }, 16000); // Change 5000 to the desired interval time in milliseconds

    return () => clearInterval(intervalId);
  }, [items]);
  return (
    <View className="mt-4 relative flex-1 justify-center items-center" >
        <View className="absolute bg-black w-[90vw] h-full z-10 opacity-40"></View>
        <Image source={{
                    uri:`https://image.tmdb.org/t/p/w780/${selectedItem?.backdrop_path}` ,
                }} className="h-[40vh] w-[90vw] rounded-lg" />
        <TouchableOpacity
          className=" w-[80vw] justify-center flex-row items-center h-16 absolute bottom-6 rounded-lg z-10"
          style={{
            backgroundColor: "rgba(200, 200, 200, 0.4)",
            
          }}

          onPress={() => {
            navigation.navigate('DetailsScreen', selectedItem);
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
            {
              selectedItem && truncateText(selectedItem?.title, 20)
            }
          </Text>
          </View>
          
        </TouchableOpacity>
        
      </View>
  )
}

export default HomeCard
