import React from "react";
import { View, Text, StyleSheet } from "react-native";

function GoalItem({ title }) {
  return (
    <View style={styles.listItem}>
      <Text>{title}</Text>
    </View>
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
