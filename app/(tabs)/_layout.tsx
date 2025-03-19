import { Tabs } from "expo-router";
import { Text, Image } from "react-native";
import icons from "@/constants/icons";
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ffa001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 85,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              className="w-6 h-6"
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{ color }}
              className={`text-sm mt-1 ${
                focused ? "font-psemibold" : "font-pregular"
              }`}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.bookmark}
              resizeMode="contain"
              className="w-6 h-6"
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{ color }}
              className={`text-sm mt-1 ${
                focused ? "font-psemibold" : "font-pregular"
              }`}
            >
              Bookmark
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.plus}
              resizeMode="contain"
              className="w-6 h-6"
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{ color }}
              className={`text-sm mt-1 ${
                focused ? "font-psemibold" : "font-pregular"
              }`}
            >
              Create
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.profile}
              resizeMode="contain"
              className="w-6 h-6"
              style={{ tintColor: color }}
            />
          ),
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{ color }}
              className={`text-sm mt-1 ${
                focused ? "font-psemibold" : "font-pregular"
              }`}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
