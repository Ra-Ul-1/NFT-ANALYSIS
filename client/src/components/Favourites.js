import React, { Component } from "react";
import AssetList from "./AssetList";
import AddFavourite from "./AddFavourite";


const axios = require('axios');

export default class Favourites extends Component {

    state = {
		favourites: []
	}

	getData = () => {
		axios.get(`/favourites/${this.props.user.username}`)
			.then(response => {
				console.log(response);
				this.setState({
					favourites: response.data
				})
			})
			.catch(err => console.log(err))
	}

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<div>
				<AssetList projects={this.state.favourites} />
			</div>
		)
	}
}
