import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity } from 'react-native'

const SearchSuggestions = ({movie}) => {
    const navigation = useNavigation();
    const handlePress = () => {
     return navigation.navigate('DetailsScreen', movie);
    }
  return (
    <View className='' >
        <TouchableOpacity className='py-3 px-6 bg-black flex-row gap-3' onPress={handlePress}>
            <Image source={{
          uri: `https://image.tmdb.org/t/p/w92/${movie.poster_path}`,
        }} className="h-[30px] w-[30px]"/>
      <Text className="text-white">{movie.title}</Text>
        </TouchableOpacity>
        
    </View>
  )
}

export default SearchSuggestions

