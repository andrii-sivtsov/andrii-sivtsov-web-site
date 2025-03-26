import { clsx } from '@/lib/utils'
import styles from './gridlistcard.module.scss'

interface GridListCardProps {
	title: string
	year: string
	services: string[]
	view: 'grid' | 'list'
}

export default function GridListCard({
	title,
	year,
	services,
	view,
}: GridListCardProps) {
	return (
		<article
			className={clsx(
				'project-card',
				styles['grid-list-card'],
				view === 'list' && styles['is--list']
			)}
		>
			<div className={styles['grid-list-card_content']}>
				<p>{title}</p>
				<p>{year}</p>
			</div>

			<div className={styles['grid-list-card_services']}>
				{services.map((service, i) => (
					<p key={i}>{service}</p>
				))}
			</div>
		</article>
	)
}
