import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'react-native';
import PopCorn from '../assets/popcorn.png';
import Chair from '../assets/chair.png';
import Done from '../assets/done.png';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
    //To handle the navigation to the Homepage if Skip is clicked
onSkip={() => navigation.replace("Login")}

//To handle the navigation to the Homepage after Done is clicked
onDone={() => navigation.replace("Login")}
    pages={[
        {
            backgroundColor: '#000',
            color: '#fff',
            image: <Image source={PopCorn} />,
            title: 'Welcome',
            subtitle: 'Welcome to Sammyflix, the best movie finder and movie companion',
        },
        {
            backgroundColor: '#000',
            image: <Image source={Chair} />,
            title: 'Discover',
            subtitle: 'Discovet the latest movies and tv shows with immersive trailers',
        },
        {
            backgroundColor: '#000',
            image: <Image source={Done} />,
            title: 'Enjoy!',
            subtitle: "Enjoy Sammyflix and don't forget to share with family and friends",
        },
    ]}
/>
  )
}

export default OnboardingScreen
