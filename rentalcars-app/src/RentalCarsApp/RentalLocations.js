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
  Icon,
  Label,
  Table,
  Item
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { listRentalLocationsGet } from "../services/RentalCarsServer";

class RentalLocations extends Component {
  state = {
    locationList: [],
    updateMode: null,
    headerTitle: ""
  };

  jumpRef = React.createRef();

  handlerItemClick = location => {
    const { updateMode } = this.state;

    if (updateMode) {
      console.log("Item clicked");
      console.log(location);

      this.props.history.push(`/locationform/${location.id}`);
    }
  };

  listRentalLocations = () => {
    listRentalLocationsGet()
      .then(response => {
        console.log("GET success!");
        console.log(response);

        this.setState({ locationList: response.data }, () => {
          this.jumpRef.current.scrollIntoView({
            block: "start",
            behavior: "instant"
          });
        });
      })
      .catch(error => {
        console.log("GET failed!");
        console.log(error);
      });
  };

  componentDidMount() {
    console.log("RentalLocations component mounted");

    this.listRentalLocations();

    console.log("RentalLocations mounted props: ", this.props);

    // if (this.props.location.pathname === "/locations/update") {
    //   this.setState({ updateMode: true });
    // } else {
    //   this.setState({ updateMode: false });
    // }

    if (this.props.updateMode === true) {
      this.setState({
        updateMode: true,
        headerTitle: "Rental Locations Update!"
      });
    } else {
      this.setState({ updateMode: false, headerTitle: "Rental Locations!" });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location !== prevProps.location) {
      console.log("RentalLocations updated props: ", this.props);

      //   if (this.props.location.pathname === "/locations/update") {
      //     this.setState({ updateMode: true });
      //   } else {
      //     this.setState({ updateMode: false });
      //   }

      if (this.props.updateMode === true) {
        this.setState({
          updateMode: true,
          headerTitle: "Rental Locations Update!"
        });
      } else {
        this.setState({ updateMode: false, headerTitle: "Rental Locations!" });
      }
    }
  }

  render() {
    const { locationList, headerTitle } = this.state;

    console.log("render locationList: ", locationList);

    return (
      <div>
        <Container fluid style={{ marginTop: "7em" }} textAlign="left">
          <div ref={this.jumpRef} />
          <Header as="h1" content={headerTitle} textAlign="center" />
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

          {/* <Item.Group>
          <Item>
            <Item.Image size="tiny" src="/images/wireframe/image.png" />

            <Item.Content>
              <Item.Header as="a">Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <Image src="/images/wireframe/short-paragraph.png" />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size="tiny" src="/images/wireframe/image.png" />

            <Item.Content>
              <Item.Header as="a">Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <Image src="/images/wireframe/short-paragraph.png" />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group> */}

          <Item.Group>
            <Grid container stackable columns={3}>
              {locationList.map(location => (
                <Grid.Column stretched={true} key={location.id}>
                  <div
                    locationid={location.id}
                    onClick={() => this.handlerItemClick(location)}
                  >
                    {/* <Segment> */}
                    <Item>
                      <Item.Content>
                        <Item.Header as="a">
                          {location.locationName}
                        </Item.Header>
                        <Item.Description>
                          <div>{location.phone}</div>
                          <div>{location.street}</div>
                          <div>
                            {location.city}
                            {location.state !== "" ? ", " : ""}
                            {location.state} {location.zip}
                          </div>
                          <div>{location.country}</div>
                        </Item.Description>
                      </Item.Content>
                    </Item>
                    {/* </Segment> */}
                  </div>
                </Grid.Column>
              ))}
            </Grid>
          </Item.Group>
        </Container>
      </div>
    );
  }
}

export default RentalLocations;
