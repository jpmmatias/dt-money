import { Header, Dashboard, NewTransactionModal } from './components';
import { useState } from 'react';
import GlobalStyle from './styles/globalStyle';
import Modal from 'react-modal';
import { TransactionProvider } from './contexts/TransactionContext';

Modal.setAppElement('#root');

function App() {
	const [isNewTransactionModalOpen, setisNewTransactionModalOpen] =
		useState(false);

	function handleOpenNewTransactionModal() {
		setisNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setisNewTransactionModalOpen(false);
	}
	return (
		<TransactionProvider>
			<Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<GlobalStyle />
			<NewTransactionModal
				onRequestClose={handleCloseNewTransactionModal}
				isOpen={isNewTransactionModalOpen}
				handleCloseNewTransactionModal={handleCloseNewTransactionModal}
			/>
		</TransactionProvider>
	);
}

export default App;
