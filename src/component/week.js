import React from "react";
import { View, StyleSheet } from "react-native";
import Day from "./day";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const isToday = (today, year, month, date) => {
  const today_year = today.getFullYear();
  const today_month = today.getMonth() + 1;
  const today_date = today.getDate();
  if (year === today_year && month === today_month && date === today_date) {
    return true;
  }
  return false;
};

export default function Week(props) {
  const yearPlans = props.plans[props.year];
  const monthPlans = yearPlans ? yearPlans[props.month] : null;
  return props.days.map((day, index) => (
    <View key={index} style={styles.container}>
      <Day
        doublePress={obj => props.doublePress(obj)}
        singlePress={obj => props.singlePress(obj)}
        isToday={isToday(props.today, props.year, props.month, day)}
        day={day}
        month={props.month}
        year={props.year}
        plan={monthPlans ? monthPlans[day] : null}
        isHoliday={props.holidays.indexOf(
          `${props.year}-${String(props.month).length === 2
            ? props.month
            : "0" + String(props.month)}-${String(day).length === 2
            ? day
            : "0" + String(day)}`
        )}
      />
    </View>
  ));
}
