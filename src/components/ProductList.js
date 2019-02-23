import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
	// state = {
	// 	type,
	// 	direction
	// }

	// changeSort ()
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="our" title="products" />
						<div className="row">
							<div className="col-4">
								<ul className="my-2 text-title">
									<p>Sort by:</p>
									<li>Name A-Z</li>
									<li>Name Z-A</li>
									<li>Price:Low to High</li>
									<li>Price:High to Low</li>
								</ul>
							</div>
							<div className="col-8 products">
								<ProductConsumer>
								{(value)=>{
									return value.products.map( product => {
										return <Product key={product.id} product={ product } ></Product>
									})
								}}
								</ProductConsumer>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
