import express from 'express'
import 'dotenv/config';
import serverless from 'serverless-http';

const app = express();
const router = express.Router();
const port = process.env.PORT;

router.get('/', (req, res) => {
  res.send('App is running..');
});

router.get('/healthcheck', (req, res) => {
    res.status(200).send("healthy");
})

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);



app.listen(port, () => {
    console.log(`server is running on http://http://127.0.0.1:${port}`);
});