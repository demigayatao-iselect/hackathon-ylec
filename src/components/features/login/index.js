import * as React from 'react';
import energyBackground from '../../../images/energybackground.png';
import { Navigation } from '../../navigation';
import { Button } from 'antd';

import './login.css';
import { Label } from '../../label';

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <div>
          <div className="login">
            <div style={{ width: 446 }}>
              <Label text="ENERGY COMPARISON" />
              <div style={{ display: 'flex' }}>
                <Button
                  onClick={this.handleNextRoute}
                  style={{ height: 42, width: 126, marginTop: 18 }}
                  type="primary"
                >
                  Manual Entry
                </Button>
              </div>
            </div>
            <div className="image-block">
              <img className="energy-background" src={energyBackground} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
