import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SchoolLists from "../screens/SchoolLists";
import Details from "../screens/Details";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Schools"
        screenOptions={{
          presentation: "modal",
          headerStyle: {
            backgroundColor: "#37313b",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="Schools"
          component={SchoolLists}
          options={{
            title: "NYC Schools",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            title: route.params.detail.school_name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
