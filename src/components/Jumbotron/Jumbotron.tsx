// Next
import Image from 'next/image'

// Assets
import header from '@/assets/images/header.webp'
import elsa from '@/assets/images/elsa_t.webp'

// Icons
import { IconStarFilled } from '@tabler/icons-react'

const Jumbotron = () => {
	return (
		<div className='w-full py-20'>
			<div className='container grid h-full grid-cols-1 gap-8 md:grid-cols-2'>
				<div className='flex flex-col justify-center'>
					<h1 className='text-5xl'>Succeed with Edumasters</h1>
					<p className='mt-4 text-xl'>
						We are committed to provide quality education that can able to
						achieve your goals
					</p>
					<p className='mt-8 text-lg font-medium text-pink-500'>
						We've helped over <span>1,000</span> students to achieve their goals
						so far
					</p>

					<div className='mt-8'>
						<div className='px-4 py-2 space-y-4 rounded-lg shadow-xl w-fit'>
							<div className='flex items-center'>
								<div className='relative mr-4 overflow-hidden bg-gray-100 rounded-full w-14 h-14'>
									<Image
										src={elsa}
										alt='Elsa T.'
										className='object-cover'
										fill
									/>
								</div>
								<div>
									<p>Elsa T.</p>
									<p className='text-xs'>Took LSAT Tutoring with Edumasters</p>
								</div>
								<div className='flex items-center ml-auto space-x-1 text-yellow-500'>
									<IconStarFilled size={16} />
									<IconStarFilled size={16} />
									<IconStarFilled size={16} />
									<IconStarFilled size={16} />
									<IconStarFilled size={16} />
								</div>
							</div>
							<p>Edumasters was incredible at helping me pass my LSAT!</p>
						</div>
					</div>
				</div>
				<div className='relative hidden w-full md:block md:h-full'>
					<Image
						src={header}
						alt='Header Image'
						fill
						className='object-contain md:scale-100 xl:scale-150'
					/>
				</div>
			</div>
		</div>
	)
}

export default Jumbotron
