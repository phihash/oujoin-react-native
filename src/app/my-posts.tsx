import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function MyPosts() {
  return (
    <>
      <Stack.Screen options={{ title: "自分の投稿" }} />
      <View style={styles.container}>
        <Text>自分の投稿</Text>
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
