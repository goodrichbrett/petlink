import React, { Component } from 'react';
import SummaryCard from '../../components/SummaryCard/SummaryCard'

class OwnerFeed extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <h1 style={{ margin: '0 0 1em 0', textAlign: 'center' }}>News Feed</h1>
      {this.props.followedPets.map(pet => (
        // Update SummaryCard component once we have more information on a pets Post.
        <SummaryCard key={pet._id} pet={pet}/>
      ))}
      </>
     );
  }
}
 
export default OwnerFeed;