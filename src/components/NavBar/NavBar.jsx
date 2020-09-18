import React from 'react';

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<nav>
					<div className="nav-wrapper">
						<ul id="nav-mobile" className="right">
							<li>
								<a href=" " className="nav-link">
									Welcome, {user.name}
								</a>
							</li>
							<li>
								<a href="/pets/add" className="nav-link">
									Add Pet
								</a>
							</li>
							<li>
								<a href="/users" className="nav-link">
									Users
								</a>
							</li>
							<li>
								<a
									href=" "
									className="nav-link"
									onClick={handleLogout}
								>
									Log Out
								</a>
							</li>
							{ user ? (
								<li>
									{/* this will be replaced with a real user image */}
									<img src="https://picsum.photos/50/50"/>
								</li>
							) : ''}
						</ul>
					</div>
				</nav>
			) : (
				<nav>
					<div className="nav-wrapper">
						<ul id="nav-mobile" className="right">
							<li>
								<a href="/login" className="nav-link">
									Log In
								</a>
							</li>
							<li>
								<a href="/users" className="nav-link">
									Users
								</a>
							</li>
							<li>
								<a href="/signup" className="nav-link">
									Sign Up
								</a>
							</li>
						</ul>
					</div>
				</nav>
			)}
		</>
	);
};

export default NavBar;
