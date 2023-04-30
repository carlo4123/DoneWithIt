import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessages from "../ErrorMessages";
import { useFormikContext } from "formik";
const AppFormField = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
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
