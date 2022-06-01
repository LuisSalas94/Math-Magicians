/* eslint-disable */
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
	<nav className="navbar">
		<span className="title">Math Magicians</span>
		<ul>
			<li>
				<NavLink
					to="/"
					className={(navData) => (navData.isActive ? "active" : "link")}
				>
					Home{" "}
				</NavLink>
			</li>
			<li>
				<span>|</span>
			</li>
			<li>
				<NavLink
					to="/calculator"
					className={(navData) => (navData.isActive ? "active" : "link")}
				>
					Calculator{" "}
				</NavLink>
			</li>
			<li>
				<span>|</span>
			</li>
			<li>
				<NavLink
					to="/quote"
					className={(navData) => (navData.isActive ? "active" : "link")}
				>
					Quote
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default Navbar;
