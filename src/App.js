import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Provider } from './Context';


function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Index}/>
        </Switch>

      </div>
      </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
