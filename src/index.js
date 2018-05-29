import React    from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//1. React.createElement('h2',null,'hey this is the first way')
//2. write JSX there ; This is the 2nd way
//3. To make a component and pass it: 3rd way

ReactDOM.render(
  //React.createElement('h2',null,'hello react'),
  <App initialContests = {[]} />,
  document.getElementById('root')
);

// setTimeout(()=>{
//   ReactDOM.render(
//     //React.createElement('h2',null,'hello react'),
//     <h2>....</h2>,
//     document.getElementById('root')
//   );
// }, 4000);
