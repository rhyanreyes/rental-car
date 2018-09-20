import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationBar, Title, ImageBackground } from "@shoutem/ui";

export default class RentalCarsMobileApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text> */}
        {/* <NavigationBar centerComponent={<Title>Rental Cars</Title>} /> */}
        <ImageBackground
          source={{
            uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-3.png"
          }}
          style={{ width: 375, height: 70 }}
        >
          <NavigationBar
            styleName="clear"
            centerComponent={<Title>Rental Cars</Title>}
          />
        </ImageBackground>
        <Text>Rental Cars Mobile App!</Text>
        <Text>First mobile app made by Rhyan Reyes</Text>
        <Text>Another line for the app</Text>
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
