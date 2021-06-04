import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import { GoalInput } from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [openModal, setModal] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoal((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString, value: goalTitle },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModal(true)} />
      <GoalInput openModal={openModal} addGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            removeGoalHandler={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
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
