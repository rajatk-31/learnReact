import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
// import Greet from './components/greet'
// import Welcome from './components/welcome'
// import Message from './components/message';
// import Counter from './components/counter';
// import FunctionClick from './components/functionClick';
// import EventBind from './components/eventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreetings from './components/UserGreetings';
// import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
//css applies to child components but not module css
function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
       {/* <Greet name ="Rajat">
         <h3>This is child</h3>
         </Greet>
       <Welcome /> */}
       {/* <FunctionClick /> */}
       
       <Stylesheet primary={true}></Stylesheet>
       <Inline></Inline>
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
