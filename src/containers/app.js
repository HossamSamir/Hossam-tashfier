import React, { Component } from 'react';
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen/';
import { Alert } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import firebase from 'firebase';
// Initialize Firebase
var config = {
	apiKey: 'AIzaSyDdKcOBbhZxCafzH4IpLoIbKA0tbfg3YT0',
	authDomain: 'hossam-tashfier.firebaseapp.com',
	databaseURL: 'https://hossam-tashfier.firebaseio.com',
	projectId: 'hossam-tashfier',
	storageBucket: 'hossam-tashfier.appspot.com',
	messagingSenderId: '429925091429'
};
firebase.initializeApp(config);

/**
 * The root component of the application.
 * In this component I am handling the entire application state, but in a real app you should
 * probably use a state management library like Redux or MobX to handle the state (if your app gets bigger).
 */
export class LoginAnimation extends Component {
	state = {
		isLoggedIn: false, // Is the user authenticated?
		isLoading: false, // Is the user loggingIn/signinUp?
		isAppReady: false // Has the app completed the login animation?
	};

	_handleLogin = (email, password) => {
		this.setState({ isLoading: true }, () => {
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(() => {
					setTimeout(
						() => this.setState({ isLoggedIn: true, isLoading: false }),
						1000
					);
				})
				.catch(error => {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					this.setState({ isLoading: false });
					Alert.alert('Login Failed', errorMessage);
				});
		});
	};

	_handleSignup = (email, password, fullName) => {
		this.setState({ isLoading: true }, () => {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(user => {
					user
						.updateProfile({
							displayName: fullName
						})
						.then(function() {
							// Update successful.
							console.log(user);
						})
						.catch(function(error) {
							// An error happened.
						});
				})
				.then(() => {
					setTimeout(
						() => this.setState({ isLoggedIn: true, isLoading: false }),
						1000
					);
				})
				.catch(error => {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					this.setState({ isLoading: false });
					Alert.alert('Signup Failed', errorMessage);
				});
		});
	};

	/**
	 * Simple routing.
	 * If the user is authenticated (isAppReady) show the HomeScreen, otherwise show the AuthScreen
	 */
	render() {
		if (this.state.isAppReady) {
			return this.props.navigation.navigate('Home');
		} else {
			return (
				<AuthScreen
					login={this._handleLogin}
					signup={this._handleSignup}
					isLoggedIn={this.state.isLoggedIn}
					isLoading={this.state.isLoading}
					onLoginAnimationCompleted={() => this.setState({ isAppReady: true })}
				/>
			);
		}
	}
}

export default LoginAnimation;
