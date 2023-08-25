// Components
import Button from '@/components/Button'
import Container from '@/components/Container'
import CourseGrid from '@/components/CourseGrid'
import Jumbotron from '@/components/Jumbotron'
import ServicesGrid from '@/components/ServicesGrid'
import USPs from '@/components/USPs'

// Assets
import magazine from '@/assets/images/magazine.webp'
import BlogGrid from '@/components/BlogGrid/BlogGrid'

export default function Home() {
	return (
		<div className='space-y-12'>
			<Jumbotron />
			<CourseGrid />
			<Container background='green' image={magazine} imageAlt='Magazine'>
				<h3>Our best colleges for 2024 are out!</h3>
				<p>
					Out lists name the top colleges in 50 categories from financial aid to
					career services based on a 165,000 student survey.
				</p>
				<p>Find your best college with The Best 389 Colleges: 2024 Edition!</p>
				<Button variant='primary'>See the 2024 Best Colleges</Button>
			</Container>
			<ServicesGrid />
			<USPs />
			<BlogGrid />
		</div>
	)
}
