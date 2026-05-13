import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import Auth from "./components/Auth";
import { View, Text } from "react-native";
import { JwtPayload } from "@supabase/supabase-js";

export default function App() {
  const [claims, setClaims] = useState<JwtPayload | null>(null);

  useEffect(() => {
    // 現在のログイン情報を取得
    supabase.auth.getClaims().then(({ data }) => {
      setClaims(data?.claims ?? null);
    });

    // ログイン状態が変わった（ログイン・ログアウトした）ら情報を更新
    supabase.auth.onAuthStateChange(() => {
      supabase.auth.getClaims().then(({ data }) => {
        setClaims(data?.claims ?? null);
      });
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {/* ログインしていなければ Auth コンポーネントを表示 */}
      <Auth />
      {/* ログインしていたらユーザーの ID (sub) を表示 */}
      {claims && (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          User ID: {claims.sub}
        </Text>
      )}
    </View>
  );
}
