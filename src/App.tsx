import { Header, Dashboard, NewTransactionModal } from './components';
import { useState } from 'react';
import GlobalStyle from './styles/globalStyle';
import Modal from 'react-modal';

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
		<>
			<Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<GlobalStyle />
			<NewTransactionModal
				onRequestClose={handleCloseNewTransactionModal}
				isOpen={isNewTransactionModalOpen}
				handleCloseNewTransactionModal={handleCloseNewTransactionModal}
			/>
		</>
	);
}

export default App;
