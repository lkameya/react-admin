import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const getData = () => {
    console.log('Teste');
    fetch('https://admin-react-api.lkameya.com/values')
                    .then((response) => {
                      response.json().then(data => {
                        console.log(data);
                      });
                    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
          {getData()}
        </a>
      </header>
    </div>
  );
}

export default App;
