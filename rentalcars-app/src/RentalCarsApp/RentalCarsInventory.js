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
  Segment,
  Item
} from "semantic-ui-react";
import { listRentalCarsGet } from "../services/RentalCarsServer";

class RentalCarsInventory extends Component {
  state = {
    rentalCarsInventory: []
  };

  listRentalCars = () => {
    listRentalCarsGet()
      .then(response => {
        console.log("GET success!");
        console.log(response);

        this.setState({ rentalCarsInventory: response.data });
      })
      .catch(error => {
        console.log("GET success!");
        console.log(error);
      });
  };

  componentDidMount() {
    console.log("RentalCarsInventory component mounted");

    this.listRentalCars();
  }

  render() {
    const { rentalCarsInventory } = this.state;

    console.log("render rentalCarsInventory: ", rentalCarsInventory);

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
        <Grid container columns={4}>
          {/* <Grid.Column>
            <Image src="/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column>
            <Image src="/images/wireframe/image.png" />
          </Grid.Column> */}
          {rentalCarsInventory.map(car => (
            <Grid.Column>
              <Item.Group>
                <Item>
                  <Item.Description>
                    <div>
                      {car.make} {car.model}
                    </div>
                    <div>
                      {car.year}, {car.color}
                    </div>
                  </Item.Description>
                </Item>
              </Item.Group>
            </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}

export default RentalCarsInventory;
