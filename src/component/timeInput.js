import React, { PureComponent } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  time: {
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

export default class TimeInput extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    // refsとか使っていい感じの文字入力を作る
    return (
      <View style={styles.container}>
        <View style={styles.time}>
          <TextInput
            style={styles.timeFont}
            onFocus={this.props.handleKeybord}
            onEndEditing={this.props.handleKeybord}
          />
        </View>
        <View style={styles.time}>
          <TextInput
            style={styles.timeFont}
            onFocus={this.props.handleKeybord}
            onEndEditing={this.props.handleKeybord}
          />
        </View>
        <View style={styles.time}>
          <TextInput
            style={styles.timeFont}
            onFocus={this.props.handleKeybord}
            onEndEditing={this.props.handleKeybord}
          />
        </View>
        <View style={styles.time}>
          <TextInput
            style={styles.timeFont}
            onFocus={this.props.handleKeybord}
            onEndEditing={this.props.handleKeybord}
          />
        </View>
      </View>
    );
  }
}
