import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  reminder: {
    padding: 20,
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sliderIcon: {
    fontSize: 24,
    marginRight: 10,
  },
});

const EcoReminder = () => {
  const [reminder1Enabled, setReminder1Enabled] = useState(true);
  const [reminder2Enabled, setReminder2Enabled] = useState(true);
  const [reminder3Enabled, setReminder3Enabled] = useState(true);

  const toggleReminder1 = () => {
    setReminder1Enabled((prevState) => !prevState);
  };

  const toggleReminder2 = () => {
    setReminder2Enabled((prevState) => !prevState);
  };

  const toggleReminder3 = () => {
    setReminder3Enabled((prevState) => !prevState);
  };

  return (
    <View style={styles.reminder}>
      <View>
        <Text>Send me ecofriendly text reminders!</Text>
        <TouchableOpacity style={styles.switch} onPress={toggleReminder1}>
          <AntDesign
            name={reminder1Enabled ? "checksquare" : "closesquare"}
            style={styles.sliderIcon}
          />
          <Text>{reminder1Enabled ? "On" : "Off"}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Remind me when I am near an Ecocode!</Text>
        <TouchableOpacity style={styles.switch} onPress={toggleReminder2}>
          <AntDesign
            name={reminder2Enabled ? "checksquare" : "closesquare"}
            style={styles.sliderIcon}
          />
          <Text>{reminder2Enabled ? "On" : "Off"}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Send me a reminder to bring a reusable bag!</Text>
        <TouchableOpacity style={styles.switch} onPress={toggleReminder3}>
          <AntDesign
            name={reminder3Enabled ? "checksquare" : "closesquare"}
            style={styles.sliderIcon}
          />
          <Text>{reminder3Enabled ? "On" : "Off"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EcoReminder;
