import React from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {format, parse} from 'date-fns'

class AddPost extends React.Component {
    state = {
        title: '',
        postType: 'Behavior', //select with symptom option and behavior option
        content: '',
        tags: '',
        date: new Date(),
        private: false, //checkbox
        archive: false, //checkbox
    };

    handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    });
    };

    handleDateChange = (e) => {
        this.setState({
            date: parse(e.target.value, 'yyyy-MM-dd', new Date()),
        });
    };

    handleCheckboxChange = (e) => {
        console.log('checbox change', e.target.checked)
        this.setState({
            [e.target.name]: e.target.checked,
        });
    };

    handleSubmit = async (e) => {
    e.preventDefault();
    try {
        //await petService.AddPost(this.state);
        //redirect pass pet as location
    } catch (err) {
        // Use a modal or toast in your apps instead of alert
        //alert('Invalid Credentials!');
    }
    };

    formRef = React.createRef();
    render() { 
        return (
            <div style={{width: '100%'}}>
                <h1 style={{ margin: '0 0 1em 0', textAlign: 'center' }}>Add Post</h1>
                <Form ref={this.formRef} onSubmit={this.handleSubmit} style={{width: '100%'}}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input onChange={this.handleChange} type="text" name="title" id="title" placeholder="Add a title to the behavior or symptom" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="postType">Post Type</Label>
                        <Input onChange={this.handleChange} type="select" name="postType" id="postType">
                            <option selected>Behavior</option>
                            <option>Symptom</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Content</Label>
                        <Input onChange={this.handleChange} type="textarea" name="content" id="content" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="tags">Tags</Label>
                        <Input onChange={this.handleChange} type="text" name="tags" id="tags" placeholder="Ears,Allergy,Rash,Paws - do not add spaces" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date</Label>
                        <Input
                        type="date"
                        name="date"
                        id="date"
                        value={format(this.state.date, 'yyyy-MM-dd')}
                        onChange={this.handleDateChange}
                        />
                    </FormGroup>
                    <FormGroup check><br/>
                        <Label check>
                        <Input name='private' onChange={this.handleCheckboxChange} checked={this.state.private} type="checkbox" /> Private
                        </Label>
                    </FormGroup>
                    <FormGroup check><br/>
                        <Label check>
                        <Input name='archive' onChange={this.handleCheckboxChange} checked={this.state.archive} type="checkbox" /> Archive
                        </Label>
                    </FormGroup><br/>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </div> 
        );
    }
}
 
export default AddPost;