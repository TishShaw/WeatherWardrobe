import React from 'react';
import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';
import tw from 'twrnc';

export default function Page() {
	const router = useRouter();

	return (
		<View style={tw`flex-1 items-center justify-center flex-row`}>
			<Button
				onPress={() => router.push('/screens/Register')}
				title='Register'
			/>
			<Button onPress={() => router.push('/screens/Login')} title='Login' />
		</View>
	);
}
