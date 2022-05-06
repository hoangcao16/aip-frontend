import { Anchor, Col, Row } from 'antd';
import React from 'react';
// import './style.scss';
import Styled from './styled';

const { Link } = Anchor;

const IntegrationGuide = () => {
  return (
    <Styled.IntegrationGuide>
      <Row className="integration-guide">
        <Col xs={24} md={20}>
          <div id="scroll-layout-guide" className="scroll-layout-guide">
            <h1>Integration Guide</h1>
            <div>
              <h2>Overview</h2>
              <h2 id="request">Request</h2>
              <p>
                Voice is a universal communication tool and also an object for
                research in many different sciences. Human voice is endless. The
                word is pronounced from the same person, at same pronounced
                situation at two different pronunciation times, will produce two
                different patterns. Due to the wide range of voices, the FSR
                (FPT.AI Speech Recognition) or FPT.AI Speech - Speech to Text
                focuses on identifying basic sentences to control devices at
                home, aiming to achieve high-precision sound recognition.{' '}
              </p>

              <h2 id="header">Header</h2>
              <p>
                Integrated in mobile phone applications to control IoT devices
                or voice command software.
                <br /> Voice is a universal communication tool and also an
                object for research in many different sciences. Human voice is
                endless. The word is pronounced from the same person, at same
                pronounced situation at two different pronunciation times, will
                produce two different patterns. Due to the wide range of voices,
                the FSR (FPT.AI Speech Recognition) or FPT.AI Speech - Speech to
                Text focuses on identifying basic sentences to control devices
                at home, aiming to achieve high-precision sound recognition.
                <br /> Voice is a universal communication tool and also an
                object for research in many different sciences. Human voice is
                endless. The word is pronounced from the same person, at same
                pronounced situation at two different pronunciation times, will
                produce two different patterns. Due to the wide range of voices,
                the FSR (FPT.AI Speech Recognition) or FPT.AI Speech - Speech to
                Text focuses on identifying basic sentences to control devices
                at home, aiming to achieve high-precision sound recognition.
                <br /> Voice is a universal communication tool and also an
                object for research in many different sciences. Human voice is
                endless. The word is pronounced from the same person, at same
                pronounced situation at two different pronunciation times, will
                produce two different patterns. Due to the wide range of voices,
                the FSR (FPT.AI Speech Recognition) or FPT.AI Speech - Speech to
                Text focuses on identifying basic sentences to control devices
                at home, aiming to achieve high-precision sound recognition.
                <br /> Voice is a universal communication tool and also an
                object for research in many different sciences. Human voice is
                endless. The word is pronounced from the same person, at same
                pronounced situation at two different pronunciation times, will
                produce two different patterns. Due to the wide range of voices,
                the FSR (FPT.AI Speech Recognition) or FPT.AI Speech - Speech to
                Text focuses on identifying basic sentences to control devices
                at home, aiming to achieve high-precision sound recognition.{' '}
              </p>
              <h2 id="body">Body</h2>
              <p>
                Integrated in mobile phone applications to control IoT devices
                or voice command software.
                <br /> Voice is a universal communication tool and also an
                object for research in many different sciences. Human voice is
                endless. The word is pronounced from the same person, at same
                pronounced situation at two different pronunciation times, will
                produce two different patterns. Due to the wide range of voices,
                the FSR (FPT.AI Speech Recognition) or FPT.AI Speech - Speech to
                Text focuses on identifying basic sentences to control devices
                at home, aiming to achieve high-precision sound recognition.
                <br /> Voice is a universal communication tool and also an
                object for research in many different sciences. Human voice is
                endless. The word is pronounced from the same person, at same
                pronounced situation at two different pronunciation times, will
                produce two different patterns. Due to the wide range of voices,
                the FSR (FPT.AI Speech Recognition) or FPT.AI Speech - Speech to
                Text focuses on identifying basic sentences to control devices
                at home, aiming to achieve high-precision sound recognition.
                <br /> Voice is a universal communication tool and also an
                object for research in many different sciences. Human voice is
                endless. The word is pronounced from the same person, at same
                pronounced situation at two different pronunciation times, will
                produce two different patterns. Due to the wide range of voices,
                the FSR (FPT.AI Speech Recognition) or FPT.AI Speech - Speech to
                Text focuses on identifying basic sentences to control devices
                at home, aiming to achieve high-precision sound recognition.
                <br /> Voice is a universal communication tool and also an
                object for research in many different sciences. Human voice is
                endless. The word is pronounced from the same person, at same
                pronounced situation at two different pronunciation times, will
                produce two different patterns. Due to the wide range of voices,
                the FSR (FPT.AI Speech Recognition) or FPT.AI Speech - Speech to
                Text focuses on identifying basic sentences to control devices
                at home, aiming to achieve high-precision sound recognition.{' '}
              </p>
            </div>
          </div>
        </Col>
        <Col xs={0} md={4}>
          <div>
            <Anchor affix={false} offsetTop={100}>
              <Link href="#request" title="Request" />
              <Link href="#url" title="URL" />
              <Link href="#header" title="Header" />
              <Link href="#body" title="Body" />
              <Link href="#menthod" title="Menthod" />
              <Link href="#response" title="Response" />
              <Link href="#json" title="JSON" />
              <Link href="#message-code" title="Message Code" />
            </Anchor>
          </div>
        </Col>
      </Row>
    </Styled.IntegrationGuide>
  );
};

export default IntegrationGuide;
