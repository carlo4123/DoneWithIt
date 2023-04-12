import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import defaultStyles from "../../config/style";
const AppText = ({ children, style }) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({});
