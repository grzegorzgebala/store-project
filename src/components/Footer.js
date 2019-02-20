import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NavWrapper } from './Button';

export default class Footer extends Component {
	render () {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 footer">
				{/* 
				https://www.iconfinder.com/icons/1243689/call_phone_icon
				Creative Commons (Attribution 3.0 Unported);
				https://www.iconfinder.com/Makoto_msk */}
				<div className="navbar-brand">All rights reserved</div>
				<ul className="navbar-nav ml-auto">
					<Link to="/">
					<li className="nav-link">Home</li>
					</Link>
					<Link to="/faq">
						<li className="nav-link">Faq</li>
					</Link>
					<Link to="/regulations">
						<li className="nav-link">Regulations</li>
					</Link>
					<Link to="/contact">
						<li className="nav-link">Contact</li>
					</Link>
				</ul>
			</NavWrapper>
		)
	}
}