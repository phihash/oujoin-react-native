import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Bookmarks() {
  return (
    <>
      <Stack.Screen options={{ title: "ブックマーク" }} />
      <View style={styles.container}>
        <Text>ブックマーク</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
