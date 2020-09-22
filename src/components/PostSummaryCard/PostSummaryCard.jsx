import React from 'react';
import { Link } from 'react-router-dom';

const PostSummaryCard = ({ post, pet }) => {
	return (
		<Link
			id="summaryCard"
			to={{
				//this should redirect to /post from the news feed and to /pet from the owner profile
				pathname: '/post',
				state: { post: post },
			}}
		>
			<span id="summaryCard-content">
				<h1>{post.title}</h1>
				<h3>{post.date}</h3>
			</span>
		</Link>
	);
};
export default PostSummaryCard;
