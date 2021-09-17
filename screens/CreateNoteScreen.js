import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import { useDispatch } from "react-redux";
import * as noteActions from "../store/note-action";

const CreateNoteScreen = (props) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const dispatch = useDispatch();

  const titleChangeHandler = (text) => {
    //Need to add validation
    setTitle(text);
  };

  const noteChangeHandler = (text) => {
    //Need to add Validation
    setNote(text);
  };

  const savePostHandler = () => {
    dispatch(noteActions.addNote(title, note));
    props.navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.title}>
        <TextInput
          placeholder="Enter Title"
          onChangeText={titleChangeHandler}
          value={title}
        />
      </View>
      <View style={styles.note}>
        <TextInput
          placeholder="What do you have on your mind..."
          onChangeText={noteChangeHandler}
          value={note}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={savePostHandler}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
            Post Note
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

CreateNoteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Create Note",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 16,
  },

  title: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 25,
    marginBottom: 12,
  },

  note: {
    backgroundColor: "white",
    minHeight: 250,
    padding: 16,
    borderRadius: 25,
    marginBottom: 200,
  },

  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#20A7FF",
    padding: 16,
    borderRadius: 25,
  },
});

export default CreateNoteScreen;
