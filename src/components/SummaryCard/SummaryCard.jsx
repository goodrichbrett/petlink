import React from 'react';
import { Link } from 'react-router-dom';
import './SummaryCard.css';

const SummaryCard = ({ pet }) => {
	return (
			<Link id='summaryCard'
				to={{
					//this should redirect to /post from the news feed and to /pet from the owner profile
					pathname: '/pet',
					state: { pet },
				}}
			>
				<span id='summaryCard-img' style={{ backgroundImage: `url(${pet.avatar})` }}>
				{
					//<img id='petAvatar' src="https://picsum.photos/100/100" alt="" />
				}
				</span>
				<span id='summaryCard-content'>
				<h1>{pet.name}</h1>
				<h3>Post Title Here</h3>
				</span>	
			</Link>
	);
};

export default SummaryCard;
