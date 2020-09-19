import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class EditPet extends Component {
  state = {
    user: this.props.location.state.user,
    formData: this.props.location.state.user,
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      // invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.handleUpdateUser(this.state.formData);
    //history.push("/pet"); pass pet id?
  };

  formRef = React.createRef();
  render() {
    return (
      <Form ref={this.formRef} onSubmit={this.handleSubmit}>
        <h1>Update Profile Information</h1>
        {this.state.user.isVet ? (
          <>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="name"
                value={this.state.formData.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="email"
                value={this.state.user.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="avatar">Picture</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="avatar"
                value={this.state.user.avatar}
              />
            </FormGroup>
            <FormGroup>
              <Label for="isVet">Are You A Vet?</Label>
              <Input
                onChange={this.handleChange}
                type="select"
                name="isVet"
                value={this.state.user.isVet}
              >
                <option selected={this.state.user.isVet ? true : false}>
                  Yes
                </option>
                <option selected={this.state.user.isVet ? false : true}>
                  No
                </option>
              </Input>
              {/* Add yes or no options here! */}
            </FormGroup>
            <FormGroup>
              <Label for="licenseNo">License Number</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="licenseNo"
                value={this.state.user.licenseNo}
              />
            </FormGroup>
            <FormGroup>
              <Label for="licenseState">State License Number</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="licenseState"
                value={this.state.user.licenseState}
              />
            </FormGroup>
          </>
        ) : (
          <>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="name"
                value={this.state.formData.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="email"
                value={this.state.formData.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Phone Number</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="phoneNumber"
                value={this.state.formData.phoneNumber}
              />
            </FormGroup>
            <FormGroup>
              <Label for="avatar">Picture</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                name="avatar"
                value={this.state.formData.avatar}
              />
            </FormGroup>
            <FormGroup>
              <Label for="isVet">Are You A Vet?</Label>
              <Input
                onChange={this.handleChange}
                type="select"
                name="isVet"
                value={this.state.formData.isVet}
              >
                <option selected={this.state.user.isVet ? true : false}>
                  Yes
                </option>
                <option selected={this.state.user.isVet ? false : true}>
                  No
                </option>
              </Input>
              {/* Add yes or no options here! */}
            </FormGroup>
          </>
        )}

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default EditPet;
