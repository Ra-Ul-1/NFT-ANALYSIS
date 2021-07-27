import React from "react";
import "./App.css";
import AssetList from "./components/AssetList"
import Asset from "./components/Asset"
import AddFavourite from "./components/AddFavourite";
import Navbar from "./components/Navbar";
import { Route, Redirect, Switch } from 'react-router-dom';
import Signup from './components/auth/Signup';
// import { Route, Switch } from 'react-router-dom'
import './App.css';



class App extends React.Component {
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
        <Switch>
          <Route exact path="/signup" component={Signup} /> {/* <== !!! */}
          {/* <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route exact path="/projects/:id/tasks/:taskId" component={TaskDetails} /> */}
        </Switch>
 
    </div>
  );
  }
}


export default App;
