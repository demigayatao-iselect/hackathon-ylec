import * as React from 'react';
import ylecLogo from '../../images/ylec.png';
import '../banner/banner.css';
import LoginForm from '../features/login-form';
import { withRouter } from 'react-router-dom';

class Banner extends React.Component {
  render() {
    return (
      <div className="banner-container">
        <img
          onClick={() => (window.location.href = '/')}
          className="ylec-logo"
          src={ylecLogo}
        />
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end'
          }}
        >
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default withRouter(Banner);
