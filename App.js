import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { GoalInput } from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoal((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString, value: goalTitle },
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      ></FlatList>
    </View>

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
});
