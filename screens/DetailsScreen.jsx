import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native'
import { useState, useEffect} from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getVideos } from '../api/MovieApi';
import { FontAwesome } from '@expo/vector-icons'; 



const DetailsScreen = () => {
    const { params: movie} = useRoute();
    const navigation = useNavigation();
    const [videos, setVideos] = useState(null);
    
    const fetchVideos = async() => {
        const result = await getVideos(movie.id);
        const trailers = result.data.results;
       const trailer = trailers.filter((i) => {
        return i.type === 'Trailer'
       })
       setVideos(trailer);
    }
    useEffect(() => {
        fetchVideos();
    }, []);

  
    const handleOpenYouTube = () => {
        if (videos) {
            Linking.openURL(`https://www.youtube.com/watch?v=${videos[0].key}`);
        }
        
      };
  return (
    <>
    <ScrollView>
            <View className='relative'>
                <Image
                source={{
                    uri:`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}` ,
                }}
                className="w-full h-64 bg-gray-300 p-4"
                />

                <TouchableOpacity onPress={navigation.goBack} className='absolute top-14 left-5 p-2 bg-gray-100 rounded'>
                <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View className="bg-black h-screen px-4">
                <View>
                    <Text className="text-white text-3xl py-6 font-bold">{movie.title}</Text>
                    <View className='flex-row justify-between'>
                    <Text className="text-white">Released: {movie.release_date}</Text>
                    <Text className="text-white">{movie.vote_average}{" "}<FontAwesome name="star" size={24} color="#553c9a" className='ml-2'/></Text>
                    </View>
                   
                    <Text className=" text-gray-500 text-base py-4">{movie.overview}</Text>
                    <Text className="text-white">{videos && videos[0]?.name}</Text>
                </View>
            </View>

            
        </ScrollView>
        <View className='bg-black py-2 px-3'>
            <TouchableOpacity className='px-6 py-4 rounded bg-purple-800'><Text className='text-white text-lg font-semibold' onPress={handleOpenYouTube}>Play Trailer</Text></TouchableOpacity>
        </View>
    </>
    
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})