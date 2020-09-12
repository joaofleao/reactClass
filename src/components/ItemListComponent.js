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
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ItemListComponent({ text }) {
  const [isSelected, selectItem] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.item, isSelected && styles.selected]}
      onPress={e => selectItem(!isSelected)}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 20,
    elevation: 5,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#5cf978',
  },
});
