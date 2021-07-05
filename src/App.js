import logo from './logo.svg';
import './App.css';
import CountryList from './Components/CountryList';
import DataPost from './Components/DataPost';

function App() {
	return (
		<div className='App'>
			<DataPost></DataPost>
			<CountryList></CountryList>
		</div>
	);
}

export default App;
