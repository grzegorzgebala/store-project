import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Contact extends Component {
	render() {
		return (
			<div className="container py-5">
				<div className="row">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1 className="my-5">Contact</h1>
						<h3>Mobile Shop</h3>
						<p>41-605 Gliwice</p>
						<p>ul. Spokojna 10</p>
						<Map google={this.props.google} zoom={14}>
				        <Marker onClick={this.onMarkerClick}
				                name={'Current location'} />
				                
				      </Map>
					</div>
				</div>
			</div>
		);
	}
}

export default GoogleApiWrapper({
  apiKey: ("")
})(Contact)
