import { clsx } from '@/lib/utils'
import styles from './processcard.module.scss'

interface ProcessCardProps {
	text: string
	className?: string
}

export default function ProcessCard({ text, className }: ProcessCardProps) {
	return (
		<article className={clsx(styles['card'], className)}>
			<p>{text}</p>
		</article>
	)
}
