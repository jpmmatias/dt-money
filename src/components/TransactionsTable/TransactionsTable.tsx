import { Container } from './styles';
import toCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import { useContext } from 'react';
import { TransactionContext } from '../../contexts/TransactionContext';

const TransactionsTable = () => {
	const transactions = useContext(TransactionContext);
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
