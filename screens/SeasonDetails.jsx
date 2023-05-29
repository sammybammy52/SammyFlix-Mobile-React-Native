import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import { truncateText } from "../utils/Helpers";
import { useState, useEffect } from "react";
import { getTvSeasonDetails } from "../api/TvApi";
import moment from "moment/moment";
import { List } from "react-native-paper";

const SeasonDetails = () => {
  const {
    params: { season, bg, name, tvId },
  } = useRoute();
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);

  const handlePress = (id) => {
    if (activeEp == id) {
      setActiveEp("");
      setExpanded(!expanded);
    } else {
      setActiveEp(id);
      setExpanded(!expanded);
    }
  };
  const [activeEp, setActiveEp] = useState("");
  //fetching details about the particular Season

  const [loading, setLoading] = useState(false);
  const [seasonInfo, setSeasonInfo] = useState(null);
  const fetchTvSeasonDetails = async () => {
    setLoading(true);
    const result = await getTvSeasonDetails(tvId, season.season_number);
    console.log(result.data);
    setSeasonInfo(result.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchTvSeasonDetails();
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
          <Appbar.Content
            title={`${truncateText(name, 20)} - ${season?.name}`}
            style={{}}
            color="#fff"
          />
        </Appbar.Header>
      </View>
      <View className="bg-black flex-1">
        <ScrollView className="flex-1">
          <View className="relative">
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w780/${bg}`,
              }}
              className="w-full h-56 bg-gray-300"
            />
            <Text className="absolute text-white bottom-2 left-2 bg-gray-900 p-2 text-base font-semibold rounded-md">
              {moment(seasonInfo?.air_date).format("MMMM YYYY")}
            </Text>
          </View>

          <View className="px-3">
            <Text className=" text-purple-800 text-2xl pt-6 font-bold">
              {name}
            </Text>

            <Text className=" text-white text-xl pb-2 font-semibold">
              {season?.name}
            </Text>
          </View>

          <List.Section title="Episodes">
            {loading ? (
              <>
                <View className="flex justify-center py-3">
                  <ActivityIndicator size="large" color="#553c9a" />
                </View>
              </>
            ) : (
              seasonInfo?.episodes.map((i) => (
                <List.Accordion
                  title={`EP ${i.episode_number} - ${i.name}`}
                  titleStyle={{ color: "#fff" }}
                  style={{ backgroundColor: "#000" }}
                  expanded={activeEp == i.id ? true : false}
                  onPress={() => handlePress(i.id)}
                  key={i.id}
                >
                  <Text className=" text-gray-500 px-3">{i.overview}</Text>
                </List.Accordion>
              ))
            )}
          </List.Section>
        </ScrollView>
      </View>
    </>
  );
};

export default SeasonDetails;

const styles = StyleSheet.create({});
