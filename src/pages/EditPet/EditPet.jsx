import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom'
import * as petPhotoAPI from '../../services/userPhotoService';

import './EditPet.css';

class EditPet extends Component {
	state = {
		pet: this.props.location.state.pet,
		formData: this.props.location.state.pet,
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
		this.props.handleUpdatePet(this.state.formData);
	};

	handleUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileData = new FormData();
    fileData.append('image', file);
    const imageData = await petPhotoAPI.uploadUserPhoto(fileData)
    const imageUrl = imageData.data.imageUrl;
    const formData = {...this.state.formData, avatar:imageUrl}
    this.setState({formData})
  };

	formRef = React.createRef();
	render() {
		return (
			<Form ref={this.formRef} onSubmit={this.handleSubmit}>
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
              <Label for="image">Upload Photo</Label>
              <Input
                type="file"
                name="image"
                onChange={this.handleUpload}
              ></Input>
            </FormGroup>
				<FormGroup>
					<Label for="type">Type</Label>
					<Input
						onChange={this.handleChange}
						type="text"
						name="type"
						value={this.state.formData.type}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="breed">Breed</Label>
					<Input
						onChange={this.handleChange}
						type="text"
						name="breed"
						value={this.state.formData.breed}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="gender">Gender</Label>
					<Input
						type="select"
						name="gender"
						onChange={this.handleChange}
						value={this.state.formData.gender}
					>
						<option>
							Male
						</option>
						<option>
							Female
						</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label for="age">Age</Label>
					<Input
						onChange={this.handleChange}
						type="number"
						name="age"
						value={this.state.formData.age}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="conditions">Conditions</Label>
					<Input
						onChange={this.handleChange}
						type="text"
						name="conditions"
						placeholder="Please separate with comma and no spaces"
						value={this.state.formData.conditions}
					/>
				</FormGroup>
				<Link
					to={{
						pathname: '/pet',
						state: { pet: this.state.pet, user: this.props.user }
					}}
					>
					<Button>Cancel</Button>
				</Link>&nbsp;&nbsp;&nbsp;&nbsp;
				<Button>Submit</Button>
			</Form>
		);
	}
}

export default EditPet;