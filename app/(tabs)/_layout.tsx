import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';

export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: '#3C6FE6', 
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home", 
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="receipt" 
        options={{ 
          title: "Receipts",
          tabBarIcon: ({ color }) => (
            <Entypo name="text-document" size={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="link" 
        options={{ 
          title: "Link",
          tabBarIcon: ({ color }) => (
            <Entypo name="link" size={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="survey" 
        options={{ 
          title: "Survey",
          tabBarIcon: ({ color }) => (
            <Entypo name="clipboard" size={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="rewards" 
        options={{ 
          title: "Rewards",
          tabBarIcon: ({ color }) => (
            <Entypo name="trophy" size={24} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}