import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../components/screen";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/Button";
import { Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
import AppFormField from "../../components/AppFormField.js";
import SubmitButton from "../../components/SubmitButton";
import AppForm from "../../components/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../Assets/logo-red.png")}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          name="email"
          autoCorrect={false}
          keyboardType="email-address"
          icon="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <View style={styles.buttonWrapper}>
          <SubmitButton title="login" />
        </View>
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  buttonWrapper: {
    marginTop: 15,
  },
});
