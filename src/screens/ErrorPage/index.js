// Dependencies
import React from "react";
import { Icon, Typography } from "antd";
// Styled
import { Content, CardItem, Header, Title } from "./styles";

const ErrorPage = () => {
	const goHome = () => window.location.href = '/';

	return (
    <React.Fragment>
      <Content>
				<Header>
          <Icon type="home" onClick={goHome} />
          <Title>Card Game Maker</Title>
				</Header>
        <CardItem>
          <Typography.Title>Error Page</Typography.Title>
					<Typography.Text>If you are here, you were wrong.</Typography.Text>
					<Typography.Text>Therefore, now you should make a facepalm and go to main page.</Typography.Text>
        </CardItem>
      </Content>
    </React.Fragment>
  );
};

export default ErrorPage;
