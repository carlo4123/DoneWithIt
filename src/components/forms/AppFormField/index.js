import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "../../AppTextInput";
// import ErrorMessages from "../../ErrorMessages";
import ErrorMessages from "../ErrorMessages";
import { useFormikContext } from "formik";
const AppFormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      {<ErrorMessages error={errors[name]} visible={touched[name]} />}
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
