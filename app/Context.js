import { createContext, useContext, useState } from 'react';

const FavsContext = createContext();

export const FavsProvider = ({ children }) => {
	const [favs, setFavs] = useState([]);

	const toggleFav = (productId) => {
		setFavs((prevFavs) =>
			prevFavs.includes(productId)
				? prevFavs.filter((id) => id !== productId)
				: [...prevFavs, productId]
		);
	};

	return (
		<FavsContext.Provider value={{ favs, toggleFav }}>
			{children}
		</FavsContext.Provider>
	);
};

export const useFavs = () => {
	const context = useContext(FavsContext);
	if (!context) {
		throw new Error('useFavs must be used within a FavsProvider');
	}
	return context;
};
