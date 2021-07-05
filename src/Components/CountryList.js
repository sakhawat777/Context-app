import React, { Component } from 'react';
import axios from 'axios';

export default class CountryList extends Component {
	constructor() {
		super();
		this.state = {
			myData: [],
		};
	}

	componentDidMount() {
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then((response) => {
				this.setState({ myData: response.data });
			})
			.catch((error) => {
				alert('Something Went to Wrong');
			});
	}
	render() {
		const myList = this.state.myData;
		const countryName = myList.map((myList) => {
			return <li key={myList.name}>{myList.name}</li>;
		});
		return (
			<div>
				<ul>{countryName}</ul>
			</div>
		);
	}
}
