import * as React from 'react';
import energypage2 from '../../../images/energypage2.png';
import { Navigation } from '../../navigation';
import { Label } from '../../label';
import { Button } from 'antd';
import manual_reg2 from '../../../images/manual_reg2.jpg';

import './registration.css';

class ManualRegistration extends React.Component {
  render() {
    return (
      <div className="container">
        <Navigation currentPage="Registration" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="registration">
            <div style={{ width: 446 }}>
              <Label text="REGISTRATION" />
              <img style={{ height: 556 }} src={manual_reg2} />
              <div style={{ display: 'flex' }}>
                <Button
                  onClick={this.handleNextRoute}
                  style={{ height: 42, width: 126 }}
                  type="primary"
                >
                  Register
                </Button>
              </div>
            </div>
            <div className="image-block">
              <img className="energy-background" src={energypage2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManualRegistration;
