import {
  NativeTabs,
  Icon,
  Label,
  VectorIcon,
} from "expo-router/unstable-native-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
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
  );
}
