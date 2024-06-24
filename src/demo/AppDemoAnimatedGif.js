import React from 'react';
import S3 from 'aws-sdk/clients/s3';
import Camera, {FACING_MODES} from '../lib';
import './reset.css';

function App(props) {

  function handleTakePhoto(dataUri) {
    const s3 = new S3({
      apiVersion: '2006-03-01', params: {Bucket: 'public-demo-images-mq'}
    });
    s3.upload({
      Key: 'demo-file.jpg', Body: dataUri, ACL: 'public-read'
    }, function (err, data) {
      if (err) {
        alert(err)
      }
      alert('Successfully Uploaded!');
    });

    // Do stuff with the photo...
    console.log('takePhoto !!');
  }

  return (<div>
      {// <div style={{ backgroundColor: 'white' }}>v3</div>
      }
      <Camera
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
        idealFacingMode={FACING_MODES.ENVIRONMENT}
      />
    </div>);
}

export default App;
