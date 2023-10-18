import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StatusBarComponent from './components/status_bar'; 

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBarComponent />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
 },
 inputMethodEditor: {
  flex: 1,
  backgroundColor: 'white',
 },
 toolbar: {
  borderTopWidth: 1, 
  borderTopColor: 'rgba(0, 0, 0, 0.04)',
  backgroundColor: 'white',
 }


});
