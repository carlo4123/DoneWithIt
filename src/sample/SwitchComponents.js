import { StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";

const SwitchComponents = () => {
  const [isNew, setIsNew] = useState(false);
  return (
    <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
  );
};

export default SwitchComponents;

const styles = StyleSheet.create({});
