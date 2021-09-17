import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NoteItem = (props) => {
  const [showNote, setShowNote] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {props.title}
          </Text>
          <TouchableOpacity onPress={props.onDeleteNote}>
            <Ionicons name="trash-outline" size={24} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
        {showNote && (
          <View style={styles.note}>
            <Text style={{ fontSize: 16 }}>{props.note}</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setShowNote((prevState) => !prevState);
          }}
        >
          <Text style={{ fontSize: 16, color: "#20A7FF" }}>
            {showNote ? "Hide Note" : "Show Note"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 16,
  },

  container: {
    backgroundColor: "white",
    width: "100%",
    padding: 16,
    borderRadius: 10,
  },

  line: {
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    marginTop: 8,
    marginBottom: 16,
  },

  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  note: {
    marginBottom: 16,
  },

  button: {
    alignItems: "center",
  },
});

export default NoteItem;
