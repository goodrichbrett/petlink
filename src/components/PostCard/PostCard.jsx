import React from 'react';
import { Link } from 'react-router-dom';
import * as userAPI from '../../services/userService';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from 'reactstrap';
import { PromiseProvider } from 'mongoose';

const PostCard = ({ post, user }) => {
	return (
		<>
			<div id="petcard">
				<Card>
					<CardImg
						top
						width="100%"
						src="https://picsum.photos/50/50"
						alt="Card image cap"
					/>
					<CardBody>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<CardTitle>
								<b>{post.title}</b>
							</CardTitle>
							<CardText>
								<i class="far fa-edit"></i>
							</CardText>
						</div>
						<p>{post.content}</p>
						<blockquote>
							{new Date(post.date).toLocaleDateString()}
						</blockquote>
					</CardBody>
				</Card>
			</div>
		</>
	);
};

export default PostCard;
