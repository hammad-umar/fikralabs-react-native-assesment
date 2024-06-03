import { FC } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Event } from "../../types";
import { colors } from "../../theme/colors";
import { scale } from "../../theme/scale";
import { fonts } from "../../theme/typography";

interface EventCardProps {
  item: Event;
}

const EventCard: FC<EventCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imgStyles} resizeMode="cover" source={item.img} />
      <ImageBackground
        style={styles.imgBgStyles}
        resizeMode="cover"
        source={require("../../assets/imgs/curve-main-bg-img.png")}
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
    width: 300,
    backgroundColor: colors.pallete.white,
    borderRadius: scale(20),
  },
  imgStyles: {
    width: 300,
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
    fontSize: scale(16),
    color: colors.pallete.light_dark,
    fontFamily: fonts["ProximaNova-Semibold"],
  },
  iconContainer: {
    paddingHorizontal: scale(20),
    paddingBottom: scale(20),
    marginTop: scale(-5),
    flexDirection: "row",
    alignItems: "center",
    gap: scale(6),
  },
  subtitleTxt: {
    color: colors.pallete.light_dark,
    fontSize: scale(16),
    fontFamily: fonts["ProximaNova-Semibold"],
  },
});

export default EventCard;
