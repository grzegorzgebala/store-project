import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import Pagination from "react-js-pagination";
// import "../../../node_modules/bootstrap-less/bootstrap/mixins/bootstrap.less";
// require("bootstrap/less/bootstrap.less");


const _ = require('lodash');

export default class ProductList extends Component {
	state = {
		objects: {},
		activePage: 1
		// type: 
		// direction
	}

	// changeSort = (product) => {
	// 	var finalProduct = _.sortBy(product, [{'id' : 'String'}, {'name':'product'}]);
	// 	this.setState(() => {
	// 		return {objects: finalProduct}
	// 	})

	// }

	changeSort = (product) => {
		let sortedProducts = product.sort();
		return sortedProducts;
	}

	handlePageChange(pageNumber) {
	    console.log(`active page is ${pageNumber}`);
	    this.setState({activePage: pageNumber});
	  }

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
								{(value) => {
									return value.products.map( product => {
										return <Product key={product.id} product= { product } ></Product>
									})
								}}
								</ProductConsumer>
							</div>
							<Pagination
								activePage={this.state.activePage}
								itemsCountPerPage={6}
								totalItemsCount={450}
								pageRangeDisplayed={8}
								onChange={this.handlePageChange.bind(this)}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
