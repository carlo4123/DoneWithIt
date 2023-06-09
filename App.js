import {
  StyleSheet,
  Switch,
  SwitchComponent,
  Text,
  TextInput,
  View,
} from "react-native";
import MessagesScreen from "./src/screens/MessagesScreen";
import { ListItem } from "./src/components/lists";
import ListingEditScreen from "./src/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen></ListingEditScreen>;
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
