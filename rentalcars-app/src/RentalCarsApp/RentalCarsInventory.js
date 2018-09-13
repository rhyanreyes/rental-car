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

  componentDidMount() {
    console.log("RentalCarsInventory component mounted");
  }

  render() {
    return (
      <div>
        <Container text style={{ marginTop: "7em" }}>
          {/* <h2>Rental Cars Inventory!</h2> */}
          <Header
            as="h1"
            content="Rental Cars Inventory! (using Semantic UI)"
            textAlign="center"
          />
        </Container>
      </div>
    );
  }
}

export default RentalCarsInventory;
