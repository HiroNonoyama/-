import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const parette = [
  { lightskyblue: ["9:00", "12:00"] },
  { navajowhite: ["9:00", "12:00"] },
  { lightpink: ["9:00", "12:00"] },
  { lemonchiffon: ["9:00", "12:00"] },
  { lavender: ["9:00", "12:00"] },
  { palegreen: ["9:00", "12:00"] },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  PlanList: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    alignItems: "center",
    display: "flex",
  },
  planHeader: {
    flex: 1,
    width: "100%",
    backgroundColor: "dodgerblue",
  },
  headerBar: {
    paddingTop: 30,
    marginLeft: 20,
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  title: {
    flex: 2,
    width: "100%",
    paddingLeft: 20,
    justifyContent: "center",
  },
  headerBarText: {
    fontSize: 20,
    color: "white",
  },
  titleText: {
    fontSize: 25,
    color: "white",
  },
  planBody: {
    width: "100%",
    flex: 4,
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  shortcutButton: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    padding: 5,
  },
  textField: {
    width: "100%",
    flex: 3,
    padding: 10,
    paddingBottom: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  butttonWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  planDetail: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInputWrapper: {
    borderColor: "gainsboro",
    borderWidth: 1,
    width: "100%",
    padding: 5,
    justifyContent: "center",
  },
  textInput: {
    width: "100%",
    textAlignVertical: "center",
  },
  timeInput: {
    height: 45,
    width: 35,
    borderColor: "gainsboro",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  timeFont: {
    fontSize: 20,
    width: 35,
    height: 45,
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export default class CheckPlanModal extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const plans = this.props.plans;
    let allPlans = [];
    if (plans) {
      const upPlans = plans.up ? plans.up : {};
      const bottomPlans = plans.bottom ? plans.bottom : {};
      allPlans = [...upPlans, ...bottomPlans];
      allPlans.sort((a, b) => {
        if (a.start < b.start) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    return (
      <View style={styles.container}>
        <View style={styles.PlanList}>
          <View style={styles.planHeader}>
            <TouchableOpacity
              onPress={() => this.props.back()}
              style={styles.headerBar}
            >
              <Text style={styles.headerBarText}>✕</Text>
            </TouchableOpacity>
            <View style={styles.title}>
              <Text style={styles.titleText}>{this.props.day}</Text>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.planBody}>
              <View style={styles.shortcutButton}>
                {parette.map((value, index) => {
                  return (
                    <View style={styles.butttonWrapper} key={index}>
                      <TouchableOpacity
                        style={[
                          styles.button,
                          {
                            borderColor: Object.keys(value)[0],
                            backgroundColor: Object.keys(value)[0],
                          },
                        ]}
                        onPress={() => {}}
                      />
                    </View>
                  );
                })}
              </View>
              <View style={styles.textField}>
                <View style={styles.planDetail}>
                  <View style={styles.timeInput}>
                    <TextInput style={styles.timeFont} />
                  </View>
                  <View style={styles.timeInput}>
                    <TextInput style={styles.timeFont} />
                  </View>
                  <View style={styles.timeInput}>
                    <Text style={styles.timeFont}>:</Text>
                  </View>
                  <View style={styles.timeInput}>
                    <TextInput style={styles.timeFont} />
                  </View>
                  <View style={styles.timeInput}>
                    <TextInput style={styles.timeFont} />
                  </View>
                </View>
                <View style={styles.planDetail}>
                  <View style={styles.timeInput}>
                    <TextInput style={styles.timeFont} />
                  </View>
                  <View style={styles.timeInput}>
                    <TextInput style={styles.timeFont} />
                  </View>
                  <View style={styles.timeInput}>
                    <Text style={styles.timeFont}>:</Text>
                  </View>
                  <View style={styles.timeInput}>
                    <TextInput style={styles.timeFont} />
                  </View>
                  <View style={styles.timeInput}>
                    <TextInput style={styles.timeFont} />
                  </View>
                </View>
                <View style={styles.textInputWrapper}>
                  <TextInput
                    style={styles.textInput}
                    multiline={true}
                    keyboardAppearance={"light"}
                    enablesReturnKeyAutomatically={true}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
