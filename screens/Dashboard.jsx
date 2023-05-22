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
import { getPopularTv, getTopRatedTv, } from "../api/TvApi";
import TvFeaturedRow from "../components/TvFeaturedRow";

const Dashboard = () => {
  const [popular, setPopular] = useState([]);
  const [grossing, setGrossing] = useState([]);
  const [voted, setVoted] = useState([]);
  const [newTv, setNewTv] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  const [actionTV, setActionTv] = useState([]);

  useEffect(() => {
    fetchPopular();
    fetchGrossing();
    fetchVoted();
    fetchNewTv();
    fetchTopRatedTv();
  }, []);

  // const fetchMovies = async () => {
  //   const result = await getAllMovies();

  //   if (result.status == 201) {
  //     console.log(result.data.data);
  //     // setMovies(result.data.data);
  //   }
  // };

  const fetchPopular = async () => {
    const result = await getPopular();

    //console.log(result.data);
    setPopular(result.data.results);
  };

  const fetchGrossing = async () => {
    const result = await getGrossing();

    //console.log(result.data);
    setGrossing(result.data.results);
  };

  const fetchVoted = async () => {
    const result = await getVoted();

    //console.log(result.data);
    setVoted(result.data.results);
  };

  const fetchNewTv = async () => {
    const result = await getPopularTv();

   // console.log(result.data);
    setNewTv(result.data.results);
  };
  const fetchTopRatedTv = async () => {
    const result = await getTopRatedTv();
    //console.log(result.data);
    setTopRatedTv(result.data.results);
  };

  // const fetchActionTv = async () => {
  //   const result = await getTvGenre('Animation');
  //   //console.log(result.data);
  //   setActionTv(result.data.results);
  // }

  return (
    <SafeAreaView className="flex-1 justify-center items-center pt-10 bg-black">
      <ScrollView>
        <View className="flex-row p-3 items-center justify-center">
          <Feather name="play-circle" size={24} color="#553c9a" />
          <Text className="text-white ml-1 text-base">SAMMYFLIX</Text>
        </View>
        <HomeCard popular={popular} />
        <FeaturedRow title="Popular Movies" movies={popular} />
        <TvFeaturedRow title="Top Rated TV Series" movies={topRatedTv} />
        <FeaturedRow title="Top Grossing Movies" movies={grossing} />
        <FeaturedRow title="Most Voted Movies" movies={voted} />

        <TvFeaturedRow title="New TV Shows" movies={newTv} />
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
