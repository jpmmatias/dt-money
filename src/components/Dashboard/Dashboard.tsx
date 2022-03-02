import { Summary, TransactionsTable } from '..';
import { Container } from './styles';

const Dashboard = () => {
	return (
		<Container>
			<Summary />
			<TransactionsTable />
		</Container>
	);
};

export default Dashboard;
