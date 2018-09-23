import express from 'express';
import data from '../src/testData';
import apiRouter2 from '../apiTwo';
import react from 'react';
import reactDOM from 'react-dom';

const router = express.Router();

router.get('/contests', (req,res) => {
  res.send({contests: data.contests});
});

//The below routing is an exmaple of double routing
router.use('/apiTwo', apiRouter2);

//Below example also relates to double routing
router.get('/', (req,res) => {
  res.send(
        react.createElement('h2', null , 'hey this is another way')
  );
});



export default router;
