import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'src/redux/reducers';

import styled from 'styled-components';
import { Icon, Col, Row, Button } from 'antd';
import {
	CardInfo,
	Wrapper
} from './styled';


const Title = styled.div`
  margin: 0;
  font-size: 18px;
`;

const mapState = ({ auth: { auth } }: RootState) => ({
	auth,
});

const connector = connect(mapState, {});
type ReduxProps = ConnectedProps<typeof connector>;
interface IProps extends ReduxProps {
	showButton?: any,
	selectedItems?: any,
}

function Header(props: IProps) {


	return (
		<Wrapper>
			<Row>
				<Title>Chúc bạn một ngày làm việc hiệu quả</Title>
			</Row>

			<Row>
				<Col md={6}>
					<CardInfo className="CardItemWrapper blue">
						<div >
							{/* <Videocam className="CardItemWrapper__icons" /> */}
							<span className="title">Tổng số</span>
						</div>
						<div className=" number">100</div>
					</CardInfo>

				</Col>
				<Col md={6}>
					<CardInfo className="CardItemWrapper green">
						<div >
							{/* <Videocam className="CardItemWrapper__icons" /> */}
							<span className="title">ghsdghsdg</span>
						</div>
						<div className="number"></div>
					</CardInfo>

				</Col>
				<Col md={6}>
					<CardInfo className="CardItemWrapper yellow">
						<div>
							{/* <Videocam className="CardItemWrapper__icons" /> */}
							<span className="title">ghsdghsdg</span>
						</div>
						<div className="number"></div>
					</CardInfo>

				</Col>
				<Col md={6}>
					<CardInfo className="CardItemWrapper red">
						<div >
							{/* <Videocam className="CardItemWrapper__icons" /> */}
							<span className="title">ghsdghsdg</span>
						</div>
						<div className="number"></div>
					</CardInfo>

				</Col>
			</Row>
		</Wrapper>
	);
}

export default connector(Header);
