import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputCointaner}>
        <TextInput placeholder="Course Goal" style={styles.input} />
        <Button title="Add" />
      </View>
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
  inputCointaner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  input: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
