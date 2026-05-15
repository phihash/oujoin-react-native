import {
  NativeTabs,
  Icon,
  Label,
  VectorIcon,
} from "expo-router/unstable-native-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function TabLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <Label hidden />
          <Icon src={<VectorIcon family={Ionicons} name="home-outline" />} />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="information">
          <Label hidden />
          <Icon src={<VectorIcon family={Ionicons} name="settings-outline" />} />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="settings">
          <Label hidden />
          <Icon src={<VectorIcon family={Ionicons} name="person-outline" />} />
        </NativeTabs.Trigger>
      </NativeTabs>
    </QueryClientProvider>
  );
}
