import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';

const LocateScreen = () => {
	return (
		<SafeAreaView
			style={{
				height: '100vh',
				backgroundColor: '#ffb6b9',
			}}
		>
			<View
				style={{
					marginTop: '60px',
				}}
			>
				<Text
					style={{
						margin: 'auto',
						paddingTop: 30,
						fontSize: 20,
						fontWeight: 500,
					}}
				>
					Chicago, Illinois
				</Text>
				<Text
					style={{
						margin: 'auto',
						marginTop: '-10px',
						paddingTop: 30,
						fontSize: 17.5,
					}}
				>
					Windy
				</Text>
				<View
					style={{
						flex: 2,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Image
						source={'../../assets/windy.png'}
						style={{
							width: 200,
							height: 200,
							margin: 'auto',
							justifyContent: 'center',
							alignItems: 'center',
							marginLeft: 100,
						}}
					/>
					<Text
						style={{
							margin: 'auto',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: 70,
							color: 'white',
						}}
					>
						30
						<Text
							style={{
								fontSize: '50px',
								position: 'absolute',
							}}
						>
							&#176;
						</Text>
					</Text>
				</View>
				<View
					style={{
						backgroundColor: 'lightgray',
						opacity: 0.85,
						padding: 20,
						position: 'relative',
						bottom: 0,
						width: '90%',
						marginTop: '60px',
						marginLeft: 20,
						borderRadius: 30,
					}}
				>
					<Text
						style={{
							fontWeight: 600,
							fontSize: '17px',
							marginBottom: 20,
						}}
					>
						Today's forecast
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-evenly',
						}}
					>
						<View
							style={{
								borderRightWidth: '.5px',
								borderBlockColor: 'rgba(255,255,255,0.5)',
								alignItems: 'center',
								paddingRight: 5,
							}}
						>
							<Image
								source={'../../assets/windy.png'}
								style={{
									width: 70,
									height: 70,
								}}
							/>
							<Text
								style={{
									fontWeight: 500,
								}}
							>
								60&#176;
							</Text>
						</View>
						<View
							style={{
								alignItems: 'center',
							}}
						>
							<Image
								source={'../../assets/windy.png'}
								style={{
									width: 70,
									height: 70,
								}}
							/>
							<Text
								style={{
									fontWeight: 500,
								}}
							>
								54&#176;
							</Text>
						</View>
						<View
							style={{
								paddingLeft: 5,
								alignItems: 'center',
								borderLeftWidth: '.5px',
								borderBlockColor: 'rgba(255,255,255,0.5)',
							}}
						>
							<Image
								source={'../../assets/windy.png'}
								style={{
									width: 70,
									height: 70,
								}}
							/>
							<Text
								style={{
									fontWeight: 500,
								}}
							>
								30&#176;
							</Text>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default LocateScreen;
