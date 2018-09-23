import express from 'express';
import config from './config';
import apiRouter from './api';
import sassMiddleWare from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';
//import fs from 'fs';


const server = express();

server.use(sassMiddleWare({
  src: path.join(__dirname,'sass'),
  dest: path.join(__dirname,'public')
}));

server.set('view engine','ejs');

//An example of server rendering .
//When javascript is disabled this will still get us the data . Useful during SEO
//This gets the data from the api first
//serverRender.then().catch()

//Initially index.js is called and page is loaded with no data , later server rrender takes place and fills with data

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

//To render from the api without server rendering and when JavaScript
//is disabld this will fetch nothing. The index here is the index.ejs
/*
server.get('/', (req,res) => {
  res.render('index', {
    content : '...'
  });
});
*/

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
