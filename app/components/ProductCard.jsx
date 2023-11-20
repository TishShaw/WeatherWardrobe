import { Image, Text, View } from 'react-native';
import React from 'react';

const ProductCard = ({ product }) => {
	return (
		<View
			style={{
				width: '40%',
				height: 250,

				alignItems: 'center',
				margin: '5px',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
			}}
		>
			<Image
				source={{ uri: product.img }}
				style={{ width: '100%', height: 200 }}
			/>
			<Text
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					margin: 'auto',
				}}
			>
				{product.title}
			</Text>
		</View>
	);
};

export default ProductCard;
