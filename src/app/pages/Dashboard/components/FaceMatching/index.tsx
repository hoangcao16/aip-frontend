import { Button, Card, Spin } from 'antd';
import React, { useState } from 'react';
import CustomUpload from 'app/components/CustomUpload';
import { useDispatch, useSelector } from 'react-redux';
import { selectFacematching } from './slice/selectors';
import { useFacematchingSlice } from './slice';
const FaceMatching = () => {
  const dispatch = useDispatch();
  const [isExecute, setIsExecute] = useState(false);
  const { actions } = useFacematchingSlice();
  const { isLoading, data } = useSelector(selectFacematching);
  const [faceImg1, setFaceImg1] = useState(null);
  const [faceImg2, setFaceImg2] = useState(null);

  const isDisabled = () => {
    if (!faceImg1 || !faceImg2) {
      return true;
    }
    if (isLoading) {
      return true;
    }
    return false;
  };
  const handleSetFaceImg1 = (url: any) => {
    setFaceImg1(url);
  };
  const handleSetFaceImg2 = (url: any) => {
    setFaceImg2(url);
  };
  const handleExecute = () => {
    setIsExecute(true);
    if (faceImg1 && faceImg2) {
      const fm = new FormData();
      fm.append('face_image_1', faceImg1);
      fm.append('face_image_2', faceImg2);
      dispatch(actions.faceMatchingRequest(fm));
    }
  };
  return (
    <div className="face-matching">
      <div className="remaining">
        <p>
          Remaining request: <span>1,932/5000</span>
        </p>
      </div>
      <div className="execute">
        <div className="execute__image">
          <CustomUpload callbackImg={handleSetFaceImg1} />
          <CustomUpload callbackImg={handleSetFaceImg2} />
        </div>
        <div className="execute__button">
          <Button disabled={isDisabled()} onClick={handleExecute}>
            Execute
          </Button>
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
                    setFaceImg1(null);
                    setFaceImg2(null);
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

export default FaceMatching;
