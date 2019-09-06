import React from 'react';
import axios from 'axios';

// Components
import NavBar from './components/Navbar'
import PlayerCard from './components/PlayerCard'
// Styles
import './App.scss';

class App extends React.Component {
	
	// _isMounted = false;

	state = {
		data: []
	}

	// CancelToken = axios.CancelToken;
	// source = this.CancelToken.source();

	componentDidMount() {
		this._isMounted = true;

		axios('http://localhost:5000/api/players')
		.then(res =>  this._isMounted ? this.setState({data: res.data}) : null)
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	render(){
			return (
			<div className="App">
				<NavBar/>
				<div className="player-container">
					{this.state.data.map(player => {
						return <PlayerCard key={player.id} player={player}/>
					})}
				</div>
			</div>
		);
	}
  
}

export default App;
