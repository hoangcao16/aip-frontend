import { Button, Radio } from 'antd';
import CustomUpload from 'app/components/CustomUpload';
import React, { useState } from 'react';
import { useRecognitionSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecognition } from './slice/selectors';
const DocumentRecognition = () => {
  const dispatch = useDispatch();
  const [selectTabs, setSelectTabs] = useState<any>(false);
  const { actions } = useRecognitionSlice();
  const { isLoading } = useSelector(selectRecognition);
  const [type, setType] = useState('ID Card');
  const [frontImageUrl, setfrontImageUrl] = useState(null);
  const [backImageUrl, setBackImageUrl] = useState(null);
  const isDisabled = () => {
    if (type === 'ID Card') {
      if (!frontImageUrl || !backImageUrl) {
        return true;
      }
    } else {
      if (!frontImageUrl) {
        return true;
      }
    }
    if (isLoading) {
      return true;
    }
    return false;
  };
  const handleSetFrontImageUrl = (url: any) => {
    setfrontImageUrl(url);
  };
  const handleSetBackImageUrl = (url: any) => {
    setBackImageUrl(url);
  };
  const handleExecute = () => {
    if (type === 'ID Card') {
      if (frontImageUrl && backImageUrl) {
        const fm = new FormData();
        fm.append('front_image', frontImageUrl);
        fm.append('back_image', backImageUrl);
        dispatch(actions.recognitionIdRequest(fm));
      }
    } else if (type === 'Passport') {
      if (frontImageUrl) {
        const fm = new FormData();
        fm.append('image ', frontImageUrl);
        dispatch(actions.recognitionPassportRequest(fm));
      }
    } else if (type === "Driver's License") {
      if (frontImageUrl) {
        const fm = new FormData();
        fm.append('image ', frontImageUrl);
        dispatch(actions.recognitionDriversRequest(fm));
      }
    }
  };
  const handleSelectTabs = e => {
    setSelectTabs(!selectTabs);
    setType(e.target.value);
    setfrontImageUrl(null);
    setBackImageUrl(null);
  };
  return (
    <div className="document-recognition">
      <div className="remaining">
        <Radio.Group onChange={e => handleSelectTabs(e)} value={type}>
          <Radio value="ID Card">ID Card</Radio>
          <Radio value="Passport">Passport</Radio>
          <Radio value="Driver's License">Driver's License</Radio>
        </Radio.Group>
        <p>
          Remaining request: <span>1,932/5000</span>
        </p>
      </div>
      <div className="execute">
        <div className="execute__image">
          {type === 'ID Card' ? (
            <>
              <CustomUpload
                callbackImg={handleSetFrontImageUrl}
                selectTabs={selectTabs}
              />
              <CustomUpload
                callbackImg={handleSetBackImageUrl}
                selectTabs={selectTabs}
              />
            </>
          ) : type === 'Passport' ? (
            <CustomUpload
              callbackImg={handleSetFrontImageUrl}
              selectTabs={selectTabs}
            />
          ) : (
            <>
              <CustomUpload
                callbackImg={handleSetFrontImageUrl}
                selectTabs={selectTabs}
              />
            </>
          )}
        </div>
        <div className="execute__button">
          <Button
            disabled={isDisabled()}
            onClick={handleExecute}
            type="primary"
          >
            {isLoading ? 'Executing...' : 'Execute'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocumentRecognition;
