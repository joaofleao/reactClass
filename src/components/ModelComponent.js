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

export default function ModelComponent({ text }) {
  return (
    <View style={styles.component}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {},
});
