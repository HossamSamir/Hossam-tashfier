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

export default class Font extends Component {
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

				<Text
					style={{ fontSize: 40, color: 'crimson', fontFamily: 'monospace' }}
				>
					الظلال أخفى القمر.
				</Text>
			</View>
		);
	}
}
