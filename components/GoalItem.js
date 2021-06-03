import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function GoalItem({ title }) {
  return (
    <TouchableOpacity onPress={() => console.log("sdadasd")}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});
export default GoalItem;
