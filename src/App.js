import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Building a Netflix clone with clever programmer</h1>
       <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals}/>
       <Row title="Action Movies" fetchUrl = {requests.fetchTrending}/>
    </div>
  );
}  

export default App;
