// Styles
import styles from './Statistics.module.scss'

const Statistics = () => {
	const statistics = [
		{
			number: 1000,
			prefix: '',
			suffix: '+',
			text: 'Students Educated',
		},
		{
			number: 99,
			prefix: '',
			suffix: '%',
			text: 'Pass Rate',
		},
		{
			number: 500,
			prefix: '',
			suffix: '+',
			text: 'Positive Reviews',
		},
		{
			number: 10,
			prefix: '',
			suffix: '+',
			text: 'Years of Experience',
		},
	]

	return (
		<div className={styles.base}>
			<div className={styles.content}>
				<div className={styles.statistics}>
					{statistics.map((statistic, index) => (
						<div key={index} className={styles.statistics_item}>
							<div className={styles.statistics_item_number}>
								{statistic.prefix}
								{statistic.number}
								{statistic.suffix}
							</div>
							<div className={styles.statistics_item_text}>
								{statistic.text}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Statistics
