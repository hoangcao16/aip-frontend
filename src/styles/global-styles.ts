import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    /* padding-top: ${StyleConstants.NAV_BAR_HEIGHT}; */
    background-color: ${p => p.theme.background};
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  p,
  label,span {
    line-height: 1.5em;
    font-size: 16px;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .carousel.carousel-slider {
    background-color: ${({ theme }) => theme.neutral_200};
}

.carousel .control-dots {
    z-index: -10 !important;
}

.carousel .slide img {
    width: 70% !important;
    padding: 30px 0;
}

.arrow-left {
    position: absolute;
    top: 50%;
    left: 15px;
    z-index: 10;
}

.arrow-right {
    position: absolute;
    top: 50%;
    right: 15px;
    z-index: 10;
}

.carousel .thumbs-wrapper {
    margin: 0 !important;
    margin-top: 15px !important;
}

.carousel .thumbs {
    padding: 0;
    width: 534px;
}

.carousel .thumb {
    background-color: ${({ theme }) => theme.neutral_200};
    padding: 10px 30px !important;
}
.ant-btn {
  border-radius: 4px !important;
}
`;
