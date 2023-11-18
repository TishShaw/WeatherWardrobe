import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

const ProfileScreen = () => {
	const router = useRouter();

	return (
		<View>
			<Text>Profile Page</Text>
			<Button onPress={() => router.push('/')} title='Logout' />
		</View>
	);
};

export default ProfileScreen;
