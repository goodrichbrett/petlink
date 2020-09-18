import React, { Component } from 'react'
import * as petAPI from '../../services/petService';

class OwnerProfile extends Component {
  state = { 
    followedPets: []
   }

	async componentDidMount() {
		const followedPets = await petAPI.getPets(this.props.user.followedPets);
		this.setState({followedPets});
    console.log(this.state)
  }
  render() { 
    return ( 
    <> 
    <h1>Owner Profile Page</h1>
    </>
     );
  }
}
 
export default OwnerProfile;