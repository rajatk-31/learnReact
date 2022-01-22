import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
// import Greet from './components/greet'
// import Welcome from './components/welcome'
// import Message from './components/message';
// import Counter from './components/counter';
// import FunctionClick from './components/functionClick';
// import EventBind from './components/eventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
       {/* <Greet name ="Rajat">
         <h3>This is child</h3>
         </Greet>
       <Welcome /> */}
       {/* <FunctionClick /> */}
       
       <ParentComponent></ParentComponent>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Baba ji ki booti
          <greet />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
