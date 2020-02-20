import * as React from 'react';
import { Navigation } from '../../navigation';
import results3 from '../../../images/results3.jpg';
import { Button } from 'antd';

class Recommendation extends React.Component {
  handleApplyNow = () => {
    this.props.history.push('/apply-now');
  };

  render() {
    return (
      <div className="container">
        <div
          style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
        >
          <Navigation currentPage="Recommendation" />
          <div
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            <img style={{ width: 1072 }} src={results3} />

            <Button
              onClick={this.handleApplyNow}
              style={{
                height: 49,
                width: 164,
                position: 'absolute',
                bottom: 25,
                left: 816,
                fontSize: 16,
                fontWeight: 600
              }}
              type="primary"
            >
              Apply now
            </Button>

            <Button
              onClick={this.handleApplyNow}
              style={{
                height: 49,
                width: 164,
                position: 'absolute',
                bottom: 25,
                left: 1042,
                fontSize: 16,
                fontWeight: 600
              }}
              type="primary"
            >
              Apply now
            </Button>

            <Button
              onClick={this.handleApplyNow}
              style={{
                height: 49,
                width: 164,
                position: 'absolute',
                bottom: 25,
                left: 1270,
                fontSize: 16,
                fontWeight: 600
              }}
              type="primary"
            >
              Apply now
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommendation;
