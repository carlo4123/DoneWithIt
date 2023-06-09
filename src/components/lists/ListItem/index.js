import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
} from "react-native";
import React from "react";
import AppText from "../../AppText";
import colors from "../../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({ title, subTitle, image, iconComponent, onPress }) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {iconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContianer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          {subTitle && (
            <AppText style={styles.subTitle} numberOfLines={2}>
              {subTitle}
            </AppText>
          )}
        </View>
        <MaterialCommunityIcons
          color={colors.medium}
          name="chevron-right"
          size={25}
        />
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContianer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
