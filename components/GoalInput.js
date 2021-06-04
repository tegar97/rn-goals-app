import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
export const GoalInput = ({ addGoalHandler, openModal, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  };

  const AddGoalHandler = (enteredGoal) => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={openModal} animationType="slide">
      <View style={styles.inputCointaner}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={() => onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={() => AddGoalHandler(enteredGoal)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputCointaner: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
