import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AddPlanModal from "./src/component/addPlanModal";
import CheckPlanModal from "./src/component/checkPlanModal";
import DayCell from "./src/component/dayCell";
import Calendar from "react-native-minimum-calendar";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  todayButton: {
    borderColor: "#ff8ab8",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 40,
    backgroundColor: "#ff8ab8",
    justifyContent: "center",
    alignItems: "center",
  },
  todayButtonText: {
    fontSize: 12,
    color: "white",
  },
  todayButtonContainer: {
    height: 50,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingRight: 10,
  },
});

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { plans: {} };
  }

  componentWillMount() {
    this.setState({
      plans: {
        "2018-1-01": [
          { title: "work", start: "10:00", end: "11:00" },
          { title: "数学の宿題", start: "12:00", end: "14:00" },
          { title: "英語の宿題", start: "15:00", end: "15:01" },
          { title: "国語の宿題", start: "17:00", end: "17:01" },
          { title: "漢字の勉強", start: "18:30", end: "19:00" },
          { title: "漢字の勉強", start: "18:30", end: "19:00" },
          { title: "漢字の勉強", start: "18:30", end: "19:00" },
          { title: "漢字の勉強", start: "18:30", end: "19:00" },
          { title: "漢字の勉強", start: "18:30", end: "19:00" },
        ],
        "2017-11-02": [
          { title: "work", start: "12:00", end: "19:00" },
          { title: "友人Aと渋谷", start: "20:00", end: "21:00" },
        ],
        "2017-11-15": [
          { title: "work", start: "12:00", end: "19:00" },
          { title: "友人Bと新宿", start: "20:00", end: "21:00" },
        ],
      },
    });
  }

  render() {
    const today = new Date();
    return (
      <View style={styles.container}>
        <Calendar
          date={today}
          dayCell={DayCell}
          doublePressModal={AddPlanModal}
          height={515}
          holiday={"jp"}
          plans={this.state.plans}
          ref="Calendar"
          singlePressModal={CheckPlanModal}
          width={window.width}
        />
        <View style={styles.todayButtonContainer}>
          <TouchableOpacity
            onPress={() => this.refs.Calendar.goToToday()}
            style={styles.todayButton}
          >
            <Text style={styles.todayButtonText}>Today</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
