import React from 'react';
import { Link } from 'react-router-dom';
import './SummaryCard.css';

const SummaryCard = ({ post }) => {
	return (
		<Link
			id="summaryCard"
			to={{
				//this should redirect to /post from the news feed and to /pet from the owner profile
				pathname: '/post',
				state: { post },
			}}
		>
			<span id="summaryCard-content">
				<h1>{post.title}</h1>
				<p>{post.content}</p>
				<h3>Post Title Here</h3>
			</span>
		</Link>
	);
};

export default SummaryCard;
