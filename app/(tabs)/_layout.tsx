import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="auto-donate" />
      <Tabs.Screen name="round-up" />
      <Tabs.Screen name="portfolio" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabsLayout;
