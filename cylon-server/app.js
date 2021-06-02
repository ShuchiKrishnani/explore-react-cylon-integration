import express from 'express';
import cors from 'cors';
const port = process.env.PORT || 5000;
import cylonRouter from './api-routes/router.js';

var app = express();

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/cylonRoute", cylonRouter);

app.listen(port).on('listening', () => {
    console.log(`🚀 are live on ${port}`);
  });
  
  
export default app;