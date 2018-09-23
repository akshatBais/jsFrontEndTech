import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

class App extends React.Component {

state = {
  pageHeader : 'About',
  contests: this.props.initialContests
};

componentDidMount(){
  //axios : for ajax call to api.
}

render() {
  debugger;
  return (
    <div>
    <Header message={this.state.pageHeader} />
    <ContestList contests={this.state.contests} />
    </div>
  );
}
};

export default App;
