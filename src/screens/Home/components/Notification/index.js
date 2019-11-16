import React from 'react';
import { connect } from "react-redux";
import { notification as Alert } from 'antd';
import { hideNotification } from '../../../../actions/notification';

const Notification = ({ hideNotification, notification }) => {
	const showAlert = React.useCallback((input) => {
		Alert.config({ placement: 'bottomRight' });
		Alert.open({
			message: input.title,
			description: input.text,
			duration: 3,
		});

		setTimeout(() => {
			hideNotification();
			Alert.destroy();
		}, 3000);
	}, [hideNotification]);

	React.useEffect(() => {
		if (notification.show) {
			showAlert(notification.data);
		}
	}, [notification, showAlert]);

	return '';
}

const mapStateToProps = ({ notifications }) => ({
  notification: notifications,
});

const mapDispatchToProps = dispatch => ({
	hideNotification: () => dispatch(hideNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);