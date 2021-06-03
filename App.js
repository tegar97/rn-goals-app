import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TextInput, View ,Button} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View >
        <TextInput placeholder="Course Goal" style={{borderColor: 'black',borderBottomWidth: 1,padding: 10}} />
        <Button title="Add"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
