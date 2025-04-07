import { clsx } from '@/lib/utils'
import { Elements } from '@/types/global'
import { forwardRef } from 'react'

const PageGrid = forwardRef<HTMLDivElement, Elements>(
	({ children, className }, ref) => {
		return (
			<div ref={ref} className={clsx('page-grid', className)}>
				{children}
			</div>
		)
	}
)

PageGrid.displayName = 'PageGrid'
export default PageGrid
