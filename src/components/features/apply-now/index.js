import * as React from 'react';
import reg3 from '../../../images/reg3.jpg';
import reg4 from '../../../images/reg4.jpg';
import { Navigation } from '../../navigation';
import { Label } from '../../label';
import { Button } from 'antd';
import energypage2 from '../../../images/energypage2.png';

class ApplyNow extends React.Component {
  handleContinue = () => {
    this.props.history.push('/success');
  };

  handleBack = () => {
    this.props.history.push('/recommendation');
  };

  render() {
    return (
      <div className="container">
        <Navigation currentPage="Apply now" />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="registration">
            <div style={{ width: 446, position: 'relative' }}>
              <img
                style={{ height: window.loginComponent.state.isLoggedIn ? 254 : 556 }}
                src={window.loginComponent.state.isLoggedIn ? reg4 : reg3}
              />
              <Button
                onClick={this.handleContinue}
                style={{
                  height: 31,
                  width: 101,
                  bottom: window.loginComponent.state.isLoggedIn ? 273 : 13,
                  left: 48,
                  position: 'absolute'
                }}
                type="primary"
              >
                Continue
              </Button>

              <Button
                onClick={this.handleBack}
                style={{
                  height: 31,
                  width: 101,
                  bottom: window.loginComponent.state.isLoggedIn ? 273 : 13,
                  left: 160,
                  position: 'absolute'
                }}
                type="default"
              >
                Back
              </Button>
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

export default ApplyNow;
