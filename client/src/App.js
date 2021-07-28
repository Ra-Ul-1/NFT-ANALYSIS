import "./App.css";
import React from "react";
import AssetList from "./components/AssetList"
import Asset from "./components/Asset"
import AddFavourite from "./components/AddFavourite";
import Navbar from "./components/Navbar";
import { Route, Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
// import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  state = {
    user: this.props.user,
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render () {
    return (
      <div className="App">
            <Navbar/>
              <Route
            exact path='/'
            component={AssetList}
          />
          <Route
            exact path='/favourites'
            component={AddFavourite}
          />
          <Route
            exact path='/signup'
            // component={Signup}
            render={props => <Signup setUser={this.setUser} {...props} />}
            />
          <Route
          exact path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />
      </div>
    );
    }
}


export default App;
