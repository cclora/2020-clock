import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//       local: "Natal",
//       timezone: "+03:00"
//     };
//   }
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//       local: "mudou"
//     });
//     this.state = {date: new Date};
//   }

//   render() {
//     let {date, local} = this.state;
//     return (
//       <div>
//         <h2>It is {date.toLocaleTimeString()}.</h2>
//         <p>{local}</p>
//       </div>
//     );
//   }
// }

// function App(props) {
//   return (<div>
//     <h1>exemplo de estado de um componente react</h1>
//     <Clock />
//     <Clock />
//   </div>);
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
