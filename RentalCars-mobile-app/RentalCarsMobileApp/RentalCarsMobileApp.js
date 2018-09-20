import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationBar, Title, ImageBackground, Icon } from "@shoutem/ui";

export default class RentalCarsMobileApp extends Component {
  render() {
    return (
      <NavigationBar
        leftComponent={<Icon name="sidebar" />}
        centerComponent={<Title>Rental Cars!</Title>}
      />
      // <View style={styles.container}>
      //   {/* <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text> */}
      //   {/* <NavigationBar centerComponent={<Title>Rental Cars</Title>} /> */}

      //   <Text>Rental Cars Mobile App!</Text>
      //   <Text>First mobile app made by Rhyan Reyes</Text>
      //   <Text>Another line for the app</Text>
      // </View>
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
