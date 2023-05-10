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
import { getPopular, getGrossing, getVoted } from "../api/MovieApi";
import { Feather } from "@expo/vector-icons";

const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [grossing, setGrossing] = useState([]);
  const [voted, setVoted] = useState([]);

  useEffect(() => {
    fetchPopular();
    fetchGrossing();
    fetchVoted();
  }, []);

  // const fetchMovies = async () => {
  //   const result = await getAllMovies();

  //   if (result.status == 201) {
  //     console.log(result.data.data);
  //     // setMovies(result.data.data);
  //   }
  // };

  const fetchPopular = async() => {
    const result = await getPopular();

    console.log(result.data)
    setPopular(result.data.results)
  }

  const fetchGrossing = async() => {
    const result = await getGrossing();

    console.log(result.data)
    setGrossing(result.data.results)
  }

  const fetchVoted = async() => {
    const result = await getVoted();

    console.log(result.data)
    setVoted(result.data.results)
  }

  

  return (
    <SafeAreaView className="flex-1 justify-center items-center pt-8 bg-black">
      <ScrollView>
        <View className="flex-row p-3 items-center justify-center">
          <Feather name="play-circle" size={24} color="#553c9a" />
          <Text className="text-white ml-1 text-base">SAMMYFLIX</Text>
        </View>
        <HomeCard popular={popular}/>
        <FeaturedRow title="Popular Movies" movies={popular} />
        <FeaturedRow title="Top Grossing" movies={grossing} />
        <FeaturedRow title="Most Voted" movies={voted} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
