import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';


class App extends React.Component {

state = {
  pageHeader : 'About',
  contests: this.props.initialContests
};

componentDidMount(){
  //axios : for ajax call to api.
  axios.get('/api/contests')
  .then(resp => {
    console.log(resp);
    this.setState({
      contests: resp.data.contests });
  })
  .catch(console.error)

}

render() {
  return (
    <div>
    <Header message={this.state.pageHeader} />
      <div>
        {this.state.contests.map(contest=>
          <ContestPreview {...contest} />
        )}
      </div>
    </div>
  );
}
};

export default App;
