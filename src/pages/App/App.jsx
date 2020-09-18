import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import authService from '../../services/authService';
import Users from '../Users/Users';
import './App.css';
import OwnerFeed from '../OwnerFeed/OwnerFeed';

class App extends Component {
	state = {
		user: authService.getUser(),
		followedPets : [],
	};

	handleLogout = () => {
		authService.logout();
		this.setState({ user: null });
	};

	handleSignupOrLogin = () => {
		this.setState({ user: authService.getUser() });
	};

	// [] Call petsAPI services to get all followed pets
	// async componentDidMount() {
	// 	const followedPets = await petsAPI.getPets();
	// 	this.setState({followedPets});
	// 	console.log(this.state)
	// }

	render() {
		const { user } = this.state;
		return (
			<>
				<NavBar user={user} handleLogout={this.handleLogout} />
				<Route
					exact
					path="/"
					render={() => (
						user ? <OwnerFeed user={this.state.user}/> : <Redirect to="/login" />
					)}
				/>
				<Route
					exact
					path="/signup"
					render={({ history }) => (
						<Signup
							history={history}
							handleSignupOrLogin={this.handleSignupOrLogin}
						/>
					)}
				/>
				<Route
					exact
					path="/login"
					render={({ history }) => (
						<Login
							history={history}
							handleSignupOrLogin={this.handleSignupOrLogin}
						/>
					)}
				/>
				<Route
					exact
					path="/users"
					render={() => (user ? <Users /> : <Redirect to="/login" />)}
				/>
			</>
		);
	}
}

export default App;
