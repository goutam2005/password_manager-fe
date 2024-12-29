import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './Router/manager.js';
import db from './db/mysql.js';
import CORS from 'cors';

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(CORS());
(async () => {
  try {
      await db.sync(); // Use { force: true } only during development/testing
      console.log('Database synchronized.');
  } catch (error) {
      console.error('Error synchronizing the database:', error);
  }
})();

app.use('/api', userRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})

