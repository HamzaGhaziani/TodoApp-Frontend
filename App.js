/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import Todos from './src/components/Todos';
import Header from './src/components/header';
import {Color} from './src/utilities/Color';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor={Color.statusBar} />
      <Header />
      <Todos />
    </View>
  );
};

export default App;
