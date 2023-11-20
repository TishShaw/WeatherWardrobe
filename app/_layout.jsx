import { Stack } from 'expo-router';
import React from 'react';

const Layout = () => {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name='index'
				options={{
					title: 'Weather Wardrobe',
				}}
			/>
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
		</Stack>
	);
};

export default Layout;
