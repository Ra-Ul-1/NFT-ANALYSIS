import React, { Component } from "react";

const axios = require('axios');




class Asset extends Component {
        state = {
            // Create empty array
            assets: []
        };
        
        componentDidMount() {
            //Inside the componentdidmount add an axios request to this API
            // To Do: need to use a response function for the promise here
            // Need to have a route to my own server now: e.g. getLatestListings
            
        }

        // Set the state (empty array) to the response of the API
// Render: map over the state array and pick whatever you want
        render() {
            return( 
            <header>Hello</header>
            )
        }
    }

    export default Asset;


