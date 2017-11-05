import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import CalendarWrapper from "./src/container/calendarWrapper";
import AddPlanModal from "./src/component/addPlanModal";
import CheckPlanModal from "./src/component/checkPlanModal";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  todayButton: {
    borderColor: "dodgerblue",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 40,
    backgroundColor: "dodgerblue",
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
        2017: {
          11: {
            1: {
              bottom: [
                { title: "12~15", start: "12:00", end: "18:00" },
                { title: "12~15", start: "12:00", end: "18:00" },
                { title: "12~15", start: "12:00", end: "18:00" },
              ],
              up: [
                { title: "予定がある", start: "19:00", end: "21:00" },
                { title: "play with xxx", start: "19:00", end: "21:00" },
                { title: "play with xxx", start: "19:00", end: "21:00" },
                {
                  title:
                    "play with xasdfasdf;asfasdfasdfasdfasdfasdfasdfasaskdfj;aksjdf\nxx",
                  start: "19:00",
                  end: "21:00",
                },
                {
                  title:
                    "play with xasdfasdf;asfasdfasdfasdfasdfasdfasdfasaskdfj;aksjdf\nxx",
                  start: "19:00",
                  end: "21:00",
                },
                {
                  title:
                    "play with xasdfasdf;asfasdfasdfasdfasdfasdfasdfasaskdfj;aksjdf\nxx",
                  start: "19:00",
                  end: "21:00",
                },
              ],
            },
            5: {
              bottom: [{ title: "12~15", start: "12:00", end: "18:00" }],
              up: [
                { title: "play with xxx", start: "19:00", end: "21:00" },
                { title: "play with xxssx", start: "22:30", end: "24:00" },
                { title: "play with xxx", start: "19:00", end: "21:00" },
                { title: "play with xxssx", start: "22:30", end: "24:00" },
              ],
            },
          },
        },
      },
    });
  }

  render() {
    const today = new Date();
    return (
      <View style={styles.container}>
        <CalendarWrapper
          date={today}
          /* dayCell={} */
          doublePressModal={AddPlanModal}
          height={515}
          holiday={"jp"}
          plans={this.state.plans}
          ref="CalendarWrapper"
          singlePressModal={CheckPlanModal}
          width={window.width}
        />
        <View style={styles.todayButtonContainer}>
          <TouchableOpacity
            onPress={() => this.refs.CalendarWrapper.goToToday()}
            style={styles.todayButton}
          >
            <Text style={styles.todayButtonText}>Today</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
