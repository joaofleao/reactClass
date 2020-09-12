/**
 * Componente de modelo que cria um texto
 *
 * @author           João Leão
 * @param text       Texto principal do componente
 * @example          <ModelComponent
 *                     text={"teste"}
 *                   />
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ItemListComponent from '../components/ItemListComponent';

export default function ListComponent({ list }) {
  function renderList() {
    return list.map(item => (
      <ItemListComponent key={item.name} text={item.name} />
    ));
  }

  return <View style={styles.component}>{renderList()}</View>;
}

const styles = StyleSheet.create({
  component: {
    width: '80%',
  },
});
