import React, { Component } from "react";

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
  Form,
  Select
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import {
  listRentalCarTypesGet,
  addRentalCarPost
} from "../services/RentalCarsServer";

class RentalCarsForm extends Component {
  state = {
    make: "",
    model: "",
    year: "",
    carType: 0,
    vin: "",
    color: "",
    carTypesList: [],
    carTypeOptions: []
  };

  handlerSubmit = () => {
    const { make, model, year, carType, vin, color } = this.state;

    const newRentalCar = {
      Make: make,
      Model: model,
      Year: parseInt(year),
      CarType: carType,
      VIN: vin,
      Color: color
    };

    this.addRentalCar(newRentalCar);
  };

  loadCarTypes = () => {
    listRentalCarTypesGet()
      .then(response => {
        console.log("Car Types GET success!");
        console.log(response);

        // this.setState({ carTypesList: response.data });

        const carTypes = response.data;

        const carTypeOptions = carTypes.map(carType => {
          const option = {
            text: carType.carType,
            value: carType.id
          };

          return option;
        });

        this.setState({ carTypeOptions: carTypeOptions });
      })
      .catch(error => {
        console.log("Car Types GET failed!");
        console.log(error);
      });
  };

  addRentalCar = rentalCar => {
    console.log("Adding Rental Car: ", rentalCar);

    addRentalCarPost(rentalCar)
      .then(response => {
        console.log("POST success!");
        console.log(response);

        this.props.history.push("/cars");
      })
      .catch(error => {
        console.log("POST failed!");
        console.log(error);
      });
  };

  componentDidMount() {
    console.log("RentalCarsForm component mounted");

    this.loadCarTypes();
  }

  render() {
    // const { carTypeOptions } = this.state;

    // console.log("render carTypeOptions: ", carTypeOptions);

    return (
      <div>
        <Header as="h1" content="Rental Cars Form!" textAlign="center" />
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
              <label>Make</label>
              <input
                placeholder="Make"
                value={this.state.make}
                onChange={e => {
                  this.setState({ make: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Model</label>
              <input
                placeholder="Model"
                value={this.state.model}
                onChange={e => {
                  this.setState({ model: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Year</label>
              <input
                type="number"
                placeholder="Year"
                value={this.state.year}
                onChange={e => {
                  this.setState({ year: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Color</label>
              <input
                placeholder="Color"
                value={this.state.color}
                onChange={e => {
                  this.setState({ color: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>VIN</label>
              <input
                placeholder="VIN"
                value={this.state.vin}
                onChange={e => {
                  this.setState({ vin: e.target.value });
                }}
              />
            </Form.Field>
            <Form.Field>
              <label>Car Type</label>
              <Select
                placeholder="Select Car Type"
                options={this.state.carTypeOptions}
                onChange={(event, data) => {
                  // console.log("Select dropdown changed e: ", e);
                  // console.log("data: ", data);

                  this.setState({ carType: data.value });
                }}
              />
            </Form.Field>
            <Button type="submit" onClick={this.handlerSubmit}>
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default RentalCarsForm;
