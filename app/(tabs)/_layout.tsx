import { Tabs } from "expo-router";
import { colors } from "../../theme/colors";
import { BOTTOM_NAV_HEIGHT, PLATFORM_IOS } from "../../theme/dimentions";
import { scale } from "../../theme/scale";
import TabItem from "../../components/tab-item";
import * as icons from "../../constants/icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.pallete.primary,
        tabBarInactiveTintColor: colors.pallete.grey,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: scale(20),
          backgroundColor: colors.pallete.white,
          borderTopEndRadius: scale(20),
          borderTopLeftRadius: scale(20),
          height: PLATFORM_IOS ? BOTTOM_NAV_HEIGHT : scale(80),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabItem
              icon={icons.HomeIcon}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="auto-donate"
        options={{
          title: "Auto Donate",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabItem
              icon={icons.AutoUpdateIcon}
              color={color}
              name="Auto Donate"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="round-up"
        options={{
          title: "Round Up",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabItem
              icon={icons.RoundUpIcon}
              color={color}
              name="Round Up"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabItem
              icon={icons.PortfolioIcon}
              color={color}
              name="Portfolio"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabItem
              icon={icons.ProfileIcon}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
