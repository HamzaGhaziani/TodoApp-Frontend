import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../utilities/Color';

export default function todoItem({item, deleteHandler, editHandler}) {
  return (
    <View style={styles.view}>
      <Text style={styles.item}>{item.text}</Text>
      <View>
        <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() => editHandler(item.key)}>
          <Text style={{color: Color.black}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => deleteHandler(item.key)}>
          <Text style={{color: Color.white}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  item: {
    marginLeft: 10,
    marginRight: 5,
    width: 235,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 5,
    borderColor: Color.header,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  buttonEdit: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    width: 70,
    height: 40,
    borderColor: 'lightgray',
    backgroundColor: 'lightgray',
  },
  buttonDelete: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    width: 70,
    height: 40,
    borderColor: Color.header,
    backgroundColor: Color.header,
  },
});
