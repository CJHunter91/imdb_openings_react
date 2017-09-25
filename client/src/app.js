import React from 'react';
import ReactDOM from 'react-dom';
import OpeningMovies from './components/OpeningMovies';

window.addEventListener('load', function () {
  ReactDOM.render(
    <OpeningMovies/>,
    document.getElementById('app')
  );
});


