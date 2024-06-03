import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { scale } from "../../theme/scale";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/typography";
import { Calculator } from "../../types";

interface CalculatorCardProps {
  item: Calculator;
}

const CalculatorCard: FC<CalculatorCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="contain" style={styles.imgStyles} />
      <Text style={styles.titleTxt}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale(106),
    paddingVertical: scale(10),
    borderRadius: scale(15),
    backgroundColor: colors.pallete.white,
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyles: {
    width: scale(50),
    height: scale(50),
  },
  titleTxt: {
    marginTop: scale(4),
    textAlign: "center",
    fontSize: scale(17),
    color: colors.pallete.dark_gray,
    fontFamily: fonts["ProximaNova-Semibold"],
  },
});

export default CalculatorCard;
