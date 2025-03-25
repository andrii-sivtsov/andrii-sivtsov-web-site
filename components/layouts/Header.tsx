import { clsx } from '@/lib/utils'
import Link from 'next/link'
import TextLink from '../ui/TextLink'
import styles from './Header.module.scss'
import PageGrid from './PageGrid'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className='container'>
				<PageGrid>
					<Link href='/' className={styles.logo}>
						Andrii Sivtsov
					</Link>
					<div className={clsx(styles['local-time'], 'text-14px')}>
						<span className={styles['local-time_text']}>1:05</span> AM, CET
					</div>
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
				</PageGrid>
			</div>
		</header>
	)
}
