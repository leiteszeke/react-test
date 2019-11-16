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
  margin-bottom: 0px;

  @media (max-width: 320px) {
    font-size: 24px;
  }
`;