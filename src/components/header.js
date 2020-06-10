import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../utilities/Color';

export default function header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> TODOS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: Color.header,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
