import React, { Component } from "react";
import { Container, Form, Icon, Label, Menu, Table } from "semantic-ui-react";
import { listRentalCarTypesGet } from "../services/RentalCarsServer";

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

  handlerCellKeyPress = event => {};

  showFirstRow = () => {
    const { carTypes, editTableCell } = this.state;
    let firstRow;

    console.log("carTypes: ,", carTypes);
    console.log("editTableCell: ", editTableCell);

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
                onKeyPress={this.handlerCellKeyPress}
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

  componentDidMount() {
    this.listCarTypes();
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
        <Container>
          {/* <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>First</Label>
                </Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table> */}

          {/* <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>No Action</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Requires call</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
              <Table.Row warning>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>No Action</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell positive>Approved</Table.Cell>
                <Table.Cell warning>Requires call</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell negative>Denied</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table> */}

          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Car Type</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {firstRow}
              {/* <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>No Action</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row> */}
              {carTypes &&
                carTypes.map(carType => {
                  <Table.Row onClick={() => this.handlerTableCell(carType)}>
                    <Table.Cell>{carType.carType}</Table.Cell>
                  </Table.Row>;
                })}
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}

export default RentalCarTypes;
