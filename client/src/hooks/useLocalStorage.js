import { useState } from 'react';

const useLocalStorage = (key, initalValue) => {
	
	// Setting state based on if there is data in LS, if not then set data to be a value passed into the custom hook
	const [storedValue, setStoredValue] = useState(() => {
		const data = window.localStorage.getItem(key);
		return data ? JSON.parse(data) : initalValue;
	})

	// Setter function that we are going to pass up from here
	const setValue = value => {
		setStoredValue(value)
		localStorage.setItem(key, JSON.stringify(value));
	}


	return [storedValue, setValue]
}

export default useLocalStorage;