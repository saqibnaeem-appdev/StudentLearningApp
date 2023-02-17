/** @format */
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../../assets/theme/Colors";

import TeacherMainStack from "./TeacherStack";
import StudentStack from "./StudentStack";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.secondary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          color: Colors.background,
        },
      }}
    >
      <Stack.Screen
        name="WelcomeScreen"
        options={{
          headerShown: false,
        }}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="TeacherMainStack"
        options={{
          headerShown: false,
        }}
        component={TeacherMainStack}
      />
      <Stack.Screen
        name="StudentStack"
        options={{
          headerShown: false,
        }}
        component={StudentStack}
      />
      
    
      
    </Stack.Navigator>
  );
};

export default MainStack;
