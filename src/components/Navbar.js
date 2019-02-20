import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { NavWrapper } from './Button';


export default class Navbar extends Component {
	render () {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				{/* 
				https://www.iconfinder.com/icons/1243689/call_phone_icon
				Creative Commons (Attribution 3.0 Unported);
				https://www.iconfinder.com/Makoto_msk */}
				<Link to="/">
					<img src={logo} alt="store" className="navbar-brand" />	
					<div className="navbar-brand">Mobile shop</div>
				</Link>
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
				<Link to="/cart">
					<ButtonContainer>
						<span className="mr-2">
							<i className="fas fa-cart-plus" />
						</span>
						My cart
					</ButtonContainer>
				</Link>
			</NavWrapper>
		)
	}
}


