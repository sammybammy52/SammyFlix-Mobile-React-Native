import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import { Octicons } from "@expo/vector-icons";
import Discover from "./Discover";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: "#000",
  },
};

const HomeTabs = () => {
  return (
    <PaperProvider theme={theme}>
      <Tab.Navigator
        activeColor="#553c9a"
        inactiveColor="#fff"
        barStyle={{ backgroundColor: "#000", borderTopWidth: 0.2, borderTopColor:'#333333', }}
        labeled={true}
        ac
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" color={color} size={24} />
            ),
          }}
          component={Dashboard}
        />

        <Tab.Screen
          name="Discover"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="search" color={color} size={24} />
            ),
          }}
          component={Discover}
        />

        <Tab.Screen
          name="Settings"
          
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="person" color={color} size={24} />
            ),
            tabBarBadge:3
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </PaperProvider>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({});
