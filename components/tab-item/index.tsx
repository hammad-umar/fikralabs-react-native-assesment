import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { scale } from "../../theme/scale";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/typography";

interface TabItemProps {
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  color: string;
  name: string;
  focused: boolean;
}

const TabItem: FC<TabItemProps> = (props) => {
  const { Icon, name, color, focused } = props;

  return (
    <View style={styles.container}>
      <Icon fill={color} stroke={color} />
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
