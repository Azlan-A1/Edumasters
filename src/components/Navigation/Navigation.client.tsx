'use client'

// React
import { useEffect, useState } from 'react'

// Next
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Assets
import logo from '@/assets/brand/edumasters_horizontal.svg'

// Framer Motion
import { motion } from 'framer-motion'

// Icons
import { IconArrowNarrowLeft, IconMenu } from '@tabler/icons-react'
import { createPortal } from 'react-dom'

interface MobileNavigationProps {
	links: {
		name: string
		path: string
	}[]
}

export const MobileNavigation = (props: MobileNavigationProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const pathname = usePathname()

	const handleClick = () => setIsOpen((state) => !state)

	// automatically close the menu when the route changes
	useEffect(() => setIsOpen(false), [pathname])

	// disable scrolling when the menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])

	return (
		<>
			<button onClick={handleClick} className='block md:hidden px-2'>
				<IconMenu />
			</button>

			{isOpen &&
				createPortal(
					<motion.div
						className='fixed flex flex-col h-screen w-full bg-white left-0 top-0 z-50 max-w-lg -translate-x-2 shadow-2xl'
						initial={{ opacity: 0, x: '-100vw' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '-100vw' }}
						transition={{
							type: 'tween',
						}}
					>
						<div className='flex items-center justify-between p-4'>
							<Link href='/'>
								<Image
									src={logo}
									alt='Edumasters Logo'
									height={0}
									width={200}
								/>
							</Link>
							<button onClick={handleClick}>
								<IconArrowNarrowLeft />
							</button>
						</div>
						<div className='flex flex-col p-4 h-full'>
							<ul>
								{props.links.map((link, index) => (
									<li key={index}>
										<Link href={link.path}>{link.name}</Link>
									</li>
								))}
							</ul>

							<div className='bg-gray-100 h-48 rounded mt-auto' />
						</div>
					</motion.div>,
					document.getElementById('navigation_portal') as HTMLElement
				)}
		</>
	)
}
