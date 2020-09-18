import React, { Component } from 'react';
import SummaryCard from '../../components/SummaryCard/SummaryCard'

class OwnerFeed extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <h1>News Feed</h1>
      {/* App.js will pass another prop once Brett finishes the service file which will hold an array of populated pet Data. */}
      <SummaryCard />
      </>
     );
  }
}
 
export default OwnerFeed;