import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import SearchScreen from '../screens/Search';

const TabTwo = () => {
	return (
		<View style={tw`flex-1 items-center justify-center`}>
			<SearchScreen />
		</View>
	);
};

export default TabTwo;
