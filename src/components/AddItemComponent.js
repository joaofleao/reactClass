/**
 * Componente de modelo que cria um texto
 *
 * @author           João Leão
 * @param text       Texto principal do componente
 * @example          <ModelComponent
 *                     text={"teste"}
 *                   />
 */

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function AddItemComponent({ onPress }) {
  const [name, setName] = useState('');

  function handleAdd() {
    onPress(name);
    setName('');
  }
  return (
    <View style={styles.input}>
      <TextInput
        value={name}
        placeholder="Adicionar Item"
        onChangeText={text => setName(text)}
      />
      <TouchableOpacity onPress={e => handleAdd()}>
        <Icon name="plus" size={25} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    elevation: 5,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: '80%',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
