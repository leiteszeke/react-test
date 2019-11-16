// Dependencies
import styled from "styled-components";
import { Row } from "antd";

export const Content = styled.div`
  margin: 0 auto;
  width: 300px;

  @media (max-width: 320px) {
    padding: 0 20px;
    width: 100%;
  }
`;

export const Header = styled(Row).attrs({
	type: 'flex',
	justify: 'space-between'
})`
  align-items: center;
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  color: rgba(0, 0, 0, 0.85);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.23;
  margin-bottom: 0;

  @media (max-width: 320px) {
    font-size: 24px;
  }
`;

export const CardItem = styled(Row).attrs({
	type: 'flex',
	justify: 'center'
})`
  align-content: flex-start;
	border: 1px solid black;
	border-radius: 8px;
  box-sizing: border-box;
  flex-wrap: wrap;
	height: 350px;
  margin: 0 auto;
  overflow: hidden;
  padding: 8px;
	width: 250px;

  > h1 {
    text-align: center;
    width: 100%;
  }

  > span {
    display: block;
    font-size: 12px;
    text-align: left;
    width: 100%;
    word-break: break-word;
  }
`;