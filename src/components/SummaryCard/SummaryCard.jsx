import React from 'react';
import { Link } from 'react-router-dom';

const SummaryCard = ({ pet }) => {
	return (
		<>
			<Link
				to={{
					pathname: '/pet',
					state: { pet },
				}}
			>
				<img src="https://picsum.photos/100/100" alt="" />
				<h1>{pet.name}</h1>
				<h3>Current Post Information Here</h3>
			</Link>
		</>
	);
};

export default SummaryCard;
