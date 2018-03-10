import { Platform } from 'react-native';
import React, { Component } from 'react';

import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from './containers/HomeScreen.js';
import PushNotifications from './containers/PushNotifications.js';
import Font from './containers/Font.js';
import AuthScreen from './containers/app';

const App = DrawerNavigator(
	{
		Home: {
			path: '/',
			screen: Home
		},
		PushNotifications: {
			path: '/PushNotifications',
			screen: PushNotifications
		},
		Font: {
			path: '/Font',
			screen: Font
		}
	},
	{
		initialRouteName: 'Home',
		drawerPosition: 'left'
	}
);

const Routes = {
	Home: {
		name: 'Home',
		navigationOptions: {
			header: null
		},
		screen: App
	},
	Auth: {
		name: 'Auth',
		navigationOptions: {
			header: null
		},
		screen: AuthScreen
	}
};

export default (AppNavigator = StackNavigator(
	{
		...Routes
	},
	{
		headerMode: 'screen',
		mode: 'card',
		navigationOptions: {
			headerTitleStyle: {
				color: '#FF0000',
				alignSelf: 'center',
				fontSize: 16
			},
			headerStyle: {
				borderBottomWidth: 0,
				borderBottomColor: '#00FF00'
			}
		},
		initialRouteName: 'Auth'
	}
));
