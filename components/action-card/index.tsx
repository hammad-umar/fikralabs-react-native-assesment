import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Action } from "../../types";
import { scale } from "../../theme/scale";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/typography";

interface ActionCardProps {
  item: Action;
}

const ActionCard: FC<ActionCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.titleTxt}>{item.title}</Text>
        <item.Icon />
      </View>
      <Text style={styles.descriptionTxt}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(10),
    backgroundColor: colors.pallete.white,
    borderRadius: scale(15),
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleTxt: {
    fontSize: scale(16),
    color: colors.pallete.black,
    fontFamily: fonts["ProximaNova-Semibold"],
  },
  descriptionTxt: {
    paddingRight: scale(35),
    color: "#00000080",
    fontSize: scale(16),
    fontFamily: fonts["ProximaNova-Semibold"],
  },
});

export default ActionCard;
