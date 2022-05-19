/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Task from './components/Task'


let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <View style={{ display: 'flex', alignItems: 'center'}}>
        <Text style={styles.headingTodos} >Todays task</Text>
      </View>
      <View>
        <Task text={'Hello'}/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  headingTodos:{
    marginTop: 10,
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  }

});

export default App;
