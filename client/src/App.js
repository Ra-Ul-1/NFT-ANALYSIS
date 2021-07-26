import React from "react";
import "./App.css";
import AssetList from "./components/AssetList"
import Asset from "./components/Asset"
import Favourite from "./components/Favourite";
import Navbar from "./components/Navbar";
import { Route, Redirect } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render () {
  return (
    <div className="App">
            <Route
          exact path='/'
          component={AssetList}
        />
    </div>
  );
  }
}


export default App;
