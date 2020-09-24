import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

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
							<Link
								to={{
									pathname: '/edit-post',
									state: { post },
								}}
							>
								<CardText>
									<i class="far fa-edit"></i>
								</CardText>
							</Link>
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
