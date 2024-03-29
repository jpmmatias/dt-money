import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs';

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Freelancer de web',
					category: 'Dev',
					amount: 6000,
					type: 'deposit',
					createdAt: new Date('2021-02-12 09:00:00'),
				},
				{
					id: 2,
					title: 'Freelancer de design',
					category: 'Dev',
					amount: 1000,
					type: 'withdraw',
					createdAt: new Date('2021-16-12 11:00:00'),
				},
			],
		});
	},
	routes() {
		this.namespace = 'api';
		this.get('/transactions', () => {
			return this.schema.all('transaction');
		});

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody);
			return schema.create('transaction', { ...data, createdAt: new Date() });
		});
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
