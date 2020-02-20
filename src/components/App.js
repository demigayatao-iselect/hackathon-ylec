import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UploadBill from './features/upload-bill';
import ManualRegistration from './features/registration';
import Recommendation from './features/recommendation';
import Login from '../components/features/login';
import Banner from './banner';

import './App.css';
import ApplyNow from './features/apply-now';
import Success from './features/success';

function App() {
  return (
    <div className="App">
      <Banner />
      <Router>
        <Switch>
          <Route path="/" exact component={UploadBill} />
          <Route path="/recommendation" component={Recommendation} />
          <Route path="/registration" component={ManualRegistration} />
          <Route path="/apply-now" component={ApplyNow} />
          <Route path="/success" component={Success} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
