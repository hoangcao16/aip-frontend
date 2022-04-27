import { Button } from 'antd';
import React, { useState } from 'react';
import CustomUpload from 'app/components/CustomUpload';
import { useDispatch, useSelector } from 'react-redux';
import { selectFacematching } from './slice/selectors';
import { useFacematchingSlice } from './slice';
const FaceMatching = () => {
  const dispatch = useDispatch();
  const { actions } = useFacematchingSlice();
  const { isLoading } = useSelector(selectFacematching);
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
      </div>
    </div>
  );
};

export default FaceMatching;
