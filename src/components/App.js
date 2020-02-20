import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UploadBill from './features/upload-bill';
import Recommendation from './features/recommendation';
import { Banner } from './banner';

import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <Router>
        <Switch>
          <Route path="/upload-bill" component={UploadBill} />
          <Route path="/recommendation" component={Recommendation} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
