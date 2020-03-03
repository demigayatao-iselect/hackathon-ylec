import * as React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { SocialIcon } from 'react-social-icons';
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
        <div style={{ display: 'flex' }}>
          {!isLoggedIn && (
            <>
              <span style={{ alignSelf: 'center' }}>
                Don't have an account yet? sign up <a>here</a>
              </span>
              <span style={{ alignSelf: 'center' }}>&nbsp;or sign in with:</span>
              <SocialIcon
                style={{ width: 30, height: 30, margin: 5 }}
                url="https://facebook.com/jaketrent"
              />
              <SocialIcon
                style={{ width: 30, height: 30, margin: '5px 5px 5px 0' }}
                url="https://google.com/jaketrent"
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default LoginForm;
