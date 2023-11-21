import React from 'react';
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = () => {
	return (
		<View
			style={{
				height: '100vh ',
				backgroundColor: '#ffb6b9',
				position: 'relative',
			}}
		>
			<SafeAreaView
				style={{
					flex: 1,
				}}
			>
				<View
					style={{
						height: '6%',
						borderRadius: '60px',
						boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
						position: 'absolute',
						justifyContent: 'center',
						width: '90%',
						margin: 'auto',
						top: 25,
						left: 17,
						backgroundColor: 'rgba(255,255,255,0.15)',
						color: 'white',
						flexDirection: 'row',
					}}
				>
					<TextInput
						placeholder='Search City'
						placeholderTextColor={'white'}
						style={{
							height: 20,
							paddingLeft: 20,
							outline: 'none',
							fontSize: 16,
							width: '100%',
							margin: 'auto',
						}}
					/>
					<TouchableOpacity
						style={{
							backgroundColor: 'rgba(255,255,255,0.15)',
							borderRadius: '100%',
							alignItems: 'center',
							justifyContent: 'center',
							width: 40,
							height: 40,
						}}
					>
						<Ionicons name='search-outline' size={26} color='black' />
					</TouchableOpacity>
				</View>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<View
						style={{
							position: 'absolute',
							top: 120,

							width: '90%',
						}}
					>
						<View
							style={{
								backgroundColor: 'white',
								flexDirection: 'row',
								width: '100%',
								justifyContent: 'space-between',
								padding: 20,
								marginBottom: '10px',
								borderRadius: 5,
							}}
						>
							<Text>Chicago, Illinois</Text>
							<Text>30 &#176;</Text>
						</View>
						<View
							style={{
								backgroundColor: 'white',
								flexDirection: 'row',
								width: '100%',
								justifyContent: 'space-between',
								padding: 20,
								borderRadius: 5,
							}}
						>
							<Text>Chicago, Illinois</Text>
							<Text>30 &#176;</Text>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default SearchScreen;
