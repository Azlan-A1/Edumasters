// Next
import Link from 'next/link'

// Styles
import styles from './GradePricingTable.module.scss'

// Packages
import classNames from 'classnames'

interface GradePricingTableProps {}

interface PricingItemProps {
	title?: string
	description?: string
	featured?: boolean
}

const GradePricingTable = () => {
	const PricingItem = (props: PricingItemProps) => {
		return (
			<div
				className={classNames(styles.pricing_item, {
					[styles.featured]: props.featured,
				})}
			>
				<p className={styles.title}>{props.title || 'ACT 31+'}</p>
				<p className={styles.online_tag}>Online tutoring</p>
				<div className={styles.pricing}>
					<p className={styles.price}>
						$40
						<span className={styles.price_frequency}>/hour</span>
					</p>
				</div>
				<p className={styles.description}>
					{props.description || 'Increase your score. Guaranteed!*'}
				</p>
				<Link href='/book-now?grade=act?id=guaranteed-pass'>
					<button className={styles.buy_button}>Book Now</button>
				</Link>
			</div>
		)
	}

	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<div className={styles.table}>
					<PricingItem title='Standard' />
					<PricingItem title='Guaranteed Pass*' featured />
					<PricingItem />
				</div>
				<p className={styles.disclaimer}>
					*Please see our full terms and conditions for details.
				</p>
			</div>
		</div>
	)
}

export default GradePricingTable
