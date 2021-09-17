import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import noteReducer from "./store/note-reducer";

import MainNavigation from "./navigation/MainNavigation";

const rootReducer = combineReducers({
  notes: noteReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
