import express from 'express';
import config from './config';
import apiRouter from './api';
import sassMiddleWare from 'node-sass-middleware';
import path from 'path';

//import fs from 'fs';

const server = express();

server.use(sassMiddleWare({
  src: path.join(__dirname,'sass'),
  dest: path.join(__dirname,'public')
}));

server.set('view engine','ejs');

import serverRender from './serverRender';

server.get('/',(req,res) => {
  serverRender()
  .then(content => {
    res.render('index', {
      content: content
    });
  })
  .catch(console.error)

//res.send("hello express");
});


server.use('/api',apiRouter);
server.use(express.static('public'));

/* server.get('/about.html',(req,res) => {
  fs.readFile('./about.html',(err,data) =>{
res.send(data.toString());
  });

}); */


//second argument is the success function
server.listen(config.port, config.host, ()=>{
console.info('listening ', config.port, config.serverUrl);
});

// import config, {nodeEnv} from './config';
// import http from "http";
// const server = http.createServer();
//
// server.listen(8080);
//
// server.on('request',(req,res) => {
//   res.writeHead(200,{'Content-Type':'text/plain'});
//   res.write('Hello World');
//   res.end();
// },3000)
// console.log(config,nodeEnv);
