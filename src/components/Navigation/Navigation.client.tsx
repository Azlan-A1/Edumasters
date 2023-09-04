'use client'

// React
import { useState } from 'react'

// Icons
import { IconMenu } from '@tabler/icons-react'

interface MobileNavigationProps {
	links: {
		name: string
		path: string
	}[]
}

export const MobileNavigation = (props: MobileNavigationProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleClick = () => setIsOpen((state) => !state)

	return (
		<>
			<button onClick={handleClick}>
				<IconMenu />
			</button>

			{isOpen && (
				<div className='fixed h-full w-full bg-white left-0 top-0 z-50'>
					<button onClick={handleClick}>
						<IconMenu />
					</button>
					<p>Mobile Menu</p>
				</div>
			)}
		</>
	)
}
