import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';
import LocateScreen from '../screens/LocationScreen';

const TabThree = () => {
	return (
		<View style={tw`flex-1 items-center justify-center`}>
			<LocateScreen />
		</View>
	);
};

export default TabThree;
