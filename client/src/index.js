import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";


// get the user from the backend and pass it to App.js as a prop
axios.get('/api/auth/loggedin')
  .then(response => {
    console.log('logged in user: ', response.data);
    const user = response.data;
    ReactDOM.render(
      <BrowserRouter>
      {/* passing it to app,js as a prop - i.e. user */}
        <App user={user} />
      </BrowserRouter>,
      document.getElementById('root')
    );
  })
  .catch(err => console.log(err))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
