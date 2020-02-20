import * as React from 'react';
import { Upload, Icon, message, Button } from 'antd';
import 'antd/dist/antd.css';
import './upload-pdf.css';

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};
class UploadPDF extends React.Component {
  handleNextRoute = () => {
    this.props.history.push('/recommendation');
  };

  render() {
    return (
      <div className="upload-pdf-container">
        <div className="upload-dragger-container">
          <Upload.Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>

            <p className="ant-upload-hint">
              Strictly prohibit from uploading company data or other band files
            </p>

            <p className="ant-upload-hint">No photos or scan</p>

            <p className="ant-upload-hint">Maximum size 3MB</p>
          </Upload.Dragger>

          <div className="button-container">
            <Button
              onClick={this.handleNextRoute}
              style={{ height: 42, width: 126 }}
              type="danger"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadPDF;
