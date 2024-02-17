import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.parentContainer} >
          <Text style={styles.appHeadingText} >Learning React Native</Text>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: "#414141",
    height: "auto",
  },
  appHeadingText: {
    textAlign: "center",
    paddingVertical: 5,
    fontSize: 23,
    lineHeight: 27,
    fontWeight: "700",
    color: "#fff"
  }
})

export default App;
