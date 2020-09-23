import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

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
			<span id="summaryCard-img" style={{ backgroundColor: `#7DCE82` }}>
				{
					//<img id='petAvatar' src="https://picsum.photos/100/100" alt="" />
				}
			</span>
			<span>
				<h3>{post.title}</h3>
				<h3>{new Date(post.date).toLocaleDateString()}</h3>
			</span>
		</Link>
	);
};
export default PostSummaryCard;
