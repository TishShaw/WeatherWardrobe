import React from 'react';
import {
	View,
	Text,
	SafeAreaView,
	Alert,
	StyleSheet,
	Image,
} from 'react-native';
import BoxSwiper from '../components/BoxSwiper';

const HomeScreen = () => {
	return (
		<SafeAreaView
			style={{
				height: '100vh',
				backgroundColor: '#ffb6b9',
			}}
		>
			<View style={{ marginTop: 20 }}>
				<Image
					source={require('../../assets/ww__1_.png')}
					style={{
						height: 105,
						width: 105,
						margin: 'auto',
					}}
				/>
			</View>

			<View
				style={{
					flexDirection: 'row',
					paddingLeft: 20,
					justifyContent: 'center',
					marginTop: 30,
					marginBottom: 65,
				}}
			>
				<Text
					style={{
						fontWeight: 'bold',
						fontSize: 25,
					}}
				>
					Chicago
				</Text>
				<Text
					style={{
						fontWeight: 'bold',
						fontSize: 22,
						marginLeft: 10,
					}}
				>
					30 &#176;
				</Text>
			</View>
			<View
				style={{
					height: '50%',
					marginBottom: 50,
					marginLeft: '15%',
				}}
			>
				<BoxSwiper />
			</View>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '90%',
		padding: 30,
	},
	row: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
	},
	box: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'black',
		margin: 10,
		height: '45%',
	},
});
export default HomeScreen;
