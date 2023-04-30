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
import LoginScreen from "./src/screens/LoginScreen";

export default function App() {
  return <LoginScreen />;
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
