import React, { useState } from 'react';
import { Icon, message, Upload } from 'antd';
import './style.scss';

function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
const CustomUpload = () => {
  const [imageUrl, setImageUrl] = useState<any>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const handleChange = (info: any) => {
    console.log(info);

    if (info.file.status === 'uploading') {
      setLoading(true);
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: any) => {
        setLoading(false);
        setImageUrl(imageUrl);
      });
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
      setLoading(false);
    }
  };

  function beforeUpload(file: any) {
    console.log(file);

    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'picture'} />
      <div className="ant-upload-text">Click or drag file to this area to upload</div>
    </div>
  );
  return (
    <Upload
      accept=".png,.jpeg,.jpg"
      name="avatar"
      listType="picture-card"
      className="camera-image"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </Upload>
  );
};

export default CustomUpload;
