export default function toCurrency(amount: number) {
	return new Intl.NumberFormat('pt-br', {
		style: 'currency',
		currency: 'BRL',
	}).format(amount);
}
