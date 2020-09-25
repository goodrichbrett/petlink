import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import { Button } from "reactstrap";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    location: {}
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };


  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        },
      });
    });
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <div>
        <h3>Sign Up</h3>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="confirm">Confirm Password</label>
          <br />
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Button color="primary" disabled={this.isFormInvalid()}>
            Sign Up
          </Button>
          <br />
          <br />
          <Link to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

export default SignupForm;
