import styles from './reviewcard.module.scss'

interface ReviewCardProps {
	client: string
	type: string
	details: string
}

export default function ReviewCard({ client, type, details }: ReviewCardProps) {
	return (
		<article className={styles['card']}>
			<div className={styles['card_cell']}>{client}</div>
			<div className={styles['card_cell']}>{type}</div>
			<div className={styles['card_cell']}>{details}</div>
		</article>
	)
}
