import React, { Component } from 'react'

class OwnerProfile extends Component {
  state = { 
    followedPets: []
   }

  // [] Call petsAPI services to get all followed pets
	async componentDidMount() {
		const followedPets = await petsAPI.getPets(this.props.user.followedPets);
		this.setState({followedPets});
    console.log(this.state)
  }
  render() { 
    return (  );
  }
}
 
export default OwnerProfile;