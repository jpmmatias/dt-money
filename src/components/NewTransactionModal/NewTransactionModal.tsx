import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import {
	CloseButton,
	Container,
	TransactionTypeContainer,
	RadioBox,
} from './styles';
import closeSVG from '../../assets/close.svg';
import incomeSVG from '../../assets/income.svg';
import outcomeSVG from '../../assets/outcome.svg';

interface NewTransactionModalProps {
	isOpen: boolean;
	handleCloseNewTransactionModal: () => void;
	onRequestClose: () => void;
}

const NewTransactionModal = ({
	isOpen,
	handleCloseNewTransactionModal,
	onRequestClose,
}: NewTransactionModalProps) => {
	const [type, setType] = useState('');
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [value, setValue] = useState(0);

	function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={handleCloseNewTransactionModal}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'>
			<CloseButton type='button' onClick={onRequestClose}>
				<img src={closeSVG} alt='Fechar modal' />
			</CloseButton>
			<Container>
				<h2>Cadastrar transação</h2>
				<input
					type='text'
					placeholder='Título'
					onChange={({ target: { value } }) => setTitle(value)}
				/>
				<input
					onChange={({ target: { value } }) => setValue(Number(value))}
					type='number'
					placeholder='Valor'
				/>
				<TransactionTypeContainer>
					<RadioBox
						type='button'
						isActive={type === 'deposit'}
						activeColor='green'
						onClick={() => {
							setType('deposit');
						}}>
						<img src={incomeSVG} alt='Entrada' />
						<span>Entrada</span>
					</RadioBox>
					<RadioBox
						type='button'
						isActive={type === 'withdraw'}
						activeColor='red'
						onClick={() => {
							setType('withdraw');
						}}>
						<img src={outcomeSVG} alt='Saida' />
						<span>Saida</span>
					</RadioBox>
				</TransactionTypeContainer>
				<input
					placeholder='Categoria'
					onChange={({ target: { value } }) => setCategory(value)}
				/>
				<button onClick={handleCreateNewTransaction} type='submit'>
					Cadastrar
				</button>
			</Container>
		</Modal>
	);
};

export default NewTransactionModal;
