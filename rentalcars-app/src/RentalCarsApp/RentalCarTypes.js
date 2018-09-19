import React, { Component } from "react";
import { Container, Form, Icon, Label, Menu, Table } from "semantic-ui-react";

import RentalCarTypesTable from "./RentalCarTypesTable";
import {
  listRentalCarTypesGet,
  addRentalCarTypePost
} from "../services/RentalCarsServer";

class RentalCarTypes extends Component {
  state = {
    editTableCell: null,
    carTypes: [],
    tableCellValue: ""
  };

  handlerTableCell = carType => {
    console.log("Table Cell clicked");

    this.setState({ editTableCell: true });
  };

  handlerCellKeyDown = event => {
    // console.log("Key was pressed. Key: ", event.key);
    // console.log("event: ", event);

    const { editTableCell, tableCellValue, carTypes } = this.state;

    if (event.key === "Enter") {
      console.log("Enter key pressed");
      console.log("tableCellValue: ", tableCellValue);
    }

    if (event.key === "Enter" && editTableCell === true) {
      const newCarType = { carType: tableCellValue };
      this.addCarType(newCarType);
    }
  };

  showFirstRow = () => {
    const { carTypes, editTableCell } = this.state;
    let firstRow;

    // console.log("carTypes: ,", carTypes);
    // console.log("editTableCell: ", editTableCell);

    firstRow = null;

    if (carTypes.length === 0) {
      firstRow = (
        <Table.Row>
          <Table.Cell onClick={() => this.handlerTableCell(0)}>
            <i>Click to add a Car Type</i>
          </Table.Cell>
        </Table.Row>
      );
    }

    if (carTypes.length === 0 && editTableCell === true) {
      firstRow = (
        <Table.Row>
          <Table.Cell onClick={() => this.handlerTableCell(0)}>
            <Form>
              <input
                placeholder="Click to add a Car Type"
                onKeyDown={this.handlerCellKeyDown}
                onChange={e =>
                  this.setState({ tableCellValue: e.target.value })
                }
              />
            </Form>
          </Table.Cell>
        </Table.Row>
      );
    }

    return firstRow;
  };

  listCarTypes = () => {
    listRentalCarTypesGet()
      .then(response => {
        console.log("GET success!");
        console.log(response);

        this.setState({ carTypes: response.data });
      })
      .catch(error => {
        console.log("GET failed!");
        console.log(error);
      });
  };

  addCarType = carType => {
    console.log("Adding Car Type: ", carType);

    addRentalCarTypePost(carType)
      .then(response => {
        console.log("POST success!");
        console.log(response);

        this.setState({ editTableCell: false });
        this.listCarTypes();
      })
      .catch(error => {
        console.log("POST failed!");
        console.log(error);
      });
  };

  componentDidMount() {
    // this.listCarTypes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.carTypes !== prevState.carTypes) {
      const { carTypes } = this.state;

      console.log("carTypes: ", carTypes);
    }
  }

  render() {
    const { carTypes, editTableCell } = this.state;
    const firstRow = this.showFirstRow();

    return (
      <div>
        <h1>Rental Car Types!</h1>
        <RentalCarTypesTable />
      </div>
    );
  }
}

export default RentalCarTypes;
