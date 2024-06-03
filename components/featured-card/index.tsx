import { FC } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Event } from "../../types";
import { colors } from "../../theme/colors";
import { scale } from "../../theme/scale";
import { fonts } from "../../theme/typography";

interface FeaturedCardProps {
  item: Event;
}

const FeaturedCard: FC<FeaturedCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imgStyles} resizeMode="cover" source={item.img} />
      <ImageBackground
        style={styles.imgBgStyles}
        resizeMode="cover"
        source={require("../../assets/imgs/secondary-curve-bg.png")}
      >
        <Text style={styles.titleTxt}>{item.title}</Text>
      </ImageBackground>
      <View style={styles.iconContainer}>
        <Text style={styles.subtitleTxt}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: colors.pallete.white,
    borderRadius: scale(20),
  },
  imgStyles: {
    width: 150,
    height: scale(180),
    borderRadius: scale(20),
  },
  imgBgStyles: {
    height: 60,
    marginTop: scale(-50),
  },
  titleTxt: {
    paddingHorizontal: scale(20),
    marginTop: scale(32),
    fontSize: scale(13),
    color: colors.pallete.light_dark,
    fontFamily: fonts["ProximaNova-Semibold"],
  },
  iconContainer: {
    paddingLeft: scale(20),
    paddingBottom: scale(10),
    marginTop: scale(-12),
    flexDirection: "row",
    alignItems: "center",
    gap: scale(6),
  },
  subtitleTxt: {
    color: colors.pallete.light_dark,
    fontSize: scale(13),
    fontFamily: fonts["ProximaNova-Semibold"],
  },
});

export default FeaturedCard;
