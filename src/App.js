import React from 'react';
import ComputerClock from './components/Clock/ComputerClock.js'
import WorldClock from './components/Clock/WorldClock.js'
// import logo from './logo.svg';
import './App.css';


function App(props) {
  return (<div>
    <h1>exemplo dea acesso a açpi exgrdboi</h1>
    <ComputerClock />
    <WorldClock />
    <WorldClock  local="Europe/London"/>
  </div>);
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
