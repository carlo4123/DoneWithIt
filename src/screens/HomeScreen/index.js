import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../../components/Button";

const HomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../../Assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../Assets/logo-red.png")}
        />
        <Text style={styles.tagline}>Sell What You Don`t Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="LOGIN" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },

  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});
