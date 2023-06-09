import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import defaultStyles from "../../config/style";
const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text {...otherProps} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({});
