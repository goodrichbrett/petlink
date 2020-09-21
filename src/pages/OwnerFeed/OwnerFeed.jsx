import React, { Component } from 'react';
import SummaryCard from '../../components/SummaryCard/SummaryCard';

const OwnerFeed = (props) => {
	return (
		<>
			{props.followedPets.map((pet) => (
				<SummaryCard key={pet._id} pet={pet} />
			))}
		</>
	);
};

export default OwnerFeed;
