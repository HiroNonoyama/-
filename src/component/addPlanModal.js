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
  TouchableHighlight,
  KeyboardAvoidingView,
} from "react-native";
import TimeInput from "./timeInput";

const parette = [
  { A: ["#fbd2ff", "9:00", "12:00"] },
  { B: ["#ada7ff", "9:00", "12:00"] },
  { C: ["#e28cff", "9:00", "12:00"] },
  { D: ["#ff8ab8", "9:00", "12:00"] },
  { E: ["#11d7d8", "9:00", "12:00"] },
  { F: ["#63c8c4", "9:00", "12:00"] },
  { G: ["#aae2df", "9:00", "12:00"] },
  { H: ["#facfd9", "9:00", "12:00"] },
  { M: ["#fd9ab6", "9:00", "12:00"] },
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
    backgroundColor: "rgba(250,207,217, 0.5)",
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
    color: "black",
  },
  titleText: {
    fontSize: 25,
    color: "black",
  },
  planBody: {
    width: "100%",
    flex: 4,
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
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
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  butttonWrapper: {
    flex: 1,
    width: "120%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputWrapper: {
    borderColor: "gainsboro",
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    padding: 5,
    width: "100%",
    height: 100,
  },
  planInput: {
    flex: 3,
    width: "100%",
    justifyContent: "flex-start",
  },
  timeForm: {
    height: 60,
    width: "100%",
    flexDirection: "row",
  },
  labels: {
    height: 15,
    width: "100%",
    flexDirection: "row",
  },
  label: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  labelText: {
    color: "grey",
    fontSize: 10,
    paddingBottom: 3,
    paddingLeft: 12,
  },
  buttonText: {
    fontSize: 10,
    color: "rgba(0,0,0,0.7)",
  },
  textInput: {
    height: 100,
  },
});

export default class CheckPlanModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { touching: [0, 0, 0, 0, 0, 0, 0, 0], keyboardActive: 0 };
    this.handleKeybord = this.handleKeybord.bind(this);
  }

  handleKeybord() {
    this.setState({ keyboardActive: !this.state.keyboardActive });
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
                {!this.state.keyboardActive
                  ? parette.map((value, index) => {
                      return (
                        <View style={styles.butttonWrapper} key={index}>
                          <TouchableHighlight
                            underlayColor={value[Object.keys(value)[0]][0]}
                            style={[
                              styles.button,
                              {
                                borderColor: value[Object.keys(value)[0]][0],
                                borderWidth: 1,
                              },
                            ]}
                            onPress={() => {}}
                          >
                            <Text style={styles.buttonText}>
                              {Object.keys(value)[0]}
                            </Text>
                          </TouchableHighlight>
                        </View>
                      );
                    })
                  : null}
              </View>
              <KeyboardAvoidingView
                style={styles.planInput}
                behavior={"position"}
              >
                <View style={styles.labels}>
                  <View style={styles.label}>
                    <Text style={styles.labelText}>Start</Text>
                  </View>
                  <View style={styles.label}>
                    <Text style={styles.labelText}>End</Text>
                  </View>
                </View>
                <View style={styles.timeForm}>
                  <TimeInput handleKeybord={this.handleKeybord} />
                  <TimeInput handleKeybord={this.handleKeybord} />
                </View>
                <View style={styles.textField}>
                  <View style={styles.textInputWrapper}>
                    <TextInput
                      style={styles.textInput}
                      multiline={true}
                      keyboardAppearance={"light"}
                      enablesReturnKeyAutomatically={true}
                      onFocus={this.handleKeybord}
                      onEndEditing={this.handleKeybord}
                    />
                  </View>
                </View>
              </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
