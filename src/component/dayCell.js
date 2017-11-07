import React, { PureComponent } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const color = color => ({ color });

const todayText = boolean => {
  if (boolean) {
    return {
      text: { color: "white" },
      date: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: "4",
      },
    };
  }
};

const holidayStyle = isHoliday => ({
  container: {
    backgroundColor: isHoliday === -1 ? "white" : "aliceblue",
  },
  dateText: {
    color: isHoliday === -1 ? "black" : "black",
  },
});

const todayStyle = isToday => {
  if (isToday) {
    return {
      // view: { backgroundColor: "white" },
      text: { color: "#ff8ab8" },
    };
  }
  return {};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRightColor: "gainsboro",
    borderRightWidth: 1,
  },
  date: {
    height: 20,
    width: 20,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 1,
  },
  plans: {
    flex: 3,
  },
  planText: {
    fontSize: 8,
  },
  bottomPlan: {
    width: "100%",
    alignItems: "center",
    height: 8,
    justifyContent: "flex-end",
  },
  upPlan: {
    width: "100%",
    paddingLeft: 2,
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "flex-start",
    overflow: "hidden",
  },
});

export default class DayCell extends PureComponent {
  constructor(props) {
    super(props);
    this.renderUpPlan = this.renderUpPlan.bind(this);
    this.renderBottomPlan = this.renderBottomPlan.bind(this);
  }

  renderUpPlan(plans) {
    if (plans) {
      return plans.slice(0, 5).map((plan, index) => {
        return (
          <Text
            numberOfLines={1}
            key={index}
            style={[styles.planText, color("black")]}
          >
            {plan.title}
          </Text>
        );
      });
    }
  }

  renderBottomPlan(plans) {
    if (plans) {
      return plans.slice(0, 2).map((plan, index) => {
        return (
          <Text
            style={[styles.planText, color("crimson")]}
            key={index}
            numberOfLines={1}
          >
            {plan.start}~{plan.end}
          </Text>
        );
      });
    }
  }

  render() {
    let privatePlans = [];
    let workPlans = [];
    if (this.props.plans) {
      this.props.plans.map(plan => {
        if (plan.title === "work") {
          workPlans.push(plan);
        } else {
          privatePlans.push(plan);
        }
      });
    }
    return this.props.day ? (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.handleOnPress}
      >
        <View
          style={[
            styles.date,
            // {
            //   backgroundColor: this.props.isToday ? "rgb(255,192,203)" : null,
            //   borderColor: this.props.isToday ? "rgb(255,192,203)" : null,
            //   borderWidth: this.props.isToday ? 1 : 0,
            // },
          ]}
        >
          <Text
            style={[
              [holidayStyle(this.props.isHoliday).dateText],
              ,
              todayStyle(this.props.isToday).text,
            ]}
          >
            {this.props.day}
          </Text>
        </View>
        <View style={styles.plans}>
          <View style={styles.upPlan}>{this.renderUpPlan(privatePlans)}</View>
          <View style={styles.bottomPlan}>
            {this.renderBottomPlan(workPlans)}
          </View>
        </View>
      </TouchableOpacity>
    ) : (
      <View style={styles.container} />
    );
  }
}
