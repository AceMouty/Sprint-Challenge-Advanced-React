import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode(key, initalValue) {
	const [darkMode, setDarkMode] = useLocalStorage(key, initalValue);

	useEffect(() => {
		if (darkMode){
			const body = document.querySelector('body');
			body.classList.add('dark-mode');
		}
		else {
			const body = document.querySelector('body');
			body.classList.remove('dark-mode');
		}
	}, darkMode)

	return [darkMode, setDarkMode];
}

export default useDarkMode;