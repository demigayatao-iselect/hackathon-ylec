import { Result, Button } from 'antd';

import * as React from 'react';

class Success extends React.Component {
  handleReturnHome = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Result
        status="success"
        title="You have successfully availed an electricity plan!"
        subTitle="Transaction number: 2017182818828182881, email has been sent to you. Please check your inbox."
        extra={[
          <Button onClick={this.handleReturnHome} type="primary" key="console">
            Return to home
          </Button>
        ]}
      />
    );
  }
}

export default Success;
