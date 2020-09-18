import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	NavbarText
  } from 'reactstrap';
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
  

	return (
		<>
			{user ? (
				<div>
					<Navbar color="light" light expand="md">
					{/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href='/'>Welcome, {user.name}</NavLink>
						</NavItem>
						{/* The following link should be removed once add pets is added to owner profile */}
						<NavItem>
							<NavLink href="/pets/add">Add Pet</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/users">Users</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href=" " onClick={handleLogout}>Log Out</NavLink>
						</NavItem>
							</Nav>
							<NavbarText>
								{/* this will be replaced with a real user image */}
								<Link 
								to={{
									pathname: '/user',
									state: {user}
								}}
								><img src={user.avatar ? user.avatar : "https://picsum.photos/50/50"} id='user-avatar'/>
								</Link>
							</NavbarText>
						</Collapse>
					</Navbar>
				</div>
			) : (
				<div>
					<Navbar color="light" light expand="md">
					{/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href='/'>Welcome to PetLink!</NavLink>
						</NavItem>
						{/* The following link should be removed once add pets is added to owner profile */}
						<NavItem>
							<NavLink href="/login">Log In</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/signup">Sign Up</NavLink>
						</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</div>
			)}
		</>
	);
};

export default NavBar;
