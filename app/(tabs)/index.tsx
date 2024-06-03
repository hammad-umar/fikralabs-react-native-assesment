import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { scale } from "../../theme/scale";
import { SCREEN_WIDTH } from "../../theme/dimentions";
import { ACTIONS_DATA } from "../../data/actions";
import Header from "../../components/header";
import ActionCard from "../../components/action-card";
import { colors } from "../../theme/colors";
import Progress from "../../components/progress";
import { CALCULATORS_DATA } from "../../data/calculators";
import { fonts } from "../../theme/typography";
import CalculatorCard from "../../components/calculator-card";
import { EMERGENCY_DATA } from "../../data/emergency";
import EmergencyCard from "../../components/emergency-card";
import { EVENTS_DATA } from "../../data/events";
import EventCard from "../../components/event-card";
import { FEATURED_DATA } from "../../data/featured";
import FeaturedCard from "../../components/featured-card";
import ArrowIcon from "../../assets/icons/arrow-icon.svg";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <ImageBackground
          style={styles.imgBgStyles}
          resizeMode="cover"
          source={require("../../assets/imgs/primary-bg-img.png")}
        >
          <Header />
          <Progress />
          <FlatList
            style={styles.actionCardListStyles}
            contentContainerStyle={styles.actionCardListGap}
            columnWrapperStyle={styles.actionCardListGap}
            numColumns={2}
            data={ACTIONS_DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ActionCard item={item} />}
          />
        </ImageBackground>

        <View style={styles.calculatorContainer}>
          <Text style={styles.calculatorTxt}>Calculators</Text>
          <FlatList
            bounces
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.calculatorListStyles}
            contentContainerStyle={styles.calculatorListContentContainerStyles}
            data={CALCULATORS_DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CalculatorCard item={item} />}
          />
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.listTxt}>Emergency Response</Text>
          <FlatList
            bounces
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.listStyles}
            contentContainerStyle={styles.listContentContainerStyles}
            data={EMERGENCY_DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <EmergencyCard item={item} />}
          />
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.listTxt}>Featured Causes</Text>
          <FlatList
            bounces
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.listStyles}
            contentContainerStyle={styles.listContentContainerStyles}
            data={FEATURED_DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <FeaturedCard item={item} />}
          />
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.listTxt}>Events</Text>
          <FlatList
            bounces
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.listStyles}
            contentContainerStyle={styles.listContentContainerStyles}
            data={EVENTS_DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <EventCard item={item} />}
          />
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnLabel}>Frequently Asked Questions</Text>
          <ArrowIcon />
        </TouchableOpacity>

        <TouchableOpacity style={styles.txtContainer}>
          <Text style={styles.txt}>Volunteer with us</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBgStyles: {
    flex: 1,
    width: "100%",
    height: SCREEN_WIDTH * 1.35,
  },
  actionCardListStyles: {
    paddingHorizontal: scale(20),
    marginTop: scale(20),
  },
  actionCardListGap: {
    gap: scale(20),
  },
  calculatorContainer: {
    marginTop: scale(-135),
  },
  calculatorTxt: {
    paddingHorizontal: scale(20),
    marginBottom: scale(15),
    fontSize: scale(18),
    color: colors.pallete.black,
    fontFamily: fonts["ProximaNova-Semibold"],
  },
  calculatorListStyles: {
    paddingStart: scale(20),
  },
  calculatorListContentContainerStyles: {
    gap: scale(20),
  },
  listContainer: {
    marginTop: scale(22),
  },
  listTxt: {
    marginBottom: scale(15),
    paddingHorizontal: scale(20),
    fontSize: scale(18),
    color: colors.pallete.dark_gray,
    fontFamily: fonts["ProximaNova-Semibold"],
  },
  listStyles: {
    paddingStart: scale(20),
  },
  listContentContainerStyles: {
    gap: scale(20),
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: scale(20),
    borderRadius: scale(15),
    marginVertical: scale(30),
    backgroundColor: colors.pallete.secondary,
    marginHorizontal: scale(20),
  },
  btnLabel: {
    color: colors.pallete.white,
    fontSize: scale(17),
    fontFamily: fonts["ProximaNova-Semibold"],
  },
  txtContainer: {
    alignItems: "center",
    marginBottom: scale(30),
  },
  txt: {
    color: colors.pallete.primary,
    fontSize: scale(16),
    fontFamily: fonts["ProximaNova-Semibold"],
  },
});

export default HomeScreen;
