import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../components/screen";
import { FlatList } from "react-native";
import Card from "../../components/Card";
import colors from "../../config/colors";

const listing = [
  {
    id: 1,
    title: "red jacket for sale",
    price: 100,
    image: require("../../Assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "couch in great",
    price: 100,
    image: require("../../Assets/couch.jpg"),
  },
];

const ListingScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
