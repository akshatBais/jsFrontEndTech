//fetch the data from the apiRouter
import axios from 'axios';
import config from './config';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

const serverRender = () =>
  axios.get(config.serverUrl+'/api/contests')
        .then(resp => {
          console.log(resp.data);
          ReactDOMServer.renderToString(
            <App initialContests = {resp.data.contests}/>
          );
        });


export default serverRender;
