import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as cors from 'cors';
import apiRouter from './routes';
import config from './config';
import type { Error } from './utils/types';

const app = express();

//sauce for compressing req/res objects to be smaller in size
app.use(cors());
app.use(express.static('public'));

app.use(morgan('dev'));
app.use(express.json());
app.use(config.apiPrefix, apiRouter);

//global error handler for the app
app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(error.status || 500);
    res.json({ error: error.message });
});

//sauce for front-end routes being caught by server
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.listen(parseInt(config.port), (err) => {
    //crash the node script if an error occurs
	if (err) {
		process.exit(1);
	}
	console.log(`✌️ server listening on port: ${config.port} ✌️`);
});