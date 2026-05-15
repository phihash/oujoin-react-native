import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, StyleSheet } from "react-native";

function MenuItem({ label }: { label: string }) {
  return (
    <>
      <View style={styles.menuItem}>
        <Text style={styles.menuLabel}>{label}</Text>
        <Ionicons name="chevron-forward" size={18} color="#aaa" />
      </View>
      <View style={styles.divider} />
    </>
  );
}

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>マイページ</Text>

      <View style={styles.section}>
        <MenuItem label="自分の投稿" />
        <MenuItem label="自分の返信" />
        <MenuItem label="ブックマーク" />
      </View>

      <View style={styles.section}>
        <View style={styles.menuItem}>
          <Text style={styles.logout}>ログアウト</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 72,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 32,
  },
  section: {
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  menuLabel: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    marginHorizontal: "auto",
    backgroundColor: "#e0e0e0",
    width: "90%",
  },
  logout: {
    fontSize: 16,
    color: "#e74c3c",
  },
});
