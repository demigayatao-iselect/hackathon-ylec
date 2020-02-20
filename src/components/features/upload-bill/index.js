import * as React from 'react';
import energyBackground from '../../../images/energybackground.png';
import { Navigation } from '../../navigation';
import UploadPDF from '../../upload-pdf';
import './upload-bill.css';

class UploadBill extends React.Component {
  render() {
    return (
      <div className="container">
        <Navigation currentPage="Upload Bill" />
        <div>
          <div className="upload-bill">
            <UploadPDF history={this.props.history} />
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
