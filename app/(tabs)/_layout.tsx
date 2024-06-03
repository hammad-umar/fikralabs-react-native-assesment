import { Tabs } from "expo-router";
import { colors } from "../../theme/colors";
import { BOTTOM_NAV_HEIGHT } from "../../theme/dimentions";
import { scale } from "../../theme/scale";
import HomeIcon from "../../assets/icons/home-icon.svg";
import AutoUpdateIcon from "../../assets/icons/auto-update-icon.svg";
import RoundUpIcon from "../../assets/icons/round-up-icon.svg";
import PortfolioIcon from "../../assets/icons/portfolio-icon.svg";
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import TabItem from "../../components/tab-item";

const TabsLayout = () => {
  return (
    <>
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
            height: BOTTOM_NAV_HEIGHT,
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
                Icon={HomeIcon}
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
                Icon={AutoUpdateIcon}
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
                Icon={RoundUpIcon}
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
                Icon={PortfolioIcon}
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
                Icon={ProfileIcon}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
