import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import authService from '../../services/authService';
import Users from '../Users/Users';
import Pet from '../../pages/Pet/Pet';
import EditPet from '../../pages/EditPet/EditPet';
import './App.css';
import AddPet from '../../components/AddPet/AddPet';
import * as petAPI from '../../services/petService';
import * as userAPI from '../../services/userService';
import * as postAPI from '../../services/postService';
import OwnerFeed from '../OwnerFeed/OwnerFeed';
import OwnerProfile from '../OwnerProfile/OwnerProfile';
import EditUser from '../EditUser/EditUser';
import AddPost from '../../pages/AddPost/AddPost';
import LandingContent from '../../components/Landing/Landing';
import Search from '../Search/Search';
import ArchivePage from '../ArchivePage/ArchivePage';
import Post from '../Post/Post';
import Pets from '../Pets/Pets';
import EditPost from '../EditPost/EditPost';

class App extends Component {
	state = {
		user: '',
		pets: [],
		followedPets: [],
		searchResults: [],
		posts: [],
	};

	handleLogout = () => {
		authService.logout();
		this.setState({ user: null });
	};

	handleSignupOrLogin = () => {
		this.setState({ user: authService.getUser() });
	};

	handleDeleteUser = async (id) => {
		if (authService.getUser()) {
			await userAPI.deleteOne(id);
			this.setState(
				(state) => ({
					user: '',
				}),
				() => this.props.history.push('/')
			);
		} else {
			this.props.history.push('/login');
		}
	};

	handleAddPet = async (newPetData) => {
		const newPet = await petAPI.create(newPetData);
		newPet.addedBy = this.state.user._id;
		this.setState(
			(state) => ({
				pets: [...state.pets, newPet],
			}),
			() => this.props.history.push('/')
		);
	};

	handleFollowPet = async (followedPetData) => {
		// const newPet = await petAPI.create(newPetData);
		// newPet.addedBy = this.state.user._id;
		// this.setState(
		// 	(state) => ({
		// 		pets: [...state.pets, newPet],
		// 	}),
		// 	() => this.props.history.push('/')
		// );
	};

	handleUpdatePost = async (updatedPostData) => {
		const updatedPost = await postAPI.update(updatedPostData);
		this.setState({ updatedPost }, () => this.props.history.push('/'));
	};

	handleUpdatePet = async (updatedPetData) => {
		const updatedPet = await petAPI.update(updatedPetData);
		const newPetsArray = this.state.pets.map((p) =>
			p._id === updatedPet._id ? updatedPet : p
		);
		this.setState({ pets: newPetsArray }, () =>
			this.props.history.push('/')
		);
	};

	handleUpdateUser = async (updatedUserData) => {
		const updatedUser = await userAPI.update(updatedUserData);
		console.log('update user', updatedUser);
		this.setState({ user: updatedUser }, () =>
			this.props.history.push('/')
		);
	};

	handleAddPost = async (newPostData) => {
		const newPost = await postAPI.create(newPostData);
		newPost.user = this.state.user._id;
		this.setState(
			(state) => ({
				posts: [state.posts, newPost],
			}),
			() => this.props.history.push('/')
		);
	};

	handleSearch = async (formData) => {
		const searchResults = await petAPI.getApplicable(formData);
		this.setState({ searchResults });
	};

	async componentDidMount() {
		const user = await authService.getUser();
		if (user) {
			const pets = await petAPI.getPets();
			const followedPets = await petAPI.getFollowedPets();
			this.setState({ user, pets, followedPets });
		}
	}

	render() {
		const { user } = this.state;
		return (
			<>
				<NavBar user={user} handleLogout={this.handleLogout} />
				<div id="main-container">
					<Route
						exact
						path="/"
						render={() =>
							user ? (
								<div>
									<OwnerFeed
										user={this.state.user}
										followedPets={this.state.followedPets}
										pets={this.state.pets}
									/>
								</div>
							) : (
								<LandingContent />
							)
						}
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
						render={() =>
							user ? <Users /> : <Redirect to="/login" />
						}
					/>
					<Route
						exact
						path="/pet"
						render={({ history, location }) =>
							user ? (
								<Pet
									history={history}
									user={user}
									location={location}
									pets={this.state.pets}
								/>
							) : (
								<Redirect to="/login" />
							)
						}
					/>
					<Route
						exact
						path="/edit-pet"
						render={({ history, location }) =>
							user ? (
								<EditPet
									history={history}
									location={location}
									handleUpdatePet={this.handleUpdatePet}
								/>
							) : (
								<Redirect to="/login" />
							)
						}
					/>
					<Route
						path="/pets/add"
						render={() => (
							<AddPet
								user={this.state.user}
								handleAddPet={this.handleAddPet}
							/>
						)}
					/>
					<Route
						exact
						path="/user"
						render={({ location }) => (
							<OwnerProfile
								user={this.state.user}
								pets={this.state.pets}
								followedPets={this.state.followedPets}
								location={location}
								handleDeleteUser={this.handleDeleteUser}
							/>
						)}
					/>
					<Route
						exact
						path="/edit-user"
						render={({ location }) => (
							<EditUser
								location={location}
								handleUpdateUser={this.handleUpdateUser}
							/>
						)}
					/>
					<Route
						exact
						path="/posts/add"
						render={({ location }) => (
							<AddPost
								location={location}
								user={this.state.user}
								handleAddPost={this.handleAddPost}
							/>
						)}
					/>
					<Route
						exact
						path="/search"
						render={({ location }) => (
							<Search
								location={location}
								user={this.state.user}
								handleSearch={this.handleSearch}
							></Search>
						)}
					/>
					<Route
						exact
						path="/archive"
						render={({ location }) => (
							<ArchivePage
								location={location}
								user={this.state.user}
							/>
						)}
					/>
					<Route
						exact
						path="/post"
						render={({ history, location }) =>
							user ? (
								<Post
									history={history}
									user={user}
									location={location}
								/>
							) : (
								<Redirect to="/login" />
							)
						}
					/>
					<Route
						exact
						path="/edit-post"
						render={({ history, location }) =>
							user ? (
								<EditPost
									history={history}
									location={location}
									handleUpdatePost={this.handleUpdatePost}
								/>
							) : (
								<Redirect to="/login" />
							)
						}
					/>
					<Route exact path="/pets" render={() => <Pets />} />
				</div>
			</>
		);
	}
}

export default App;
