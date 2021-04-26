import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './components/TabNavigator';


export default function App() {
  return (
    <SafeAreaProvider style={styles.container} >
      <Header ></Header>
      <TabNavigator></TabNavigator>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%'
  },
});
