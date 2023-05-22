import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import store from "./redux/store";
import { Provider } from "react-redux";
import Splash from "./screens/Splash";
import HomeTabs from "./screens/HomeTabs";
import RegisterScreen from "./screens/RegisterScreen";
import DetailsScreen from "./screens/DetailsScreen";
import PlayerScreen from "./screens/PlayerScreen";
import SearchPage from "./screens/SearchPage";
import TvDetails from "./screens/TvDetails";

const Stack = createNativeStackNavigator();

function Navigation() {

  return (
    <>
    <StatusBar backgroundColor="black" barStyle="light-content" />
    <NavigationContainer> 
        <Stack.Navigator>
        <Stack.Screen
              name="Splash"
              options={{ headerShown: false }}
              component={Splash}
            />
        <Stack.Screen
              name="Login"
              options={{ headerShown: false, animation: 'slide_from_right' }}
              component={LoginScreen}
            />
            <Stack.Screen
              name="Register"
              options={{ headerShown: false, animation: 'slide_from_right' }}
              component={RegisterScreen}
            />
        <Stack.Screen
              name="HomeTabs"
              options={{ headerShown: false, animation: 'slide_from_right' }}
              component={HomeTabs}
            />
        <Stack.Screen
              name="DetailsScreen"
              options={{ headerShown: false, animation: 'slide_from_right' }}
              component={DetailsScreen}
            />
            <Stack.Screen
              name="TvDetails"
              options={{ headerShown: false, animation: 'slide_from_right' }}
              component={TvDetails}
            />

<Stack.Screen
              name="PlayerScreen"
              options={{ headerShown: false, animation: 'slide_from_right' }}
              component={PlayerScreen}
            />
        <Stack.Screen
              name="SearchPage"
              options={{ headerShown: false, animation: 'slide_from_right' }}
              component={SearchPage}
            />
            
        </Stack.Navigator>
      </NavigationContainer>
    </>
      
  );
}

const App = () => {

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}

export default App