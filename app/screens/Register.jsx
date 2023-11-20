import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const RegisterScreen = () => {
	const router = useRouter();

	return (
		<View style={tw`h-full bg-[#ffb6b9]`}>
			{/* <Text style={tw`font-bold text-4xl text-white mb-2 text-center mt-16`}>
				Weather Wardrobe
			</Text> */}

			{/* Logo goes here */}
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 30,
				}}
			>
				<Image
					source={require('../../assets/ww__1_.png')}
					style={{
						height: 150,
						width: 150,
						margin: 'auto',
					}}
				/>
			</View>

			<Text style={tw` font-bold text-2xl text-white  mt-8  text-center`}>
				Create an Account
			</Text>

			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TextInput
					placeholder='First Name'
					style={{
						backgroundColor: 'white',
						height: 45,
						width: 350,
						marginBottom: 30,
						borderRadius: 10,
						paddingLeft: 10,
					}}
				/>
				<TextInput
					placeholder='Last Name'
					style={{
						backgroundColor: 'white',
						height: 45,
						width: 350,
						marginBottom: 30,
						borderRadius: 10,
						paddingLeft: 10,
					}}
				/>
				<TextInput
					placeholder='Email'
					style={{
						backgroundColor: 'white',
						height: 45,
						width: 350,
						marginBottom: 30,
						borderRadius: 10,
						paddingLeft: 10,
					}}
				/>
				<TextInput
					placeholder='Password'
					style={{
						backgroundColor: 'white',
						height: 45,
						width: 350,
						marginBottom: 30,
						borderRadius: 10,
						paddingLeft: 10,
					}}
					secureTextEntry={true}
				/>
				<TouchableOpacity
					onPress={() => router.push('/')}
					style={{
						backgroundColor: 'white',
						borderRadius: 10,
						paddingLeft: 26,
						paddingRight: 26,
						paddingTop: 10,
						paddingBottom: 10,
						marginLeft: 10,
						marginBottom: 50,
					}}
				>
					<Text>Register</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => router.push('/screens/Login')}>
					<Text style={{ fontSize: 16 }}>
						Already a member? <Text style={{ color: '#61c0bf' }}>Login</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default RegisterScreen;
