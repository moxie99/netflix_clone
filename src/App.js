import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests'; 
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      <Banner />
      <h1>Building a Netflix clone with clever programmer</h1>

       <Row title="NETFLIX ORIGINALS" 
       fetchUrl = {requests.fetchNetflixOriginals}
       isLargeRow
       />
       <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
       <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
       <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
       <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
       <Row title="Toprated Movies" fetchUrl = {requests.fetchTopRated}/>
       <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
       <Row title="Trending Movies" fetchUrl = {requests.fetchTrending}/>
    </div>
  );
}  

export default App;
