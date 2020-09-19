import React from 'react';
import { Link } from 'react-router-dom';
import './SummaryCard.css';

const SummaryCard = ({ pet }) => {
	return (
			<Link id='summaryCard'
				to={{
					pathname: '/pet',
					state: { pet },
				}}
			>
				<span id='summaryCard-img'>
				<img id='petAvatar' src="https://picsum.photos/100/100" alt="" />
				</span>
				<span id='summaryCard-content'>
				<h1>{pet.name}</h1>
				<h3>Post Title Here</h3>
				</span>	
			</Link>
	);
};

export default SummaryCard;
