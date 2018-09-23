import React    from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';
//1. React.createElement('h2',null,'hey this is the first way')
//2. write JSX there ; This is the 2nd way
//3. To make a component and pass it: 3rd way

axios.get('/api/contests')
.then(resp => {
  console.log(resp);
  ReactDOM.render(
    //React.createElement('h2',null,'hello react'),
    <App initialContests = {resp.data.contests} />,
    document.getElementById('root')
  );
})
.catch(console.error)



// setTimeout(()=>{
//   ReactDOM.render(
//     //React.createElement('h2',null,'hello react'),
//     <h2>....</h2>,
//     document.getElementById('root')
//   );
// }, 4000);
