import * as React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };

    window.loginComponent = this;
  }

  handleLogin = () => this.setState({ isLoggedIn: true });

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}
      >
        <div style={{ marginTop: 11, display: 'flex', alignItems: 'baseline' }}>
          {!isLoggedIn ? (
            <>
              <Input style={{ width: 190 }} placeholder="Enter your email" />
              <Input.Password
                style={{ width: 190, marginLeft: 12 }}
                placeholder="Enter your password"
              />

              <Button
                onClick={this.handleLogin}
                style={{ height: 29, marginLeft: 12 }}
                type="primary"
              >
                Sign-in
              </Button>
            </>
          ) : (
            <span>Hi Demi John Gayatao!</span>
          )}
        </div>
        {!isLoggedIn && (
          <span>
            Don't have an account yet? sign up <a>here</a>
          </span>
        )}
      </div>
    );
  }
}

export default LoginForm;
