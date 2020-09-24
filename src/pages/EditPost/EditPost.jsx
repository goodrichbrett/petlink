import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class EditPost extends Component {
	state = {
		post: this.props.history.location.state.post,
		formData: this.props.history.location.state.post,
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
		this.props.handleUpdatePost(this.state.formData);
	};

	formRef = React.createRef();
	render() {
		return (
			<div style={{ width: '100%' }}>
				<h1 style={{ margin: '0 0 1em 0', textAlign: 'center' }}>
					Add Post
				</h1>
				<Form
					ref={this.formRef}
					onSubmit={this.handleSubmit}
					style={{ width: '100%' }}
				>
					<FormGroup>
						<Label for="title">Title</Label>
						<Input
							onChange={this.handleChange}
							type="text"
							name="title"
							id="title"
							placeholder="Add a title to the behavior or symptom"
							required
						/>
					</FormGroup>
					<FormGroup>
						<Label for="postType">Post Type</Label>
						<Input
							onChange={this.handleChange}
							type="select"
							name="postType"
							id="postType"
						>
							<option selected>Behavior</option>
							<option>Symptom</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="content">Content</Label>
						<Input
							onChange={this.handleChange}
							type="textarea"
							name="content"
							id="content"
							required
						/>
					</FormGroup>
					<FormGroup>
						<Label for="tags">Tags</Label>
						<Input
							onChange={this.handleChange}
							type="text"
							name="tags"
							id="tags"
							placeholder="Ears,Allergy,Rash,Paws - do not add spaces"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="date">Date</Label>
						<Input
							type="date"
							name="date"
							id="date"
							onChange={this.handleDateChange}
						/>
					</FormGroup>
					<FormGroup check>
						<br />
						<Label check>
							<Input
								name="private"
								onChange={this.handleCheckboxChange}
								checked={this.state.private}
								type="checkbox"
							/>{' '}
							Private
						</Label>
					</FormGroup>
					<FormGroup check>
						<br />
						<Label check>
							<Input
								name="archive"
								onChange={this.handleCheckboxChange}
								checked={this.state.archive}
								type="checkbox"
							/>{' '}
							Archive
						</Label>
					</FormGroup>
					<br />
					<Button onClick={this.handleSubmit}>Submit</Button>
				</Form>
			</div>
		);
	}
}

export default EditPost;
