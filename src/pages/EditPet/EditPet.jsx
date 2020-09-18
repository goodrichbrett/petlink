import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './EditPet.css';

class EditPet extends Component {
    state = { 
      pet: this.props.location.state.pet
     }

     handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
  
    handleSubmit = async (e) => {
      //petservice call
      //history.push("/pet"); pass pet id?
    };


    render() { 
        return (
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" value={this.state.pet.name} />
              </FormGroup>
              <FormGroup>
                <Label for="avatar">Picture</Label>
                <Input type="text" name="avatar" value={this.state.pet.avatar} />
              </FormGroup>
              <FormGroup>
                <Label for="type">Type</Label>
                <Input type="text" name="type" value={this.state.pet.type}/>
              </FormGroup>
              <FormGroup>
                <Label for="breed">Breed</Label>
                <Input type="text" name="breed" value={this.state.pet.breed}/>
              </FormGroup>
              <FormGroup>
                <Label for="gender">Gender</Label>
                <Input type="select" name="gender">
                  <option selected={this.state.pet.gender === 'Male' ? true : false}>Male</option>
                  <option selected={this.state.pet.gender === 'Male' ? false : true}>Female</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input type="number" name="age" value={this.state.pet.age}/>
              </FormGroup>
              <FormGroup>
                <Label for="illnesses">Illnesses</Label>
                <Input type="text" name="illnesses" placeholder='Please separate with comma and no spaces' value={this.state.pet.illnesses.join(',')}/>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          );
    }
}
 
export default EditPet;