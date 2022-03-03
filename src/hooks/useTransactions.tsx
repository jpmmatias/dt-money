import {
	createContext,
	useState,
	useEffect,
	ReactNode,
	useContext,
} from 'react';

import { api } from '../services/api';

interface Transaction {
	id: number;
	title: string;
	amount: number;
	category: string;
	type: string;
	createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
	children: ReactNode;
}

interface TransactionsContextTypes {
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionsContextTypes>(
	{} as TransactionsContextTypes
);

export function TransactionProvider({ children }: TransactionProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api
			.get('transactions')
			.then((response) => setTransactions(response.data.transactions));
	}, []);

	async function createTransaction(transaction: TransactionInput) {
		const response = await api.post('/transactions', transaction);
		const newTransaction = response.data.transaction;

		setTransactions([...transactions, newTransaction]);
	}
	return (
		<TransactionContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionContext.Provider>
	);
}

export function useTransaction() {
	const context = useContext(TransactionContext);

	return context;
}
