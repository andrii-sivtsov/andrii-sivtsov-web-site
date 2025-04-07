import { clsx } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import TextLink from '../ui/TextLink'
import styles from './Header.module.scss'
import PageGrid from './PageGrid'

export default function Header() {
	const [actualTime, setActualTime] = useState('')

	useEffect(() => {
		const updateTime = () => {
			const now = new Date()
			const utc = now.getTime() + now.getTimezoneOffset() * 60000
			const local = new Date(utc + 3 * 3600000) // UTC+3 (MSK)

			let hours = local.getHours()
			const minutes = local.getMinutes().toString().padStart(2, '0')
			const period = hours >= 12 ? 'PM' : 'AM'

			hours = hours % 12 || 12 // 0 → 12

			setActualTime(`${hours}:${minutes} ${period}`)
		}

		updateTime()
		const interval = setInterval(updateTime, 10000)
		return () => clearInterval(interval)
	}, [])

	return (
		<header className={styles.header} data-theme='light'>
			<div className='container'>
				<PageGrid className={styles['header_wrapper']}>
					<Link href='/' className={styles.logo}>
						Andrii Sivtsov
					</Link>
					<div
						className={clsx(styles['local-time'], 'text-14px')}
						title='UTC+3'
					>
						<span className={styles['local-time_text']}>{actualTime}</span>,
						Local
					</div>

					<div className={styles['header_menu']}>
						<nav className={styles.header_nav}>
							<TextLink href='/cases' text='Cases' />
							<TextLink href='/about' text='About' />
							<TextLink href='/contacts' text='Contacts' />
							<TextLink href='#' text='Designer Diary' newTab />
						</nav>
						<div>
							<TextLink
								href='mailto:andriisivtsov@gmail.com'
								text='hello@andriisivtsov.com'
								newTab
							/>
						</div>
						<div className={styles['header-login']}>
							<TextLink href='#' text='Log in' dataElement='header-login' />
						</div>
					</div>
				</PageGrid>
			</div>
		</header>
	)
}
