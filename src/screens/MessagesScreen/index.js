import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  ListItem,
  ListItemSeperator,
  ListItemDeleteAction,
} from "../../components/lists";
import Screen from "../../components/screen";

import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
const initialMessage = [
  {
    id: 1,
    title: "Mosh Hamedami",
    description: "Hey! is this item available?",
    image: require("../../Assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Mosh Hamedami",
    description: "Hey! is this item available? ",
    image: require("../../Assets/mosh.jpg"),
  },
];
const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    console.log(message);

    setMessages(messages.filter((m) => m.id !== message.id));
  };

  const renderRightActions = (item) => {
    return <ListItemDeleteAction onPress={() => handleDelete(item)} />;
  };
  return (
    <Screen>
      <GestureHandlerRootView>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id}
          renderItem={({ item }) => (
            <Swipeable renderRightActions={() => renderRightActions(item)}>
              <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log("Message Selected", item)}
              />
            </Swipeable>
          )}
          ItemSeparatorComponent={() => <ListItemSeperator />}
          refreshing={refreshing}
          onRefresh={() =>
            setMessages([
              {
                id: 2,
                title: "T2",
                description: "D2",
                image: require("../../Assets/mosh.jpg"),
              },
            ])
          }
        />
      </GestureHandlerRootView>
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
