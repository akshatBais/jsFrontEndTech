import express from 'express';
import data from '../src/testData';
import apiRouter2 from '../apiTwo';

const router = express.Router();

router.get('/contests', (req,res) => {
  res.send({contests: data.contests});
});

//The below routing is an exmaple of double routing
router.use('/apiTwo', apiRouter2);



export default router;
