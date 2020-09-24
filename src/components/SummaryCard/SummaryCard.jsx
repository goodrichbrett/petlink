import React from 'react';
import { Link } from 'react-router-dom';
import './SummaryCard.css';
const SummaryCard = ({ pet }) => {
	return (
		<Link
			id="summaryCard"
			to={{
				//this should redirect to /post from the news feed and to /pet from the owner profile
				pathname: '/pet',
				state: { pet },
			}}
		>
			<span
				id="summaryCard-img"
				style={{ backgroundImage: `url(${pet.avatar})` }}
			></span>
			<span id="summaryCard-content">
				<h3 style={{ padding: '0.5em' }}>{pet.name}</h3>
			</span>
		</Link>
	);
};
export default SummaryCard;
