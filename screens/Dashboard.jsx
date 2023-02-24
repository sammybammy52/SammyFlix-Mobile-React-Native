import {
  Image,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FeaturedRow from "../components/FeaturedRow";
import HomeCard from "../components/HomeCard";
import { useEffect, useState } from "react";
import { getAllMovies } from "../api/MovieApi";
import { Feather } from "@expo/vector-icons";

const Dashboard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const result = await getAllMovies();

    if (result.status == 201) {
      console.log(result.data.data);
      setMovies(result.data.data);
    }
  };
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-black">
      <ScrollView>
        <View className="flex-row p-3 items-center justify-center">
          <Feather name="play-circle" size={24} color="#553c9a" />
          <Text className="text-white ml-1 text-base">SAMMYFLIX</Text>
        </View>
        <HomeCard />
        <FeaturedRow title="Top 10 in Nigeria" movies={movies} />
        <FeaturedRow title="Trending" movies={movies} />
        <FeaturedRow title="For You" movies={movies} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
