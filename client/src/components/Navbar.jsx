import React from 'react';
import useDarkMode from '../hooks/useDarkMode'
function NavBar () {
	// Use custom hook for dark mode
	const [darkMode, setDarkMode] = useDarkMode(false)
	// Toggle controls
	function toggleMode (e) {
		e.preventDefault()
		setDarkMode(!darkMode)
	}
	return(
		<nav className="navbar">
			<h1>Womens World Cup</h1>
			<div className="dark-mode__toggle">
				<div
					onClick={(event) => toggleMode(event)}
					className={darkMode ? 'toggle toggled' : 'toggle'}
				></div>
			</div>
		</nav>
	)
}

export default NavBar;