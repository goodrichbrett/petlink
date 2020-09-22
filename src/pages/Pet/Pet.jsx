import React from 'react';
import PetCard from '../../components/PetCard/PetCard';
import SummaryCard from '../../components/SummaryCard/SummaryCard'

const Pet = ({location, user}) => {
	return (
		<div>
			<h1 style={{ margin: '0 0 1em 0', textAlign: 'center' }}>{location.state.pet.alias}</h1>
			<PetCard pet={location.state.pet} user={user} />
			<div style={{textAlign: 'center' }}>
				<h1 style={{marginTop: '1em', marginBottom: '1em', textAlign: 'center' }}>Activity</h1>
				<p>{location.state.pet.posts.length ? 
					//summarycard should display post not pet
					location.state.pet.posts.map((post, idx) => (
						<SummaryCard key={idx} pet={location.state.pet}/>
					))
					:
					'No Posts Available.'
				}</p>
			</div>
		</div>
	);
};

export default Pet;
