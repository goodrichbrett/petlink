import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
			// invalidForm: !this.formRef.current.checkValidity(),
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.props.handleUpdatePet(this.state.formData);
		//history.push("/pet"); pass pet id?
	};

	formRef = React.createRef();
	render() {
		// -------- Update only works when data is not pre filled
		return (
			<Form ref={this.formRef} onSubmit={this.handleSubmit}>
				<FormGroup>
					<Label for="name">Name</Label>
					<Input
						onChange={this.handleChange}
						type="text"
						name="name"
						value={this.state.pet.name}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="avatar">Picture</Label>
					<Input
						onChange={this.handleChange}
						type="text"
						name="avatar"
						value={this.state.pet.avatar}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="type">Type</Label>
					<Input
						onChange={this.handleChange}
						type="text"
						name="type"
						value={this.state.pet.type}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="breed">Breed</Label>
					<Input
						onChange={this.handleChange}
						type="text"
						name="breed"
						value={this.state.pet.breed}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="gender">Gender</Label>
					<Input
						type="select"
						name="gender"
						onChange={this.handleChange}
					>
						<option
							selected={
								this.state.pet.gender === 'Male' ? true : false
							}
						>
							Male
						</option>
						<option
							selected={
								this.state.pet.gender === 'Male' ? false : true
							}
						>
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
						value={this.state.pet.age}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="conditions">Conditions</Label>
					<Input
						onChange={this.handleChange}
						type="text"
						name="conditions"
						placeholder="Please separate with comma and no spaces"
						value={this.state.pet.conditions.join(',')}
					/>
				</FormGroup>
				<Button>Submit</Button>
			</Form>
		);
	}
}

export default EditPet;
