import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';
import toCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

interface Transaction {
	id: number;
	title: string;
	amount: number;
	category: string;
	type: string;
	createdAt: string;
}

const TransactionsTable = () => {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api
			.get('transactions')
			.then((response) => setTransactions(response.data.transactions));
	}, []);

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => (
						<tr key={transaction.id}>
							<td>{transaction.title}</td>
							<td className={transaction.type}>
								{toCurrency(transaction.amount)}
							</td>
							<td>{transaction.category}</td>
							<td>{formatDate(transaction.createdAt)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	);
};

export default TransactionsTable;
