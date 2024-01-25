import express from 'express'
import 'dotenv/config';
import serverless from 'serverless-http';
import { routes } from '../routes';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { connect } from '../utils/connect';


connect();

const app = express();
app.use(express.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(morgan('dev'));
const router = express.Router();

router.get('/', (req, res) => {
  res.send('App is running..');
});

//routes
 routes(router);

app.use('/api', router);
module.exports.handler = serverless(app);


 
