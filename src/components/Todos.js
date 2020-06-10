import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Alert,
} from 'react-native';
import TodoItem from './todoItem';
import {axiosPost, axiosDelete, axiosPut} from '../axios/axiosFunctions';
import {axiosGet} from '../axios/axiosGet';
import {URL} from '../axios/URL';
import {Color} from '../utilities/Color';

export default function Todos() {
  const [refetch, setRefetch] = useState(false);
  let getUrl = URL(`todo`);
  const [todo, loading] = axiosGet(getUrl, refetch);

  const [text, setText] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  let [isEditIndex, setIsEditIndex] = useState(null);
  const changeHandler = val => {
    setText(val);
  };

  const submitHandler = Text => {
    axiosPost(Text), setRefetch(!refetch);
  };

  const updateHandler = Text => {
    axiosPut(isEditIndex, Text);
    setRefetch(!refetch);
  };

  const deleteHandler = item => {
    Alert.alert(
      'Confirm Delete!',
      'Are you sure to delete this todo entry',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            axiosDelete(item.id);
            setRefetch(!refetch);
          },
        },
      ],
      {cancelable: false},
    );
  };

  const editHandler = (item, index) => {
    setText(item.text);
    setIsEditIndex(item.id);
  };

  return (
    <View>
      <View style={{marginBottom: 10}}>
        <TextInput
          style={styles.input}
          placeholder="New Todo"
          value={text}
          onChangeText={changeHandler}
        />
        <Button
          onPress={
            isEdit == true
              ? () => {
                  updateHandler(text), setText(null), setIsEdit(false);
                }
              : () => {
                  submitHandler(text), setText(null);
                }
          }
          title={isEdit == false ? 'add todo' : 'Update todo'}
          color={Color.header}
        />
      </View>
      {loading == false ? (
        <FlatList
          data={todo}
          renderItem={({item, index}) => (
            <TodoItem
              item={item}
              deleteHandler={() => deleteHandler(item)}
              editHandler={() => {
                editHandler(item, index), setIsEdit(true);
              }}
            />
          )}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
