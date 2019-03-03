import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import Pagination from "react-js-pagination";
import "../../node_modules/bootstrap-less/bootstrap/bootstrap.less";
// require("bootstrap/less/bootstrap.less");
import './ProductList.css'


const _ = require('lodash');

export default class ProductList extends Component {
	state = {
		activePage: 1
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
									<li>
										<button onClick={ this.sortByName }>Name A-Z</button>
									</li>
									<li>
										<button>Name Z-A</button>
									</li>
									<li>
										<button>Price:Low to High</button>
									</li>
									<li>
										<button>Price:High to Low</button>
									</li>
								</ul>
							</div>
							<div className="col-8 products">
								<ProductConsumer>
									{(value) => {
												return value.products.map( product => {
													return <Product key={ product.id } product= { product } ></Product>
											})
									}}
								</ProductConsumer>
								<Pagination
									activePage={ this.state.activePage }
									itemsCountPerPage={ 4 }
									totalItemsCount={ 450 }
									pageRangeDisplayed={ 8 }
									onChange={ this.handlePageChange.bind(this) }
								/>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
