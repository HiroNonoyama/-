import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

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
    flex: 2,
    justifyContent: "flex-end",
  },
  upPlan: {
    width: "100%",
    paddingLeft: 2,
    alignItems: "flex-start",
    flex: 3,
    justifyContent: "flex-start",
    overflow: "hidden",
  },
});

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

export default class Day extends PureComponent {
  constructor(props) {
    super(props);
    this.tapCount = 0;
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  renderUpPlan() {
    if (this.props.plan) {
      return this.props.plan.up.slice(0, 3).map((plan, index) => {
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

  renderBottomPlan() {
    if (this.props.plan) {
      return this.props.plan.bottom.slice(0, 2).map((plan, index) => {
        return (
          <Text
            style={[styles.planText, color("crimson")]}
            key={index}
            numberOfLines={1}
          >
            {plan.title}
          </Text>
        );
      });
    }
  }

  handleOnPress() {
    if (!this.tapCount) {
      ++this.tapCount;
      setTimeout(() => {
        this.props.singlePress({
          day: `${this.props.year}/${this.props.month}/${this.props.day}`,
          plans: this.props.plan,
        });
        this.tapCount = 0;
      }, 300);
    } else {
      this.props.doublePress({
        day: `${this.props.year}/${this.props.month}/${this.props.day}`,
      });
      this.props.singlePress();
      return;
    }
  }

  render() {
    return this.props.day ? (
      <TouchableOpacity
        style={[styles.container, holidayStyle(this.props.isHoliday).container]}
        onPress={this.handleOnPress}
      >
        <View
          style={[
            styles.date,
            {
              backgroundColor: this.props.isToday ? "dodgerblue" : null,
              borderColor: this.props.isToday ? "dodgerblue" : null,
              borderWidth: this.props.isToday ? 1 : 0,
            },
          ]}
        >
          <Text
            style={[
              [holidayStyle(this.props.isHoliday).dateText],
              { color: this.props.isToday ? "white" : "black" },
            ]}
          >
            {this.props.day}
          </Text>
        </View>
        <View style={styles.plans}>
          <View style={styles.upPlan}>{this.renderUpPlan()}</View>
          <View style={styles.bottomPlan}>{this.renderBottomPlan()}</View>
        </View>
      </TouchableOpacity>
    ) : (
      <View style={styles.container} />
    );
  }
}
