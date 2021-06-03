import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);
  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  };

  const addGoalHandler = () => {
    setCourseGoal((currentGoals) => [...currentGoals, enteredGoal]);
  };
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.inputCointaner}>
          <TextInput
            placeholder="Course Goal"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <Button title="Add" onPress={addGoalHandler} />
        </View>

        <View>
          {courseGoal.map((goal, index) => (
            <ScrollView>
              <View style={styles.listItem}>
                <Text key={index}>{goal}</Text>
              </View>
            </ScrollView>
          ))}
        </View>
      </View>
    </ScrollView>

    ///lern flexx
    // <View style={{padding: 50,width: '80%',height:300,flexDirection: 'row' ,alignItems: 'stretch',justifyContent: 'space-around'}}>
    //     <View style={{backgroundColor: 'red' ,justifyContent: 'center',alignItems: 'center'}}>
    //       <Text>1</Text>
    //     </View>
    //     <View style={{backgroundColor: 'blue' ,justifyContent: 'center',alignItems: 'center',flex: 1}}>
    //       <Text>2</Text>
    //     </View>
    //     <View style={{backgroundColor: 'green' ,justifyContent: 'center',alignItems: 'center',flex: 2}}>
    //       <Text>3</Text>
    //     </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});
