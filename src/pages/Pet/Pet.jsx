import React from 'react';
import PetCard from '../../components/PetCard/PetCard';

const Pet = (props) => {
	return (
		<div>
			<h1 style={{ margin: '0 0 1em 0', textAlign: 'center' }}>{props.location.state.pet.alias}</h1>
			<PetCard pet={props.location.state.pet} />
			<h1 style={{marginTop: '1em', marginBottom: '1em', textAlign: 'center' }}>Activity</h1>
		</div>
	);
};

export default Pet;
