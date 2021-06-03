import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
export const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  };

  return (
    <View style={styles.inputCointaner}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add" onPress={() => addGoalHandler(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputCointaner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
