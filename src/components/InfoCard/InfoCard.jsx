import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

const InfoCard = ({ user }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);
	return (
		<div>
			<h1>About You:</h1>
			{user.isVet ? (
				<>
					<h3>Name: {user.name}</h3>
					<h3>Email:{user.email}</h3>
					<h3>Phone Number:{user.phone}</h3>
					<h3>License Number: {user.licenseNo}</h3>
					<h3>State License Number:{user.licenseState}</h3>
				</>
			) : (
				<>
					<h3>Name: {user.name}</h3>
					<h3>Email:{user.email}</h3>
					<h3>
						Phone Number:
						{user.phone ? user.phone : ' No Phone Number'}
					</h3>
				</>
			)}
			<Link
				to={{
					pathname: '/edit-user',
					state: { user },
				}}
			>
				Edit Profile Info
			</Link>
			&nbsp;&nbsp;&nbsp;
			<Link
				to={{
					pathname: '/pets/add',
					state: { user },
				}}
			>
				Add new Pet
			</Link>
			<Dropdown isOpen={dropdownOpen} toggle={toggle}>
				<DropdownToggle caret>More Options</DropdownToggle>
				<DropdownMenu>
					<Link
						to={{
							pathname: `/${user._id}/`,
							state: { user },
						}}
					>
						<DropdownItem>Delete Account</DropdownItem>
					</Link>
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default InfoCard;
