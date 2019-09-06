import React from 'react';
import axios from 'axios';

// Components
import NavBar from './components/Navbar'
import PlayerCard from './components/PlayerCard'
// Styles
import './App.scss';

class App extends React.Component {
	state = {
		data: []
	}

	abortContorller = new AbortController();

	componentDidMount() {
		axios('http://localhost:5000/api/players', {signal: this.abortContorller.signal})
		.then(res => this.setState({data: res.data}))
	}

	componentWillUnmount() {
		this.abortContorller.abort();
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
