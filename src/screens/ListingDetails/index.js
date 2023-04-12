import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import AppText from "../../components/AppText";
import colors from "../../config/colors";
import ListItem from "../../components/ListItem";

const ListingDetails = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../../Assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../Assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
  },
  price: {
    color: colors.secondary,
    fontWeight: "500",
    marginVertical: 10,
  },
  detailsContainer: { padding: 20 },
  userContainer: {
    marginVertical: 40,
  },
});
