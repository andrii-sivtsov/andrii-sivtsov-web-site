import styles from './Tab.module.scss'

interface TabProps {
	label: string
	isActive?: boolean
	onClick?: () => void
}

export default function Tab({ label, isActive = false, onClick }: TabProps) {
	return (
		<button
			className={styles.tab}
			role='tab'
			aria-selected={isActive}
			onClick={onClick}
		>
			<div className={styles['tab_line-1']}></div>
			<div className={styles['tab_line-2']}></div>
			<div className={styles['tab_line-3']}></div>
			<div className={styles['tab_line-4']}></div>
			<div className={styles['tab_content']}>
				<div className='text-14px'>{label}</div>
				<div className={styles['tab_icon']}></div>
			</div>
		</button>
	)
}
