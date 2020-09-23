import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import Results from "../../components/Results/Results";
import Map from "../../components/Map/Map";
import "./Search.css";

import * as petService from "../../services/petService";

class Search extends Component {
  state = {
    distance: [1, 2, 3, 4, 5],
    animalType: ["Dog", "Cat", "Snake", "Rabbit"],
    searchResponse: null,
    formData: {
      type: "Dog",
      distance: "1",
      condition: "",
    },
    results: [],
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
    });

    console.log(this.state.formData);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getData();
  };

  getData = () => {
    petService.getApplicable(this.state.formData).then((response) => {
      console.log(response.data);
      this.setState({ results: response.data });
    });
  };

  formRef = React.createRef();
  render() {
    return (
      <>
        <Container>
          <h1>Search Page</h1>
          <Form ref={this.formRef} onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="type">Animal Type:</Label>
              <Input
                onChange={this.handleChange}
                type="select"
                name="type"
                value={this.state.formData.type}
              >
                {this.state.animalType.map((animal, idx) => (
                  <option key={idx}>{animal}</option>
                ))}
              </Input>
            </FormGroup>
            {/*  */}
            <FormGroup>
              <Label for="distance">Miles From You:</Label>
              <Input
                onChange={this.handleChange}
                type="select"
                name="distance"
                value={this.state.formData.distance}
              >
                {this.state.distance.map((distance) => (
                  <option>{distance}</option>
                ))}
              </Input>
            </FormGroup>
            {/*  */}
            <FormGroup>
              <Label for="condition">Condition:</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="condition"
                value={this.state.formData.condition}
              />
            </FormGroup>
            <Button>Search Pets</Button>
          </Form>
          <section>
            {this.state.results.length ? (
              <>
                <h1>Results</h1>
                <Map
                  lat={this.props.user.location.lat}
                  long={this.props.user.location.long}
                  zoom={16}
                  pets={this.state.results}
                ></Map>
                <Results pets={this.state.results} />
              </>
            ) : (
              ""
            )}
          </section>
        </Container>
      </>
    );
  }
}

export default Search;
