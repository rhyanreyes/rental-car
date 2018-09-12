import React, { Component } from "react";
import axios from "axios";

import RentalCarsInventory from "./RentalCarsInventory";

class RentalCarsApp extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Rental Cars!</h1>
        <RentalCarsInventory />
      </div>
    );
  }
}

export default RentalCarsApp;
