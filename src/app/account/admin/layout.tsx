// Types
import type { Metadata } from 'next'

// Components
import AdminSidebar from '@/components/AdminSidebar'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
	title: 'Admin Dashboard',
	description: 'Manage Edumasters from the admin dashboard.',
}

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<PageHeader title='Admin Dashboard' />

			<div className='container'>
				<div className='flex items-start space-x-8'>
					<AdminSidebar />
					<div className='grow'>{children}</div>
				</div>
			</div>
		</div>
	)
}
