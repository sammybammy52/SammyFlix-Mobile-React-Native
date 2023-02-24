import {
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";
import React, { useState } from "react";
import { userRegister } from "../api/UserApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const role = "Customer";

  const navigation = useNavigation();

  const handleRegister = async () => {
    setLoading(true);
    const result = await userRegister({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: role,
    });

    if (result.status == 201) {
      setLoading(false);
      console.log(result.data);
      AsyncStorage.setItem("AccessToken", result.data.token);
      AsyncStorage.setItem("userData", JSON.stringify(result.data.user));
      navigation.replace("HomeTabs");
    } else {
      setLoading(false);
      alert("Error");
    }

    //alert(result.data)
  };
  return (
    <>
      {loading ? (
        <SafeAreaView className=" bg-black flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#553c9a" />
        </SafeAreaView>
      ) : (
        <SafeAreaView
          behavior="padding"
          className=" bg-black flex-1 justify-center items-center"
        >
          <View className="flex-row p-3 mb-2">
            <Feather name="play-circle" size={36} color="#553c9a" />
            <Text className="text-white ml-1 text-lg mt-1">SAMMYFLIX</Text>
          </View>
          <View className="">
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#fff"
              value={firstName}
              className=" bg-slate-600 p-3 w-[90vw] mb-4 text-white"
              onChangeText={(firstName) => setFirstName(firstName)}
            />

            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#fff"
              value={lastName}
              className=" bg-slate-600 p-3 w-[90vw] mb-4 text-white"
              onChangeText={(lastName) => setLastName(lastName)}
            />

            <TextInput
              placeholder="Email"
              placeholderTextColor="#fff"
              value={email}
              className=" bg-slate-600 p-3 w-[90vw] mb-4 text-white"
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#fff"
              value={password}
              className="bg-slate-600 p-3 w-[90vw] mb-8 text-white"
              onChangeText={(password) => setPassword(password)}
              secureTextEntry
            />

            <TouchableOpacity
              onPress={handleRegister}
              className=" bg-purple-800 p-3 flex items-center mb-6"
            >
              <Text className="text-white text-lg font-bold">Register</Text>
            </TouchableOpacity>

            <View className="w-[90vw]">
              <Text className="text-white">
                Already have an account?,{" "}
                <TouchableOpacity
                  className="h-[15px]"
                  onPress={() => {
                    navigation.replace("Login");
                  }}
                >
                  <Text className="text-purple-800"> Click here </Text>
                </TouchableOpacity>
                to login.
              </Text>
            </View>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default RegisterScreen;
