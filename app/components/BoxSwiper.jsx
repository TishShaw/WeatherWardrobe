import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableWithoutFeedback,
} from 'react-native';
import Swiper from 'react-native-swiper';
import BoxModal from './BoxModal';

const BoxSwiper = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [data, setData] = useState(null);
	const [filteredData, setFilteredData] = useState([]);
	const [isSlideUpVisible, setIsSlideUpVisible] = useState(true);
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const handleIndexChanged = (index) => {
		setCurrentIndex(index);
	};

	const handleBoxPress = (category) => {
		console.log(`Clicked on ${category}`);

		const item = data.filter((item) => item.category == category);
		console.log(item?.[0].items);

		setFilteredData(item?.[0].items);
		setIsSlideUpVisible(true);
		console.log('filteredData', filteredData);
	};

	const categories = [
		{
			name: 'Tops',
			imageSource: require('../../assets/icons8-clothes-64.png'),
		},
		{
			name: 'Bottoms',
			imageSource: require('../../assets/icons8-womens-pants-96.png'),
		},
		{ name: 'Shoes', imageSource: require('../../assets/icons8-shoes-96.png') },
		{
			name: 'Accessories',
			imageSource: require('../../assets/icons8-beret-96.png'),
		},
	];

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'http://127.0.0.1:5500/WeatherWardrobe/app/api/scraped_data.json'
				); // Replace with your API endpoint
				const jsonData = await response.json();
				setData(jsonData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<View
			style={{
				height: '100%',
			}}
		>
			<Swiper
				loop={false}
				index={currentIndex}
				onIndexChanged={handleIndexChanged}
				showsPagination={false}
			>
				{categories.map((category, index) => (
					<TouchableWithoutFeedback
						key={index}
						onPress={() => {
							handleBoxPress(category.name);
							toggleModal();
						}}
					>
						<View style={styles.box}>
							<Text style={{ fontSize: 30 }}>{category.name}</Text>
							<Image
								source={category.imageSource}
								style={{ height: 205, width: 205 }}
							/>
						</View>
					</TouchableWithoutFeedback>
				))}
			</Swiper>
			<BoxModal
				isVisible={isModalVisible}
				onClose={toggleModal}
				products={filteredData}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '85%',
		borderWidth: 1,
	},
});

export default BoxSwiper;
