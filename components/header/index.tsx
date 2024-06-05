import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { scale } from "../../theme/scale";
import { fonts } from "../../theme/typography";
import { colors } from "../../theme/colors";
import LogoIcon from "../../assets/icons/logo-icon.svg";
import SearchIcon from "../../assets/icons/search-icon.svg";

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBgStyles}
        resizeMode="cover"
        source={require("../../assets/imgs/logo-bg-img.png")}
      >
        <View style={styles.logoContainer}>
          <LogoIcon />
        </View>
      </ImageBackground>

      <View style={styles.contentContainer}>
        <View style={styles.textsContainer}>
          <Text style={styles.primaryText}>Salam,</Text>
          <Text style={styles.secondaryText}>Ahmed</Text>
        </View>

        <SearchIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingEnd: scale(20),
  },
  imgBgStyles: {
    width: scale(160),
    justifyContent: "center",
    height: scale(125),
  },
  logoContainer: {
    paddingTop: scale(10),
    paddingLeft: scale(18),
  },
  contentContainer: {
    flexDirection: "row",
    gap: scale(20),
    marginTop: scale(40),
  },
  textsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(6),
  },
  primaryText: {
    fontFamily: fonts["Poppins-ExtraBold"],
    fontSize: scale(25),
    color: colors.pallete.white,
  },
  secondaryText: {
    fontFamily: fonts["ProximaNova-Bold"],
    fontSize: scale(25),
    color: colors.pallete.white,
  },
});

export default Header;
