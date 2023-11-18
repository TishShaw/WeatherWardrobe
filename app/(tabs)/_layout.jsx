import React from 'react';
import { Tabs } from 'expo-router/tabs';
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const Layout = () => {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				height: 70,
			}}
		>
			<Tabs.Screen
				name='one'
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: () => <Ionicons name='home' size={24} />,
				}}
			/>
			<Tabs.Screen
				name='two'
				options={{
					tabBarLabel: 'Search',
					tabBarIcon: () => <Ionicons name='search' size={24} />,
				}}
			/>
			<Tabs.Screen
				name='three'
				options={{
					tabBarLabel: 'Locate',
					tabBarIcon: () => <Ionicons name='locate' size={24} />,
				}}
			/>
			<Tabs.Screen
				name='four'
				options={{
					tabBarLabel: 'Faves',
					tabBarIcon: () => (
						<FontAwesome5 name='heart' size={24} color='black' />
					),
				}}
			/>
			<Tabs.Screen
				name='five'
				options={{
					tabBarLabel: 'Me',
					tabBarIcon: () => (
						<FontAwesome name='user-circle-o' size={24} color='black' />
					),
				}}
			/>
		</Tabs>
	);
};

export default Layout;
