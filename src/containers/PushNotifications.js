import React, { Component } from 'react';
import {
	View,
	Text,
	AsyncStorage,
	TextInput,
	StyleSheet,
	Platform
} from 'react-native';
import { Permissions, Notifications } from 'expo';

import Icon from '../components/common/Icon';
import { Colors, AppStyles, Metrics } from '../themes/index';

const style = StyleSheet.create({
	filter: {
		position: 'absolute',
		top: Platform.OS === 'ios' ? 30 : 0,
		right: 0,
		margin: Metrics.baseMargin
	}
});

export default class PushNotifications extends Component {
	componentWillMount() {
		registerForPushNotificationsAsync();
	}
	componentDidMount() {
		AsyncStorage.getItem('token', (err, result) => {
			this.setState({ token: result });
		});
	}
	constructor(props) {
		super(props);
		this.state = {
			token: 'a'
		};
		registerForPushNotificationsAsync();
	}

	static navigationOptions = {
		tabBarLabel: 'Screen 2'
	};

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Icon
					width={55}
					backgroundColor={Colors.white}
					borderRadius={true}
					tintColor={Colors.black}
					image={{
						uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/102109-200.png'
					}}
					styleIcon={
						([style.filter, AppStyles.shadow],
						{ position: 'absolute', zIndex: 2, top: 10, left: 10 })
					}
					onPress={() => this.props.navigation.navigate('DrawerOpen')}
				/>

				<Text>TOKEN: {this.state.token}</Text>
				<TextInput value={this.state.token} />
			</View>
		);
	}
}

async function registerForPushNotificationsAsync() {
	const { status: existingStatus } = await Permissions.getAsync(
		Permissions.NOTIFICATIONS
	);
	let finalStatus = existingStatus;

	// only ask if permissions have not already been determined, because
	// iOS won't necessarily prompt the user a second time.
	if (existingStatus !== 'granted') {
		// Android remote notification permissions are granted during the app
		// install, so this will only ask on iOS
		const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
		finalStatus = status;
	}

	// Stop here if the user did not grant permissions
	if (finalStatus !== 'granted') {
		return;
	}

	// Get the token that uniquely identifies this device
	token = await Notifications.getExpoPushTokenAsync();
	AsyncStorage.setItem('token', token);
}
