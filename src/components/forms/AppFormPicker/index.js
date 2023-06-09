import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppPicker from "../../AppPicker";
import ErrorMessages from "../ErrorMessages";
import { useFormikContext } from "formik";
const AppFormPicker = ({
  items,
  name,
  numberOfColumns = 1,
  PickerItemComponent,
  placeholder,
  width,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        width={width}
        items={items}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
