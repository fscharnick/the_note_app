import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FAB } from "react-native-paper";

import NoteItem from "../components/NoteItem";

import { useSelector, useDispatch } from "react-redux";
import * as noteActions from "../store/note-action";

const HomeScreen = (props) => {
  const notes = useSelector((state) => state.notes.notes);

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <NoteItem
            title={itemData.item.title}
            note={itemData.item.note}
            onDeleteNote={() => {
              dispatch(noteActions.deleteNote(itemData.item.id));
            }}
          />
        )}
      />
      <FAB
        style={styles.fab}
        large
        icon="plus"
        color="white"
        onPress={() => {
          props.navigation.navigate({ routeName: "CreateNote" });
        }}
      />
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: "Quick Note",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#20A7FF",
  },
});

export default HomeScreen;
