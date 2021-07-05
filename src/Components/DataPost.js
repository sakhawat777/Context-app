import React, { Component } from 'react';
import axios from 'axios';
export default class DataPost extends Component {
	constructor() {
		super();
		this.state = {
			postData: ' ',
			postResult: ' ',
		};
	}
	onChangeHandler = (event) => {
		var data = event.target.value;
		this.setState({ postData: data });
	};
	onClickHandler = () => {
		axios
			.post('C:/xampp/htdocs/test/test.php', this.state.postData)
			.then((response) => {
				this.setState({ postResult: response.data });
				alert(this.state.postResult);
			})
			.catch((error) => {
				alert('Something went to Wrong');
			});
	};
	render() {
		return (
			<div>
				<input type='text' onChange={this.onChangeHandler}></input>
				<button onClick={this.onClickHandler}>Send</button>
			</div>
		);
	}
}
