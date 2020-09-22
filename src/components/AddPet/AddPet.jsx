import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddPet extends Component {
	state = {
		formData: {
			alias: '',
			type: '',
			name: '',
			avatar: '',
			breed: '',
			gender: '',
			age: null,
			conditions: [],
			posts: [],
			symptoms: [],
			ownerId: '',
			followers: [],
		},
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleAddPet(this.state.formData);
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

	formRef = React.createRef();
	render() {
		return (
				<div style={{width: '100%'}}>
					<h1 style={{textAlign: 'center'}}>New Pet</h1>
					<div style={{display: 'flex', justifyContent: 'center'}}>
					<Form style={{width: '100%', maxWidth: '500px'}} ref={this.formRef} onSubmit={this.handleSubmit}>
						<FormGroup>
							<Label for="name">Pet Name</Label>
							<Input
								onChange={this.handleChange}
								value={this.state.formData.name}
								type="text"
								name="name"
								id="name"
								required
							></Input>
						</FormGroup>
						<FormGroup>
							<Label for="alias">Nickname</Label>
							<Input
								onChange={this.handleChange}
								value={this.state.formData.alias}
								type="text"
								name="alias"
								id="alias"
							></Input>
						</FormGroup>
						<FormGroup>
							<Label for="type">Type of Animal</Label>
							<Input
								onChange={this.handleChange}
								value={this.state.formData.type}
								type="text"
								name="type"
								id="type"
							></Input>
						</FormGroup>
						<FormGroup>
							<Label for="breed">Breed</Label>
							<Input
								onChange={this.handleChange}
								value={this.state.formData.breed}
								type="text"
								name="breed"
								id="breed"
							></Input>
						</FormGroup>
						<FormGroup>
							<Label for="gender">Gender</Label>
							<select
								name="gender"
								id="gender"
								onChange={this.handleChange}
								value={this.state.formData.gender}
							>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</FormGroup>
						<FormGroup>
							<Label for="age">Age</Label>
							<Input
								onChange={this.handleChange}
								value={this.state.formData.age}
								type="number"
								name="age"
								id="age"
							></Input>
						</FormGroup>
						<FormGroup>
							<Label for="avatar">Pet Picture Link</Label>
							<Input
								onChange={this.handleChange}
								value={this.state.formData.avatar}
								type="text"
								name="avatar"
								id="avatar"
								required
							></Input>
						</FormGroup>
						<Link
							to={{
								pathname: '/',
								state: { pet: this.state.pet, user: this.props.user }
							}}
							>
							<Button>Cancel</Button>
						</Link>&nbsp;&nbsp;&nbsp;&nbsp;
						<Button type="submit">Submit</Button>
					</Form>
					</div>
				</div>
		);
	}
}

export default AddPet;
