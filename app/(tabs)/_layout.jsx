import React from 'react';
import { Tabs } from 'expo-router/tabs';
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const Layout = () => {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: { height: 80 },
			}}
		>
			<Tabs.Screen
				name='one'
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: () => <Ionicons name='home' size={30} />,
					tabBarLabelStyle: {
						marginBottom: 20,
						fontSize: 14,
					},
				}}
			/>
			<Tabs.Screen
				name='two'
				options={{
					tabBarLabel: 'Search',
					tabBarIcon: () => <Ionicons name='search' size={30} />,
					tabBarLabelStyle: {
						marginBottom: 20,
						fontSize: 14,
					},
				}}
			/>
			<Tabs.Screen
				name='three'
				options={{
					tabBarLabel: 'Locate',
					tabBarIcon: () => <Ionicons name='locate' size={30} />,
					tabBarLabelStyle: {
						marginBottom: 20,
						fontSize: 14,
					},
				}}
			/>
			<Tabs.Screen
				name='four'
				options={{
					tabBarLabel: 'Faves',
					tabBarIcon: () => (
						<FontAwesome5 name='heart' size={30} color='black' />
					),
					tabBarLabelStyle: {
						marginBottom: 20,
						fontSize: 14,
					},
				}}
			/>
			<Tabs.Screen
				name='five'
				options={{
					tabBarLabel: 'Me',
					tabBarIcon: () => (
						<FontAwesome name='user-circle-o' size={30} color='black' />
					),
					tabBarLabelStyle: {
						marginBottom: 20,
						fontSize: 14,
					},
				}}
			/>
		</Tabs>
	);
};

export default Layout;
