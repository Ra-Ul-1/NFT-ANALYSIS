import React, { Component } from 'react'
import axios from 'axios';

export default class AddProject extends Component {

    state = {
        assets: []
    }

    handleSubmit = event => {
        event.preventDefault();
        // make a post request to the server
        axios.post('http://localhost:5005/marketOverview', {
            // add name of the asset to the array - need to clarify here
            assets: [this.state.asset.name]
        })
        .then(() => {
            console.log(this.state)
            })
        }
        render() {
            return (
                <div>
                <img src = "./assets/EmptyStar.png"/>
                {/* <h3 onSubmit={this.handleSubmit}>{this.state}</h3> */}
                </div>
            )
        }

    }
