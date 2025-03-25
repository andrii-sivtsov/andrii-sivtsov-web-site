import { clsx } from '@/lib/utils'
import { Elements } from '@/types/global'

export default function PageGrid({ children, className }: Elements) {
	return <div className={clsx('page-grid', className)}>{children}</div>
}
