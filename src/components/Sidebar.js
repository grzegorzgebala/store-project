import React, { Component } from 'react';

export default class Sidebar extends Component {
	render () {
		return (
			<ul className="col-3 my-2 text-title">
				<p>Sort by:</p>
				<li>Name A-Z</li>
				<li>Name Z-A</li>
				<li>Price:Low to High</li>
				<li>Price:High to Low</li>
			</ul>
		)
	}
}