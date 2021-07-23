import React, { Component } from "react";
const router = require("express").Router();
const axios = require('axios');

class Asset extends Component {
    constructor(props) {
        // really necessary?
        super(props);
        this.state = {
            // Create empty array
            assets: []
        };

        componentDidMount() {//Inside the componentdidmount add an axios request to this API
            // To Do: need to use a response function for the promise here
            axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
                headers: { 'X-CMC_PRO_API_KEY': '68bb4f81-fd88-4c2a-a258-c72ad4c1f56e' }
            })

        }
// Set the state (empty array) to the response of the API
// Render: map over the state array and pick whatever you want
    }
}