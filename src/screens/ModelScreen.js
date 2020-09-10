/**
 * Tela de modelo com um componente de modelo
 *
 * @author            João Leão
 * @example           <ModelScreen/>
 */

import React from "react";
import { StyleSheet, View } from "react-native";

import ModelComponent from "../components/ModelComponent";

export default function ModelScreen() {
  return (
    <View style={styles.screen}>
      <ModelComponent text="Hello World" />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
