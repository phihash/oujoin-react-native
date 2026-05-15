import { View, Text, StyleSheet } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";

type Information = {
  id: string;
  slug: string;
  type_id: string;
  title: string;
  body: string;
  published_date: string;
  is_published: boolean;
  link_url: string | null;
};

const fetchInformation = async () => {
  const { data, error } = await supabase
    .from("information")
    .select("*")
    .eq("is_published", true)
    .order("published_date", { ascending: false });

  if (error) return error;
  return data;
};

export default function Infomation() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["information"],
    queryFn: fetchInformation,
  });

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <View style={styles.container}>
      <Text>本当のホーム</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
