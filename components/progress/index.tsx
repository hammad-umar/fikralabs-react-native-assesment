import { StyleSheet, Text, View } from "react-native";
import { scale } from "../../theme/scale";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/typography";
import ProgressIcon from "../../assets/icons/progress-icon.svg";

const Progress = () => {
  return (
    <>
      <View style={styles.txtContainer}>
        <Text style={styles.firstTxt}>$450</Text>
        <View style={styles.iconContainer}>
          <Text style={styles.secondTxt}>2024 donation goal</Text>
          <ProgressIcon />
        </View>
        <Text style={styles.thirdTxt}>$1,000</Text>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.greenProgress} />
        <View style={styles.whiteProgress} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    borderRadius: scale(15),
    marginHorizontal: scale(20),
    backgroundColor: "#f5b167",
    height: scale(10),
  },
  greenProgress: {
    borderRadius: scale(15),
    backgroundColor: "#3B9781",
    height: scale(10),
    width: "35%",
    zIndex: 1,
  },
  whiteProgress: {
    borderRadius: scale(15),
    backgroundColor: colors.pallete.white,
    height: scale(10),
    width: "57%",
    position: "absolute",
  },
  txtContainer: {
    marginTop: scale(30),
    marginBottom: scale(5),
    marginHorizontal: scale(20),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  firstTxt: {
    color: colors.pallete.white,
    fontSize: scale(15),
    fontFamily: fonts["ProximaNova-Semibold"],
  },
  secondTxt: {
    color: colors.pallete.white,
    fontSize: scale(15),
    fontFamily: fonts["ProximaNova-Semibold"],
  },
  thirdTxt: {
    color: colors.pallete.white,
    fontSize: scale(15),
    fontFamily: fonts["ProximaNova-Semibold"],
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(5),
  },
});

export default Progress;
