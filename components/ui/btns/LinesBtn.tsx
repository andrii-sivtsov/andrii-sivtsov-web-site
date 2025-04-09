import NextLink from 'next/link'
import styles from './linesBtn.module.scss'

interface LinkBtnProps {
	href: string
	text: string
	newTab?: boolean
}

export default function LinesBtn({ href, text, newTab }: LinkBtnProps) {
	return (
		<NextLink
			href={href}
			className={styles['btn']}
			target={newTab ? '_blank' : '_self'}
			rel={newTab ? 'noopener noreferrer' : undefined}
		>
			<div className={styles['btn_line-01']}></div>
			<div className={styles['btn_line-02']}></div>
			<div className={styles['btn_line-03']}></div>
			<div className={styles['btn_line-04']}></div>
			<div className={styles['btn_content']}>
				<p>{text}</p>
				<div className={styles['btn_icon']}>
					<svg
						width='100%'
						viewBox='0 0 25 25'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M3 20.3819L3 23.2391L20.1429 23.2391L23 23.2391L23 3.23906L20.1429 3.23906L20.1429 18.3446L3.79826 2L1.77796 4.0203L18.1396 20.3819L3 20.3819Z'
							fill='currentColor'
						/>
					</svg>
				</div>
			</div>
		</NextLink>
	)
}
