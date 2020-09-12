/**
 * Tela de modelo com um componente de modelo
 *
 * @author            João Leão
 * @example           <ModelScreen/>
 */

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AddItemComponent from '../components/AddItemComponent';
import ListComponent from '../components/ListComponent';

export default function ModelScreen() {
  const [selected, setSelected] = useState([
    { name: 'Youtube', selected: false },
    { name: 'Facebook', selected: false },
    { name: 'Instagram', selected: false },
    { name: 'WhatsApp', selected: false },
  ]);

  function newItem(name) {
    setSelected([{ name: name, selected: false }, ...selected]);
  }

  return (
    <View style={styles.screen}>
      <ListComponent list={selected} />
      <AddItemComponent onPress={newItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
