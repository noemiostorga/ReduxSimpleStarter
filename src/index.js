import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';


const API_KEY = "AIzaSyCJOJyjR6J67ksSWipQvBE3zYz-MzqBoj4";


YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
})


const App = () =>{
	return (
	<div>
		<SearchBar />
	</div>
	)
}

ReactDOM.render(<App />, document.querySelector(".container"));

