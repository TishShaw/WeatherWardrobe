import React from 'react';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const LoginScreen = () => {
	return (
		<View>
			<Text>Welcome to Login</Text>
			<Link href={'/one'}>Go to Home</Link>
		</View>
	);
};

export default LoginScreen;
