// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Login from "../screens/Login";


import Loaihoa from '../components/Loaihoa';
import Hoa from '../components/Hoa';
import ChiTietHoa from '../components/ChiTietHoa';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "pink",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const ProductStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Loai hoa">
     <Stack.Screen name="Loại hoa" component={Loaihoa}/>
     <Stack.Screen name="Hoa" component={Hoa}/>
     <Stack.Screen name='ChiTietHoa' component={ChiTietHoa}/>
     </Stack.Navigator>
  )
}

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}


export { MainStackNavigator, ContactStackNavigator, LoginStackNavigator, ProductStackNavigator, HomeStackNavigator };


// import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Loaihoa from './components/Loaihoa';
// import Hoa from './components/Hoa';
// import ChiTietHoa from '././components/ChiTietHoa';


//  const Stack=createNativeStackNavigator();
// export default function App() {
//   return (

// <NavigationContainer>
//   <Stack.Navigator initialRouteName="Loaihoa">
//     <Stack.Screen name="Loại hoa" component={Loaihoa}/>
//     <Stack.Screen name="Hoa" component={Hoa}/>
//     <Stack.Screen name='ChiTietHoa' component={ChiTietHoa}/>
//     </Stack.Navigator>
// </NavigationContainer>

//   );
 
// };