import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { format, parse } from 'date-fns';
class EditPost extends Component {
	state = {
		post: this.props.history.location.state.thisPost,
		formData: this.props.history.location.state.thisPost,
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
	handleDateChange = (e) => {
		const dateStr = e.target.value;
		this.setState(({ formData }) => ({
			formData: {
				...formData,
				date: parse(dateStr, 'yyyy-MM-dd', new Date()),
			},
		}));
		// this.setState({
		// 	date: parse(e.target.value, 'yyyy-MM-dd', new Date()),
		// });
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
					Edit Post
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
							value={this.state.formData.title}
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
							value={this.state.formData.postType}
						>
							<option>Behavior</option>
							<option>Symptom</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="content">Content</Label>
						<Input
							onChange={this.handleChange}
							type="textarea"
							name="content"
							value={this.state.formData.content}
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
							value={this.state.formData.tags}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="date">Date</Label>
						<Input
							type="date"
							name="date"
							id="date"
							value={format(
								new Date(this.state.formData.date),
								'yyyy-MM-dd'
							)}
							onChange={this.handleDateChange}
						/>
					</FormGroup>
					<FormGroup check>
						<br />
						<Label check>
							<Input
								name="private"
								onChange={this.handleCheckboxChange}
								checked={this.state.formData.private}
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
								checked={this.state.formData.archive}
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
