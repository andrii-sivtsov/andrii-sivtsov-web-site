import styles from './stackcard.module.scss'

interface StackCardProps {
	text: string
}

export default function StackCard({ text }: StackCardProps) {
	return (
		<article className={styles['card']}>
			<p>{text}</p>
		</article>
	)
}
