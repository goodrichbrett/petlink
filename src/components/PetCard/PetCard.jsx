import React from 'react';
import { Link } from 'react-router-dom';
import './PetCard.css';
import * as userAPI from '../../services/userService';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from 'reactstrap';

const PetCard = ({ pet, user }) => {
	return (
		<>
			<div id="petcard">
				<Card>
					<CardImg
						top
						width="100%"
						src={pet.avatar}
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
								<b>{pet.name}</b>
							</CardTitle>
							<Link
								to={{
									pathname: '/edit-pet',
									state: { pet },
								}}
							>
								<CardText>
									<i class="far fa-edit"></i>
								</CardText>
							</Link>
						</div>
						<ul>
							<li>{pet.type}</li>
							<li>{pet.breed}</li>
							<li>{pet.gender}</li>
							<li>{pet.age}</li>
							<li>Conditions: {pet.conditions.join(', ')}</li>
							{/* followers? */}
						</ul>
					</CardBody>
					<Link
						to={{
							pathname: '/posts/add',
							state: { pet },
						}}
					>
						<div id="cardButtons">
							<Button>Add Post</Button>
						</div>
					</Link>
					{user.following.includes(pet._id) ? (
						<Button disabled>Following Pet</Button>
					) : (
						<Button onClick={() => userAPI.followPet(pet)}>
							Follow Pet
						</Button>
					)}
					<div id="cardButtons">
						<Button>
							<Link
								to={{
									pathname: '/archive',
									// state: { user },
								}}
							>
								See Archived
							</Link>
						</Button>
					</div>
				</Card>
			</div>
		</>
	);
};

export default PetCard;
