import React from 'react';
import { View } from 'react-native';
import FavesScreen from '../screens/Faves';
import tw from 'twrnc';

const TabTwo = () => {
	return (
		<View style={tw`flex-1 items-center justify-center`}>
			<FavesScreen />
		</View>
	);
};

export default TabTwo;
