// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator, HomeStackNavigator, LoginStackNavigator, MainStackNavigator, ProductStackNavigator } from "./StackNavigator";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={LoginStackNavigator} />
      <Drawer.Screen name="Home" component={HomeStackNavigator} />

      <Drawer.Screen name="Product" component={ProductStackNavigator} />
      <Drawer.Screen name="About" component={MainStackNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

