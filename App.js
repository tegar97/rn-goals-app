import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TextInput, View ,Button} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View  style={{flexDirection: 'row',justifyContent: 'space-between',alignContent: 'center'}}>
        <TextInput  placeholder="Course Goal" style={{width: '70%',borderColor: 'black',borderWidth: 1,padding: 10}} />
          <Button  title="Add"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
