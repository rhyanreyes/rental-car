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

import RentalCarsInventory from "./RentalCarsInventory";

const style = {
  h1: {
    marginTop: "3em"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  last: {
    marginBottom: "300px"
  }
};

class RentalCarsApp extends Component {
  state = {
    showRentalCarsInv: null
  };

  handlerToggleMenu = () => {
    const { showRentalCarsInv } = this.state;

    this.setState(
      {
        showRentalCarsInv: !showRentalCarsInv
      },
      () => {
        console.log("showRentalCarsInv state: ", showRentalCarsInv);
      }
    );
  };

  componentDidMount() {
    this.setState({ showRentalCarsInv: false });
  }

  render() {
    const { showRentalCarsInv } = this.state;

    return (
      <div>
        {/* <h1>Rental Cars!</h1> */}
        {/* <Header
          as="h1"
          content="Rental Cars (using Semantic UI)"
          textAlign="center"
        /> */}

        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              <Image
                size="mini"
                // src="/images/B3mOD8fH_400x400.jpg"
                style={{ marginRight: "1.5em" }}
              />
              Rental Cars
            </Menu.Item>
            <Menu.Item as="a">Home</Menu.Item>

            <Dropdown item simple text="Dropdown">
              <Dropdown.Menu>
                <Dropdown.Item onClick={this.handlerToggleMenu}>
                  Rental Cars Inventory
                </Dropdown.Item>
                {/* <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className="dropdown icon" />
                  <span className="text">Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item> */}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>

        {showRentalCarsInv && <RentalCarsInventory />}
      </div>
    );
  }
}

export default RentalCarsApp;
