import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import CreateNoteScreen from "../screens/CreateNoteScreen";

const MainStackNavigator = createStackNavigator({
  Home: HomeScreen,
  CreateNote: CreateNoteScreen,
});

export default createAppContainer(MainStackNavigator);
