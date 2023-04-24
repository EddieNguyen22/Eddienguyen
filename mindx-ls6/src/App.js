import './App.css';

import {useState} from 'react'

const App = () => {

	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const toggleLogin = () => {
		setIsLoggedIn(prev => {return !prev})
	}

	return (
		<div>
			<button 
				style={{backgroundColor: isLoggedIn ? "yellow" : "red"}}
				onClick={toggleLogin}
			>
      </button>
      	{isLoggedIn ? "Logout" : "Login"}
		</div>
	)
}

export default App;
