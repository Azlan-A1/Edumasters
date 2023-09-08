interface Currency {
	currency: string
	unit_amount: number
}

export const displayCurrency = ({
	currency,
	unit_amount,
}: Currency): string => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
	})

	return formatter.format(unit_amount / 100)
}
