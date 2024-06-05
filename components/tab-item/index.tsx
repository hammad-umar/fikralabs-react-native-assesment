import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { scale } from "../../theme/scale";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/typography";
import * as icons from "../../constants/icons";

interface TabItemProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabItem: FC<TabItemProps> = (props) => {
  const { icon, name, color, focused } = props;

  return (
    <View style={styles.container}>
      {name === "Home" && focused ? (
        <Image
          style={{ width: scale(23), height: scale(23) }}
          source={icons.HomeFocusedIcon}
          resizeMode="contain"
        />
      ) : (
        <Image
          style={{ width: scale(23), height: scale(23) }}
          source={icon}
          resizeMode="contain"
          tintColor={color}
        />
      )}

      <Text
        style={
          !focused
            ? { ...styles.item, fontFamily: fonts["ProximaNova-Light"] }
            : { ...styles.item, fontFamily: fonts["ProximaNova-Bold"] }
        }
      >
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    marginTop: scale(8),
    fontSize: scale(14),
    color: colors.pallete.light_dark,
  },
});

export default TabItem;
