import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import colors from "../../config/colors";
import AppText from "../AppText";
const Card = ({ title, subTitle, image }) => {
  console.log(image);
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />

      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
