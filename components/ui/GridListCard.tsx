import { clsx } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import styles from './gridlistcard.module.scss'

interface GridListCardProps {
	title: string
	slug: string
	year: string
	services: string[]
	cover: string
	view: 'grid' | 'list'
}

export default function GridListCard({
	title,
	slug,
	year,
	services,
	cover,
	view,
}: GridListCardProps) {
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
					<p>{title}</p>
					<p>{year}</p>
				</div>

				<div className={styles['grid-list-card_services']}>
					{services.map((service, i) => (
						<p key={i}>{service}</p>
					))}
				</div>
				<div className={styles['grid-list-card_image']}>
					<Image
						src={cover}
						className='image-cover'
						alt='title'
						fill
						sizes='(min-width: 1440px) 26vw, 100vw'
					/>
				</div>
			</article>
		</Link>
	)
}
