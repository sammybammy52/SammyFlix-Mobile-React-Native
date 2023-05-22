import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Linking
} from "react-native";
import { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { getTvDetails, getTvVideos } from "../api/TvApi";
import SeasonsCard from "../components/SeasonsCard";
import YoutubeCard from "../components/YoutubeCard";
import { truncateText } from "../utils/Helpers";

const TvDetails = () => {
  const { params: movie } = useRoute();
  const navigation = useNavigation();
  
  const [readMore, setReadMore] = useState(false);
  const [videos, setVideos] = useState(null);
  const [teasers, setTeasers] = useState(null);
  const [firstAirDate, setFirstAirDate] = useState(null);
  const [seasons, setSeasons] = useState(null);

  const [videoFetchLoading, setVideoFetchLoading] = useState(false);
  const fetchVideos = async () => {
    setVideoFetchLoading(true);
    const result = await getTvVideos(movie.id);
    const trailers = result.data.results;
    setTeasers(trailers);
    const trailer = trailers.filter((i) => {
      return i.type === "Trailer";
    });

    setVideos(trailer);
    setVideoFetchLoading(false);
  };

  const [detailsLoading, setDetailsLoading] = useState(false);
  const fetchTvDetails = async (id) => {
    setDetailsLoading(true);
    const result = await getTvDetails(id);
    const tv = result.data;
    console.log(tv);
    setFirstAirDate(tv.first_air_date);

    const realSeasons = tv.seasons.filter((i) => {
      return i.season_number !== 0;
    });
    setSeasons(realSeasons);
    setDetailsLoading(false);
  };

  useEffect(() => {
    fetchVideos();
    fetchTvDetails(movie.id);
  }, []);

  const handleOpenYouTube = () => {
    if (videos) {
      // Linking.openURL(`https://www.youtube.com/watch?v=${videos[0].key}`);

      navigation.navigate("PlayerScreen", { key: videos[0].key });
    }
    
  };
  const handleDownload = () => {
    Linking.openURL(`https://tfpdl.se/?s=${movie?.name}`);
  }

  const handleWatch = () => {
    Linking.openURL(`https://hdtoday.tv/search/${movie?.name}`);
  }
  return (
    <>
      <ScrollView className="bg-black">
        <View className="relative">
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`,
            }}
            className="w-full h-64 bg-gray-300 p-4"
          />

          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded"
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View className="bg-black h-full px-4">
          <View>
            <Text className="text-white text-3xl py-6 font-bold">
              {movie.name}
            </Text>
            <View className="flex-row justify-between">
              <Text className="text-white">
                First Aired: {firstAirDate && firstAirDate}
              </Text>
              <Text className="text-white">
                {movie.vote_average}{" "}
                <FontAwesome
                  name="star"
                  size={24}
                  color="#553c9a"
                  className="ml-2"
                />
              </Text>
            </View>
            <Text className=" text-gray-500 text-base py-4">
                    { readMore ? <>
                      {movie?.overview} <TouchableOpacity onPress={() => setReadMore(false)}><Text className="font-semibold text-white">read less</Text></TouchableOpacity>
                    </> : <>
                    {truncateText(movie?.overview, 300)} <TouchableOpacity onPress={() => setReadMore(true)}><Text className="font-semibold text-white">read more</Text></TouchableOpacity>
                    </>}
                  </Text>
            

            <Text className="text-white mt-4 font-semibold text-lg">
              Seasons {seasons && <>({seasons.length})</>}
            </Text>
            {detailsLoading ? (
              <>
                <View className="flex justify-center py-3">
                  <ActivityIndicator size="large" color="#553c9a" />
                </View>
              </>
            ) : (
              <>
                <View>
                  <ScrollView
                    horizontal
                    contentContainerStyle={{
                      paddingHorizontal: 0,
                    }}
                    showsHorizontalScrollIndicator={false}
                    className="pt-4"
                  >
                    {seasons?.map((i) => (
                      <SeasonsCard key={i.id} season={i} />
                    ))}
                  </ScrollView>
                </View>
              </>
            )}

            <Text className="text-white mt-4 font-semibold text-lg">
              Videos and Teasers
            </Text>

            {videoFetchLoading ? (
              <>
                <View className="flex justify-center py-3">
                  <ActivityIndicator size="large" color="#553c9a" />
                </View>
              </>
            ) : (
              <>
                <View>
                  <ScrollView
                    horizontal
                    contentContainerStyle={{
                      paddingHorizontal: 0,
                    }}
                    showsHorizontalScrollIndicator={false}
                    className="pt-4"
                  >
                    {teasers?.map((i) => (
                      <YoutubeCard key={i.id} video_id={i.key} />
                    ))}
                  </ScrollView>
                </View>
              </>
            )}

            <Text className="text-white mt-4 font-semibold text-lg">
              Watch for free
            </Text>

            <View className="flex-row gap-2 pt-6 pb-10">
              <TouchableOpacity
                className="p-4 bg-purple-800 rounded-md"
                onPress={handleDownload}
              >
                <Text className="text-white font-medium">Download Now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-4 bg-gray-200 rounded-md"
                onPress={handleWatch}
              >
                <Text className="font-medium">Watch Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="bg-black py-2 px-3">
        <TouchableOpacity className="px-6 py-4 rounded bg-purple-800">
          <Text
            className="text-white text-lg font-semibold"
            onPress={handleOpenYouTube}
          >
            Play Trailer
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TvDetails;

const styles = StyleSheet.create({});
