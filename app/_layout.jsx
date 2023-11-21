import { Stack } from 'expo-router';
import React from 'react';
import { FavsProvider } from './Context';

const Layout = () => {
	return (
		<FavsProvider>
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
		</FavsProvider>
	);
};

export default Layout;
