import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import store from "./redux/store";
import { Provider } from "react-redux";
import Splash from "./screens/Splash";
import HomeTabs from "./screens/HomeTabs";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createNativeStackNavigator();

function Navigation() {

  return (

      <NavigationContainer> 
        <Stack.Navigator>
        <Stack.Screen
              name="Splash"
              options={{ headerShown: false }}
              component={Splash}
            />
        <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
              component={LoginScreen}
            />
            <Stack.Screen
              name="Register"
              options={{ headerShown: false }}
              component={RegisterScreen}
            />
        <Stack.Screen
              name="HomeTabs"
              options={{ headerShown: false }}
              component={HomeTabs}
            />
            
        </Stack.Navigator>
      </NavigationContainer>
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