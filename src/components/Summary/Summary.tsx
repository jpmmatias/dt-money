import { Container } from './styles';
import iconeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import toCurrency from '../../utils/formatCurrency';
import { useTransaction } from '../../hooks/useTransactions';

const Summary = () => {
	const { transactions } = useTransaction();

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === 'deposit') {
				acc.deposits += transaction.amount;
				acc.total += transaction.amount;
			} else {
				acc.withdraws += transaction.amount;
				acc.total -= transaction.amount;
			}

			return acc;
		},
		{
			deposits: 0,
			withdraws: 0,
			total: 0,
		}
	);

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={iconeSVG} alt='Entradas' />
				</header>
				<strong> {toCurrency(summary.deposits)}</strong>
			</div>
			<div>
				<header>
					<p>Saidas</p>
					<img src={outcomeSVG} alt='Saidas' />
				</header>
				<strong>-{toCurrency(summary.withdraws)}</strong>
			</div>

			<div>
				<header>
					<p>Total</p>
					<img src={totalImg} alt='Total' />
				</header>
				<strong>{toCurrency(summary.total)}</strong>
			</div>
		</Container>
	);
};

export default Summary;
