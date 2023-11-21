import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { useFavs } from '../Context';
import ProductCard from '../components/ProductCard';

const FavesScreen = () => {
	const { favs } = useFavs();
	const [data, setData] = useState([]);
	const [favProducts, setFavProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'http://127.0.0.1:5500/WeatherWardrobe/app/api/scraped_data.json'
				);
				const jsonData = await response.json();
				setData(jsonData);
				filterApi(jsonData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, [favs]);

	const filterApi = (jsonData) => {
		const filteredProducts = jsonData.flatMap((a) => {
			if (a.items) {
				return a.items?.filter((x) => favs?.includes(x.id));
			}
			return [];
		});

		setFavProducts(filteredProducts);
	};

	return (
		<SafeAreaView
			style={{
				height: '100vh ',
				backgroundColor: '#ffb6b9',
			}}
		>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 20,
					marginBottom: '-50px',
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
						paddingLeft: 10,
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
						Favorites
					</Text>
				</View>
			</View>

			{favProducts.length > 0 ? (
				<ScrollView
					contentContainerStylee={{
						width: '100vw',
						flexDirection: 'row',
					}}
				>
					<ScrollView
						contentContainerStyle={{
							justifyContent: 'center',
							alignItems: 'center',
							width: '100vw',
							flexDirection: 'row',
							flexWrap: 'wrap',
							paddingBottom: 90,
						}}
					>
						{favProducts?.map((product) => (
							<ProductCard product={product} id={product.id} key={product.id} />
						))}
					</ScrollView>
				</ScrollView>
			) : (
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							fontSize: 17,
						}}
					>
						No Favorites Added!
					</Text>
				</View>
			)}
		</SafeAreaView>
	);
};

export default FavesScreen;
