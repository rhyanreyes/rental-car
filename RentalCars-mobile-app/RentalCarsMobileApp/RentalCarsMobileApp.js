import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class RentalCarsMobileApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text> */}
        <Text>Rental Cars Mobile App!</Text>
        <Text>First mobile app made by Rhyan Reyes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
