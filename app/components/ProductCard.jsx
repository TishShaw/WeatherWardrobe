import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useFavs } from '../Context';

const ProductCard = ({ product, id }) => {
	const { favs, toggleFav } = useFavs();

	const isProductInFavs = favs.includes(id);
	return (
		<View
			style={{
				width: '40%',
				height: 250,
				alignItems: 'center',
				margin: '5px',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
				borderRadius: 5,
			}}
		>
			<Image
				source={{ uri: product.img }}
				style={{
					width: '100%',
					height: 200,
					borderTopLeftRadius: 5,
					borderTopRightRadius: 5,
				}}
			/>
			<Text
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					margin: 'auto',
					padding: 5,
				}}
			>
				{product.title.length <= 23
					? product.title
					: product.title.substring(0, 30) + '...'}
			</Text>
			<TouchableOpacity
				style={{
					position: 'absolute',
					right: 0,
				}}
				onPress={() => toggleFav(id)}
			>
				<Entypo
					name={isProductInFavs ? 'heart' : 'heart-outlined'}
					size={30}
					color='white'
				/>
			</TouchableOpacity>
		</View>
	);
};

export default ProductCard;
