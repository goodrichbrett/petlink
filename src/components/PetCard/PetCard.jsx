import React from 'react';
import { Link } from 'react-router-dom';
import './PetCard.css';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, Button
  } from 'reactstrap';

const PetCard = ({ pet }) => {
	return (
		<>
			<div id="petcard">
				<Card>
					<CardImg top width="100%" src={pet.avatar} alt="Card image cap" />
					<CardBody>
						<div style={{display:'flex', justifyContent: 'space-between'}}>
						<CardTitle><b>{pet.name}</b></CardTitle>
						<Link 
						to={{
							pathname: '/edit-pet',
							state: { pet },
						}}
						>
							<CardText><i class="far fa-edit"></i></CardText>
						</Link>
						</div>
						<ul>
							<li>{pet.type}</li>
							<li>{pet.breed}</li>
							<li>{pet.gender}</li>
							<li>{pet.age}</li>
							<li>Illnesses: {pet.illnesses.join(', ')}</li>
							{/* followers? */}
						</ul>
					</CardBody>
						<Link 
						to={{
							pathname: '/post/add',
							state: { pet },
						}}
						>
						<div id='cardButtons'>
							<Button>Add Post</Button>
						</div>
						</Link>
				</Card>
		</div>
	</>
	);
};

export default PetCard;
