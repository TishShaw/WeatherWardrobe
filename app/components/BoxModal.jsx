import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import ProductCard from './ProductCard';

const BoxModal = ({ isVisible, onClose, products }) => {
	return (
		<Modal
			isVisible={isVisible}
			animationIn='slideInUp'
			animationOut='slideOutDown'
			backdropOpacity={0.1}
			onBackdropPress={onClose}
			animationInTiming={600}
			style={{
				margin: 'auto',
				backgroundColor: 'white',
				position: 'absolute',
				bottom: 0,
				left: 0,
				width: '100%',
			}}
		>
			<View
				style={{
					margin: 0,
					height: '70vh',
					width: '100%',
				}}
			>
				<ScrollView
					style={{
						backgroundColor: 'white',
						width: '100%',
						paddingBottom: 20,
					}}
				>
					<TouchableOpacity onPress={onClose}>
						<Text
							style={{
								paddingTop: 16,
								paddingLeft: 30,
								fontSize: 16,
								width: 90,
								textDecorationLine: 'underline',
							}}
						>
							Close
						</Text>
					</TouchableOpacity>
					<View
						style={{
							marginTop: 20,
							flexDirection: 'row',
							flexWrap: 'wrap',
							width: '100vw',
							justifyContent: 'center',
						}}
					>
						{products.map((product, index) => (
							<ProductCard key={index} product={product} />
						))}
					</View>
				</ScrollView>
			</View>
		</Modal>
	);
};

export default BoxModal;
