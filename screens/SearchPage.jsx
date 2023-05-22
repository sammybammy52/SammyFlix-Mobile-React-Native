import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Appbar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { searchVideos } from "../api/MovieApi";
import MovieRow from "../components/MovieRow";
const SearchPage = () => {
  const navigation = useNavigation();

  const [searchResults, setSearchResults] = useState([]);

  const {
    params: { query },
  } = useRoute();

  const fetchMovies = async () => {
    const result = await searchVideos(query);
    setSearchResults(result.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <View>
        <Appbar.Header className="bg-black">
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
            color="#fff"
          />
          <Appbar.Content title="Search Results" color="#fff" />
        </Appbar.Header>
      </View>
      <View className="bg-black h-full">
        <ScrollView className="bg-black">
          <View>
            {searchResults.length !== 0 &&
              searchResults.map((i) => <MovieRow key={i.id} movie={i} />)}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SearchPage;

const styles = StyleSheet.create({});
