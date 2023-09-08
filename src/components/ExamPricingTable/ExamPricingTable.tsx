// Data
import { Exam } from '@/types/exam.types'

// Next
import Link from 'next/link'

// Lib
import { stripe } from '@/lib/stripe'

// Utils
import { displayCurrency } from '@/utils/displayCurrency'

// Styles
import styles from './ExamPricingTable.module.scss'

// Packages
import classNames from 'classnames'

interface ExamPricingTableProps {
	data: Array<Exam['pricingTable']>
}

const ExamPricingTable = (props: ExamPricingTableProps) => {
	const PricingItem = async (props: Exam['pricingTable']) => {
		const price = (await getExamPrice(props.stripePriceId)) as {
			currency: string
			unit_amount: number
		}

		let delivery

		switch (props.delivery) {
			case 'ONLINE':
				delivery = 'Online Tutoring'
				break
			case 'IN_PERSON':
				delivery = 'In Person Tutoring'
				break
			case 'BOTH':
				delivery = 'Online & In Person Tutoring'
				break
			default:
				delivery = 'Online Tutoring'
				break
		}

		return (
			<div
				className={classNames(styles.pricing_item, {
					[styles.featured]: props.featured,
				})}
			>
				<p className={styles.title}>{props.title}</p>
				<p className={styles.online_tag}>{delivery}</p>
				<div className={styles.pricing}>
					<p className={styles.price}>
						{displayCurrency(price)}
						<span className={styles.price_frequency}>/hour</span>
					</p>
				</div>
				<p className={styles.description}>{props.tagline}</p>
				<Link href='/book-now?type=act&option=guaranteed-pass'>
					<button className={styles.buy_button}>Book Now</button>
				</Link>
			</div>
		)
	}

	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<div className={styles.table}>
					{props.data.map((item) => {
						return <PricingItem {...item} />
					})}
				</div>
				<p className={styles.disclaimer}>
					*Please see our full terms and conditions for details.
				</p>
			</div>
		</div>
	)
}

const getExamPrice = async (stripePriceId: string) => {
	const response = await stripe.prices.retrieve(stripePriceId, {
		apiKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
	})

	console.log({ response })

	return {
		currency: response.currency,
		unit_amount: response.unit_amount,
	}
}

export default ExamPricingTable
