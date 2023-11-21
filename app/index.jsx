import React from 'react';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

export default function Page() {
	const router = useRouter();

	return (
		<View style={tw`flex-1 items-center justify-center  bg-[#ffb6b9]`}>
			<Text style={tw`font-bold text-4xl text-white mb-6`}>
				Weather Wardrobe
			</Text>
			<Text
				style={{
					marginBottom: 60,
					color: 'rgb(82, 180, 177)',
					fontSize: 18,
					width: 340,
					textAlign: 'center',
				}}
			>
				Get personalized clothing recommendations for the weather
			</Text>
			<Image
				source={require('../assets/ww__1_.png')}
				style={{ height: 250, width: 250, marginBottom: 30, marginTop: 30 }}
			/>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'row',
					marginTop: 70,
				}}
			>
				<TouchableOpacity
					onPress={() => router.push('/screens/Register')}
					title='Register'
					style={{
						backgroundColor: 'white',
						borderRadius: 10,
						paddingLeft: 20,
						paddingRight: 20,
						paddingTop: 10,
						paddingBottom: 10,
						marginRight: 10,
					}}
				>
					<Text style={{ fontSize: 18 }}>Register</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => router.push('/screens/Login')}
					style={{
						backgroundColor: 'white',
						borderRadius: 10,
						paddingLeft: 26,
						paddingRight: 26,
						paddingTop: 10,
						paddingBottom: 10,
						marginLeft: 10,
					}}
				>
					<Text style={{ fontSize: 18 }}>Login</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
