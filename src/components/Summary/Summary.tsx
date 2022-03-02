import { Container } from './styles';
import iconeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

const Summary = () => {
	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={iconeSVG} alt='Entradas' />
				</header>
				<strong>$1000,00</strong>
			</div>
			<div>
				<header>
					<p>Saidas</p>
					<img src={outcomeSVG} alt='Saidas' />
				</header>
				<strong>- $500,00</strong>
			</div>

			<div>
				<header>
					<p>Total</p>
					<img src={totalImg} alt='Total' />
				</header>
				<strong>$500,00</strong>
			</div>
		</Container>
	);
};

export default Summary;
