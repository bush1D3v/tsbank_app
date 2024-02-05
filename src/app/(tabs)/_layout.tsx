import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabRoutesLayout(): React.JSX.Element {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Login"
        options={{
          title: "Login",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="login" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="Register"
        options={{
          title: "Register",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="add-user" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
