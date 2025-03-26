import { useIsomorphicLayoutEffect } from '@/lib/hooks/useIsomorphicLayoutEffect'
import { gsap } from 'gsap'
import { useRef } from 'react'
import styles from './Tab.module.scss'

interface TabProps {
	label: string
	isActive?: boolean
	onClick?: () => void
}

export default function Tab({ label, isActive = false, onClick }: TabProps) {
	const lineRefs = useRef<(HTMLDivElement | null)[]>([])
	const iconRef = useRef<HTMLDivElement | null>(null)

	useIsomorphicLayoutEffect(() => {
		if (lineRefs.current.length === 0) return

		const lines = [...lineRefs.current]
			.reverse()
			.filter(Boolean) as HTMLDivElement[]

		const tl = gsap.timeline()

		if (isActive) {
			tl.to(lines, {
				clipPath: 'inset(0 0 0 0)',
				duration: 0.3,
				stagger: 0.03,
				ease: 'power2.out',
			})
		} else {
			tl.to(lines, {
				clipPath: 'inset(100% 0 0 0)',
				duration: 0.25,
				stagger: 0.02,
				ease: 'power1.in',
			})
		}
	}, [isActive])

	return (
		<button
			className={styles.tab}
			role='tab'
			aria-selected={isActive}
			onClick={onClick}
		>
			{[1, 2, 3, 4].map((n, i) => (
				<div
					key={n}
					ref={el => (lineRefs.current[i] = el)}
					className={styles[`tab_line-${n}`]}
				/>
			))}

			<div className={styles['tab_content']}>
				<div className='text-14px'>{label}</div>
				<div
					ref={iconRef}
					className={`${styles['tab_icon']} ${
						isActive ? styles['is--active'] : ''
					}`}
				></div>
			</div>
		</button>
	)
}
