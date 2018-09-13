import React, { Component } from "react";
import axios from "axios";

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class RentalCarsInventory extends Component {
  state = {};

  render() {
    return (
      <div>
        <Container>
          <h2>Rental Cars Inventory!</h2>
        </Container>
      </div>
    );
  }
}

export default RentalCarsInventory;
