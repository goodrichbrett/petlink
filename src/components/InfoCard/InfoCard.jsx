import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InfoCard.css';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from 'reactstrap';

const InfoCard = ({ user, handleDeleteUser }) => {
	return (
		<>
			<div id="usercard">
				<Card>
					<CardImg
						top
						width="100%"
						src={user.avatar}
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
								<b>{user.name}</b>
							</CardTitle>
							<Link
								to={{
									pathname: '/edit-user',
									state: { user },
								}}
							>
								<CardText>
									<i class="far fa-edit"></i>
								</CardText>
							</Link>
						</div>
						<ul>
							<li>{user.email}</li>
							<li>{user.type ? 'Vet' : 'Pet Owner'}</li>
							{user.type ? (
								<>
									<li>License: {user.licenseState}</li>
									<li>{user.licenseNo}</li>
								</>
							) : (
								<></>
							)}
						</ul>
					</CardBody>
					<Link
						to={{
							pathname: '/pets/add',
							state: { user },
						}}
					>
						<div id="cardButtons">
							<Button>Add Pet</Button>
						</div>
					</Link>
					<Link
						to={{
							pathname: `/${user._id}/`,
							state: { user },
						}}
					>
						<div id="cardButtons">
							<Button
								type="submit"
								onClick={() => handleDeleteUser(user._id)}
							>
								Delete Account
							</Button>
						</div>
					</Link>
				</Card>
			</div>
		</>
	);
};

export default InfoCard;
