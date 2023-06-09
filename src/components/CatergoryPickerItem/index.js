import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "../Icon";
import AppText from "../AppText";

//Picker Item
const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />

      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
