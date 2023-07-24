import { StyleSheet, Text, TextInput, View, Keyboard, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import SearchSuggestions from "../components/SearchSuggestions";
import { useNavigation } from "@react-navigation/native";
import { searchVideos } from "../api/MovieApi";

const Discover = () => {
  const [query, setquery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigation = useNavigation();


  const handleSearch = () => {
    // Perform search functionality using the `searchText` value

    // Navigate to the desired page
    navigation.navigate("SearchPage", { query });
  };

  useEffect(() => {
    // Debounce function to delay the API call
    const debounceFetchVideos = setTimeout(async () => {
      if (query !== "") {
        const result = await searchVideos(query);
        setSuggestions(result.data.results);
        console.log(result.data.results);
      } else {
        setSuggestions([]);
      }
    }, 500);

    // Clear the timeout on every query change to avoid unnecessary API calls
    return () => clearTimeout(debounceFetchVideos);
  }, [query]);

  return (
    <>
      <Appbar.Header className="bg-black ">
        <Appbar.BackAction
          onPress={() => {
            Keyboard.dismiss();
            navigation.goBack();
          }}
          color="#fff"
        />
        <TextInput
          className="bg-[#ffffff5e] w-[72%] h-[75%] rounded px-2 mr-4 text-white"
          value={query}
          onChangeText={(searchTerm) => setquery(searchTerm)}
          placeholder="Search title"
          placeholderTextColor="#fff"
          returnKeyType="search" // Display search button on keyboard
          onSubmitEditing={handleSearch} // Trigger search action on submit
        />
        <MaterialIcons
          name="clear"
          size={24}
          color="white"
          className=""
          onPress={() => setquery("")}
        />
      </Appbar.Header>
      <SafeAreaView className="bg-black h-full">
        <ScrollView className=" bg-black mb-8">
          <>
          {suggestions.length !== 0 ?
            suggestions.map((i) => (i.media_type == "movie" || i.media_type =="tv" ? <SearchSuggestions key={i.id} movie={i} /> : <></>))
            : <View className='flex justify-center items-center pt-20'>
              <Text className='text-white'>Search for your favorite movies and tv shows</Text>
            </View>
          }
          </>
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Discover;
