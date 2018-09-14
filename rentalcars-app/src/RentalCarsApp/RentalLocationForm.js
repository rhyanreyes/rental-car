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
  Button,
  Checkbox,
  Form
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { createRentalLocationPost } from "../services/RentalCarsServer";

class RentalLocationForm extends Component {
  state = {
    locationName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    lat: 0,
    long: 0
  };

  handlerSubmitForm = () => {
    const newLocation = this.readForm();

    this.addRentalLocation(newLocation);
  };

  addRentalLocation = location => {
    console.log("Adding location: ", location);

    createRentalLocationPost(location)
      .then(response => {
        console.log("POST success!");
        console.log(response);
      })
      .catch(error => {
        console.log("POST failed!");
        console.log(error);
      });
  };

  readForm = () => ({
    locationName: this.state.locationName,
    street: this.state.street,
    city: this.state.city,
    state: this.state.state,
    zip: this.state.zip,
    country: this.state.country,
    phone: this.state.phone,
    lat: this.state.lat,
    long: this.state.long
  });

  componentDidMount() {
    console.log("RentalLocationForm component mounted");

    // Setting sample data
    // this.setState({
    //   locationName: "Beverly Hills",
    //   street: "9732 S. Santa Monica Blvd.",
    //   city: "Beverly Hills",
    //   state: "CA",
    //   zip: "90210",
    //   country: "",
    //   phone: "(310) 274-6969"
    // });
  }

  render() {
    return (
      <div>
        <Header as="h1" content="Rental Location Form!" textAlign="center" />
        <Container text style={{ marginTop: "7em" }} textAlign="left">
          <Form>
            {/* <Form.Field>
              <label>First Name</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field> */}
            <Form.Field>
              <label>Location Name</label>
              <input
                placeholder="Location Name"
                value={this.state.locationName}
                onChange={e => {
                  this.setState({ locationName: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Street</label>
              <input
                placeholder="Street"
                value={this.state.street}
                onChange={e => {
                  this.setState({ street: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input
                placeholder="City"
                value={this.state.city}
                onChange={e => {
                  this.setState({ city: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Group widths="equal">
              <Form.Field>
                <label>State</label>
                <input
                  placeholder="State"
                  value={this.state.state}
                  onChange={e => {
                    this.setState({ state: e.target.value });
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label>Zip</label>
                <input
                  placeholder="Zip"
                  value={this.state.zip}
                  onChange={e => {
                    this.setState({ zip: e.target.value });
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label>Country</label>
                <input
                  placeholder="Country"
                  value={this.state.country}
                  onChange={e => {
                    this.setState({ country: e.target.value });
                  }}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Phone</label>
              <input
                placeholder="Phone"
                value={this.state.phone}
                onChange={e => {
                  this.setState({ phone: e.target.value });
                }}
              />
            </Form.Field>

            <Button type="submit" onClick={this.handlerSubmitForm}>
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default RentalLocationForm;
