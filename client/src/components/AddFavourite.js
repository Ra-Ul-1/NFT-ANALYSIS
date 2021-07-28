import React, { Component } from 'react'
import axios from 'axios';

export default class AddFavourite extends Component {

    state = {
        symbol: '',
        quantity: '',
    }


    // form: when user adds favourite - ask them how much quantity they want and send to backend

    handleSubmit = event => {
        event.preventDefault();
        // make a post request to the server
        axios.post('/favourites', {
            // add name of the asset to the array - need to clarify here
            symbol: this.state.symbol,
			quantity: this.state.quantity,
            owner: this.props.user.username
        })
        .then(() => {
            this.setState({
                symbol: '',
                quantity: ''
            })
            // trigger getData() in Projects.js to retrieve the current list
            // of projects from the server
            // this.props.getData();
            this.props.history.push('/favourites');
        })
        .catch(err => console.log(err))
        }

        handleChange = event => {
            const { name, value } = event.target;
            this.setState({
                [name]: value
            })
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
				<label htmlFor="symbol">Symbol:</label>
				<input
					type="text"
					id="symbol"
					name="symbol"
					value={this.state.symbol}
					onChange={this.handleChange}
				/>
                <label htmlFor="quantity">Quantity:</label>
				<input
					type="number"
					id="quantity"
					name="quantity"
					value={this.state.quantity}
					onChange={this.handleChange}
				/>
                <button type="submit">Hodl this crypto</button>
                </form>
            )
        }

    }
