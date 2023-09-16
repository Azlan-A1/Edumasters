// Data
import { Service, ServicePricingItem } from '@/types/service.types'

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

// Icons
import { IconExclamationCircle } from '@tabler/icons-react'

interface ExamPricingTableProps {
	data: Service
}

const ExamPricingTable = (props: ExamPricingTableProps) => {
	const prices = props.data.pricingTable

	const PricingItem = async (
		props: ServicePricingItem & {
			slug: string
		}
	) => {
		const price: {
			currency: string
			unit_amount: number | null
		} | null = await getExamPrice(props.stripePriceId)

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
						{price ? (
							<>
								{displayCurrency(price)}
								<span className={styles.price_frequency}>/hour</span>
							</>
						) : (
							<span className='flex items-center text-base'>
								<IconExclamationCircle className='mr-2' />
								Stripe Price ID required
							</span>
						)}
					</p>
				</div>
				<p className={styles.description}>{props.tagline}</p>
				<Link href={`/book-now?service=${props.slug}&package=${props.sku}`}>
					<button className={styles.buy_button}>Book Now</button>
				</Link>
			</div>
		)
	}

	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<div className={styles.table}>
					{prices.map((item) => {
						return (
							<PricingItem key={item.sku} {...item} slug={props.data.slug} />
						)
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
	if (!stripePriceId) return null

	try {
		const response = await stripe.prices.retrieve(stripePriceId, {
			apiKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
		})

		return {
			currency: response.currency,
			unit_amount: response.unit_amount,
		}
	} catch (error) {
		return null
	}
}

export default ExamPricingTable
