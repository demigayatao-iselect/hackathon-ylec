import * as React from 'react';
import energyBackground from '../../../images/energybackground.png';
import { Navigation } from '../../navigation';
import UploadPDF from '../../upload-pdf';
import './upload-bill.css';
import { Button } from 'antd';
import manual_reg2 from '../../../images/manual_reg2.jpg';
import { Label } from '../../label';

class UploadBill extends React.Component {
  state = {
    isUploadBill: true
  };

  handleNextRoute = () => {
    this.props.history.push('/recommendation');
  };

  uploadBill = () => (
    <div>
      <Label text="UPLOAD BILL" />
      <UploadPDF history={this.props.history} />
    </div>
  );

  toggleFeature = () => {
    this.setState(({ isUploadBill }) => ({
      isUploadBill: !isUploadBill
    }));
  };

  registerBill = () => (
    <div>
      <Label text="REGISTRATION" />
      <img style={{ height: 556 }} src={manual_reg2} />
      <div style={{ display: 'flex' }}>
        <Button
          onClick={this.handleNextRoute}
          style={{ height: 42, width: 126 }}
          type="primary"
        >
          Continue
        </Button>
        <Button
          onClick={this.toggleFeature}
          style={{ height: 42, width: 126, marginLeft: 8 }}
          type="default"
        >
          Back
        </Button>
      </div>
    </div>
  );

  render() {
    const { isUploadBill } = this.state;
    return (
      <div className="container">
        <Navigation currentPage={isUploadBill ? 'Upload Bill' : 'Register Bill'} />
        <div>
          <div className="upload-bill">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {isUploadBill ? (
                <>
                  {this.uploadBill()}
                  <span style={{ display: 'flex' }}>
                    No energy bill yet? Manually enter your details&nbsp;
                    <a onClick={this.toggleFeature}>here</a>
                  </span>
                </>
              ) : (
                this.registerBill()
              )}
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

export default UploadBill;
