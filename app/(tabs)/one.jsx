import React from 'react';
import { View } from 'react-native';
import HomeScreen from '../screens/Home';
import tw from 'twrnc';

const TabOne = () => {
	return (
		<View style={tw`flex-1 items-center justify-center`}>
			<HomeScreen />
		</View>
	);
};

export default TabOne;
