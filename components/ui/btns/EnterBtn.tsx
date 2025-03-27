import { clsx } from '../../../lib/utils'
import styles from './enterbtn.module.scss'

interface EnterBtnProps {
	text: string
	style?: 'white' | 'black'
}

export default function EnterBtn({ text, style = 'black' }: EnterBtnProps) {
	return (
		<button
			className={clsx(
				styles['enter-btn'],
				style === 'white' && styles['enter-btn--white']
			)}
		>
			<div className={styles['enter-btn_corner']}></div>
			<div className={styles['enter-btn_wrapper']} data-text={text}>
				<div className={styles['enter-btn_arrow']}>
					<svg
						width='30'
						height='12'
						viewBox='0 0 30 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0 8.55716L5 11.4439V9.05716H30V0.557129H29V8.05713L5 8.05716V5.67041L0 8.55716Z'
							fill='currentColor'
						/>
					</svg>
				</div>
				<span className={styles['enter-btn_text']}>{text}</span>
			</div>
		</button>
	)
}
