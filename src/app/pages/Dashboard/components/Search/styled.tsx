import styled from 'styled-components';
import React from 'react';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 20px
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  .red {
    background-color: #FF4646;
  }
  
  .yellow {
    background-color: #FF9F43;
  }
  
  .green {
    background-color: #28C76F;
  }
  
  .blue {
    background-color: #02a7f0;
  }

  .CardItemWrapper {
    padding: 10px;
    display: flex;
    align-items: center;

    .icons {
      color: #FAFCFF;
    }

    .title {
      margin-left: 5px;
      font-weight: 600;
      font-size: 16px;
      color: #FAFCFF !important;
    }

    .number {
      font-size: 30px;
      font-weight: 600;
      margin-left: 38px;
      color: #FAFCFF;
    }

    
  }
  
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  background-color: #fff;
  height: 120px;
  width: 90%;
  border-radius: 12px;

  
}


`;

export const H3 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`

export const H4 = styled.h4`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`

export const Heading = styled(H4)`
  padding-bottom: 10px;
`;

export const Fullname = styled(H3)`
  margin-bottom: 3px;
`;

export const ImageBox = styled(props => <div {...props} />)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
  width: 80%;
  max-width: 190px;
  padding-bottom: 80%;
  background-image: ${props => "url(" + (props as any).photo + ")"};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;


export const Details = styled.div``;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 18px;
`;

export const InfoTitle = styled.span`
  width: 82px;
  color: #595959;
  font-size: 13px;
`;

export const InfoValue = styled.span`
  flex: 1;
  color: #595959;
  font-size: 13px;`;