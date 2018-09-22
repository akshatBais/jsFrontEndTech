import express from 'express';

var router = express.Router();

//The below is an example of double routing and how to take parameters from the client side
router.get('/:id', (req, res) => {
  res.send("hello I have reached to double routing"+ req.params.id);
});
export default router;
