import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
	handleOpenNewTransactionModal: () => void;
}

const Header = ({ handleOpenNewTransactionModal }: HeaderProps) => {
	return (
		<Container>
			<Content>
				<img src={logoImg} alt='dt-money' />
				<button onClick={handleOpenNewTransactionModal} type='button'>
					Nova Transação
				</button>
			</Content>
		</Container>
	);
};

export default Header;
