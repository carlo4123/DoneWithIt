import {
  StyleSheet,
  Switch,
  SwitchComponent,
  Text,
  TextInput,
  View,
} from "react-native";

import Screen from "./src/components/screen";
import AppTextInput from "./src/components/AppTextInput";
import { useState } from "react";
import SwitchComponents from "./src/sample/SwitchComponents";
import AppPicker from "./src/components/AppPicker";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

export default function App() {
  return (
    <Screen style={styles.screen}>
      <AppPicker icon="apps" placeholder="picker" />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
