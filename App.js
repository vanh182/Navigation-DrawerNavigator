import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";

const App = () => {
    return (
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    );
  }
  export default App;

  // const App = () => {
  //   return (
  //     <NavigationContainer>
  //       <DrawerNavigator/>
  //     </NavigationContainer>
  //   );
  // }
  // export default App;

