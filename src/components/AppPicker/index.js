import {
  Button,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import defaultStyles from "../../config/style";
import AppText from "../AppText";
import PickerItem from "../PickerItem";
const AppPicker = ({
  icon,
  items,
  onSelectItem,
  selectedItem,
  placeholder,
  ...otherProps
}) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModal(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={20}
              color={colors.medium}
            />
          )}

          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modal} animationType="slide">
        <Button title="close" onPress={() => setModal(false)} />

        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModal(false);
                onSelectItem(item);
             
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  text: { flex: 1 },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
});
