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

class RentalCarsForm extends Component {
  state = {};

  componentDidMount() {
    console.log("RentalCarsForm component mounted");
  }

  render() {
    return (
      <div>
        <Header as="h1" content="Rental Cars Form!" textAlign="center" />
        <Container text style={{ marginTop: "7em" }} textAlign="left">
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default RentalCarsForm;
