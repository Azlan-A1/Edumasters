interface Currency {
	currency: string
	unit_amount: number | null
}

export const displayCurrency = ({
	currency,
	unit_amount,
}: Currency): string => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
	})

	if (!unit_amount) {
		return formatter.format(0)
	}

	return formatter.format(unit_amount / 100)
}
