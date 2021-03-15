import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import apiRouter from './routes';
import config from './config';

const app = express();

//sauce for compressing req/res objects to be smaller in size
app.use(cors());
app.use(express.static('public'));

app.use(express.json());
app.use('/api', apiRouter);

//sauce for front-end routes being caught by server
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.listen(3000, (err) => {
    //crash the node script if an error occurs
	if (err) {
		process.exit(1);
	}
	console.log(`server listening on port 3000`);
});