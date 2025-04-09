import { clsx } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import styles from './gridlistcard.module.scss'

interface GridListCardProps {
	slug: string
	project_name: string
	year: number
	services: string[]
	cover_image: string
	view: 'grid' | 'list'
}

const GridListCard: React.FC<GridListCardProps> = ({
	slug,
	project_name,
	year,
	services,
	cover_image,
	view,
}) => {
	return (
		<Link href={`/cases/${slug}`} className={styles['grid-list-card_link']}>
			<article
				className={clsx(
					'project-card',
					styles['grid-list-card'],
					view === 'list' && styles['is--list']
				)}
			>
				<div className={styles['grid-list-card_content']}>
					<p>{project_name}</p>
					<p>{year}</p>
				</div>

				<div className={styles['grid-list-card_services']}>
					{services.map((service, i) => (
						<p key={i}>{service}</p>
					))}
				</div>
				<div className={styles['grid-list-card_image']}>
					<Image
						src={cover_image}
						className='image-cover'
						alt={project_name}
						fill
						sizes='(min-width: 1440px) 26vw, 100vw'
					/>
				</div>
			</article>
		</Link>
	)
}

export default GridListCard
