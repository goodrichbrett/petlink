import React from 'react';
import PetCard from '../../components/PetCard/PetCard';

const Pet = ({location, user}) => {
	return (
		<div>
			<h1 style={{ margin: '0 0 1em 0', textAlign: 'center' }}>{location.state.pet.alias}</h1>
			<PetCard pet={location.state.pet} user={user} />
			<h1 style={{marginTop: '1em', marginBottom: '1em', textAlign: 'center' }}>Activity</h1>
		</div>
	);
};

export default Pet;
