// Styles
import Image from 'next/image'
import styles from './GoogleReviews.module.scss'

// Assets
import googleLogo from '@/assets/vectors/google_logo.svg'

// Icons
import { IconBrandGoogle, IconStarFilled } from '@tabler/icons-react'

const KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY as string

interface ReviewProps {
	author_name: string
	author_url: string
	profile_photo_url: string
	rating: number
	relative_time_description: string
	text: string
	time: number
}

const GoogleReviews = async () => {
	return null

	const data = await fetchReviews()

	if (!data) return null

	// split reviews into two arrays
	const first = data.slice(0, 3)
	const second = data.slice(3, 5)

	const Review = (props: ReviewProps) => {
		return (
			<div className={styles.review}>
				<div className={styles.review_header}>
					<div className={styles.review_avatar}>
						<Image
							src={props.profile_photo_url}
							alt={props.author_name}
							width={50}
							height={50}
						/>
					</div>
					<div className={styles.review_meta}>
						<p className={styles.review_author}>{props.author_name}</p>
						<div className={styles.review_rating}>
							{[...Array(props.rating)].map((star) => {
								return <IconStarFilled key={star} size={20} />
							})}
						</div>
					</div>
					<div className={styles.review_details}>
						<Image src={googleLogo} alt='Google Logo' width={80} height={0} />
					</div>
				</div>
				<div className={styles.review_body}>
					<p>{props.text}</p>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.base}>
			<div className={styles.reviews_grid}>
				<div className={styles.column}>
					{first.map((review: ReviewProps, i: number) => {
						return <Review key={i} {...review} />
					})}
				</div>
				<div className={styles.column}>
					{second.map((review: ReviewProps, i: number) => {
						return <Review key={i} {...review} />
					})}
				</div>
			</div>
		</div>
	)
}

async function fetchReviews() {
	try {
		const max = 10

		const response = await fetch(
			`https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_ID}&fields=reviews&review=${max}&key=${KEY}`
		)

		const data = await response.json()

		console.log(data)

		return data.result.reviews
	} catch (error) {
		return error
	}

	// return reviews
}

export default GoogleReviews
