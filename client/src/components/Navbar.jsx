import React from 'react';

function NavBar () {
	// Use custom hook for dark mode
	
	// Toggle controls
	function toggleMode () {
		e.preventDefault()
		setDarkMode(!darkMode)
	}
	return(
		<nav>
			<h1>Womens World Cup</h1>
			<div>
				<div
					onClick={() => toggleMode()}
					className={darkMode ? 'toggle toggled' : 'toggle'}
				></div>
			</div>
		</nav>
	)
}

export default NavBar;