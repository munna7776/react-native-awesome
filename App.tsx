import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
          <Text style={styles.appHeadingText} >Learning React Native</Text>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appHeadingText: {
    textAlign: "center",
    paddingVertical: 5,
    fontSize: 23,
    lineHeight: 27,
    fontWeight: "700"
  }
})

export default App;
