import { Button, Card, Radio, Spin } from 'antd';
import CustomUpload from 'app/components/CustomUpload';
import React, { useState } from 'react';
import { useRecognitionSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectRecognition } from './slice/selectors';

const DocumentRecognition = () => {
  const dispatch = useDispatch();
  const [isExecute, setIsExecute] = useState(false);
  const [selectTabs, setSelectTabs] = useState<Boolean>(false);
  const { actions } = useRecognitionSlice();
  const { isLoading, data } = useSelector(selectRecognition);
  const [type, setType] = useState('ID Card');
  const [frontImageUrl, setfrontImageUrl] = useState(null);
  const [backImageUrl, setBackImageUrl] = useState(null);
  console.log(useSelector(selectRecognition));

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
    setIsExecute(true);
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
                isExecute={isExecute}
              />
              <CustomUpload
                callbackImg={handleSetBackImageUrl}
                selectTabs={selectTabs}
                isExecute={isExecute}
              />
            </>
          ) : type === 'Passport' ? (
            <CustomUpload
              callbackImg={handleSetFrontImageUrl}
              selectTabs={selectTabs}
              isExecute={isExecute}
            />
          ) : (
            <>
              <CustomUpload
                callbackImg={handleSetFrontImageUrl}
                selectTabs={selectTabs}
                isExecute={isExecute}
              />
            </>
          )}
          {!isExecute && (
            <div
              className={
                type === 'ID Card' ? 'execute__button' : 'passport-button'
              }
            >
              <Button
                disabled={isDisabled()}
                onClick={handleExecute}
                type="primary"
              >
                Execute
              </Button>
            </div>
          )}
        </div>
        {isExecute && (
          <div
            className="result"
            style={{ width: '100%', marginBottom: '40px' }}
          >
            <Card
              size="default"
              title="Result"
              extra={
                <Button
                  onClick={() => {
                    setIsExecute(false);
                    setfrontImageUrl(null);
                    setBackImageUrl(null);
                  }}
                >
                  Try again
                </Button>
              }
              style={{ width: '100%', marginBottom: '40px' }}
            >
              {/* <Spin size="large" /> */}
              {isLoading ? (
                <Spin size="large" />
              ) : (
                <pre>{JSON.stringify(data, null, 2)}</pre>
              )}
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentRecognition;
