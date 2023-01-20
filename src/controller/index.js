import express from 'express';

const router = express.Router();

router.get('/', (request, response, next)=>{
  console.log("OK");
  response.send("OK");
});

export default router;