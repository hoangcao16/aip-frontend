/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { message, Upload } from 'antd';
import Styled from './styled';
import { PictureFilled } from '@ant-design/icons';

function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
const CustomUpload = props => {
  const [imageUrl, setImageUrl] = useState<any>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const { callbackImg, selectTabs, isExecute } = props;

  const handleChange = (info: any) => {
    // if (info.file.status === 'uploading') {
    //   setLoading(true);
    // }
    // if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (imageUrl: any) => {
      setLoading(false);
      setImageUrl(imageUrl);
      callbackImg(info.file.originFileObj);
    });
    // } else if (info.file.status === 'error') {
    // message.error(`${info.file.name} file upload failed.`);
    // setLoading(false);
    // }
  };
  useEffect(() => {
    setImageUrl(null);
    return () => {
      setImageUrl(null);
    };
  }, [selectTabs]);
  useEffect(() => {
    if (isExecute === false) {
      setImageUrl(null);
    } else {
      return;
    }
  }, [isExecute]);

  function beforeUpload(file: any) {
    console.log(file);

    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error('Image must smaller than 10MB!');
    }
    return isJpgOrPng && isLt10M;
  }

  const uploadButton = (
    <div>
      <PictureFilled />
      <div className="ant-upload-text">
        Click or drag file to this area to upload
      </div>
    </div>
  );
  return (
    <Styled.CustomUpload>
      <Upload
        accept=".png,.jpeg,.jpg"
        name="avatar"
        listType="picture-card"
        className="camera-image"
        showUploadList={false}
        multiple={false}
        maxCount={1}
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        disabled={false}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </Styled.CustomUpload>
  );
};

export default CustomUpload;
