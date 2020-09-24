import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as userPhotoAPI from '../../services/userPhotoService';

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
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.handleUpdateUser(this.state.formData);
  };

  handleUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileData = new FormData();
    fileData.append('image', file);
    const imageData = await userPhotoAPI.uploadUserPhoto(fileData)
    const imageUrl = imageData.data.imageUrl;
    const formData = {...this.state.formData, avatar:imageUrl}
    this.setState({formData})
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
              <Label for="image">Upload Photo</Label>
              <Input
                type="file"
                name="image"
                onChange={this.handleUpload}
              ></Input>
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
              <Label for="image">Upload Photo</Label>
              <Input
                type="file"
                name="image"
                onChange={this.handleUpload}
              ></Input>
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
            </FormGroup>
          </>
        )}

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default EditPet;
