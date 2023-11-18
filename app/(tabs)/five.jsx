import React from 'react';
import { View } from 'react-native';
import ProfileScreen from '../screens/Profile';
import tw from 'twrnc';

const TabTwo = () => {
	return (
		<View style={tw`flex-1 items-center justify-center`}>
			<ProfileScreen />
		</View>
	);
};

export default TabTwo;
