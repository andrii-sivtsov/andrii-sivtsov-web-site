import NextLink from 'next/link'
import styles from './servicecard.module.scss'

interface ServiceCardProps {
	title: string
	href: string
	services: string[]
}

export default function ServiceCard({
	title,
	services,
	href,
}: ServiceCardProps) {
	return (
		<NextLink href={href}>
			<article className={styles['service-card']}>
				<div className={styles['service-card_top']}>
					<h3 className='text-32px'>{title}</h3>
					<div className={styles['service-card_icon']}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='100%'
							viewBox='0 0 20 20'
							fill='none'
						>
							<path
								d='M16.0005 17.7144H18.2862V4.00007V1.71436H16.0005H2.28616L2.28616 4.00007L14.371 4.00007L1.29492 17.0761L2.91117 18.6924L16.0005 5.6031L16.0005 17.7144Z'
								fill='white'
							/>
						</svg>
					</div>
				</div>
				<ul className={styles['service-card_bot']}>
					{services.map((service, i) => (
						<li key={i}>{service}</li>
					))}
				</ul>
				<div className={styles['service-card_content']}></div>
			</article>
		</NextLink>
	)
}
