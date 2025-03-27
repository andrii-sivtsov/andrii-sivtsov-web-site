import NewsForm from '../ui/forms/NewsForm'
import TextLink from '../ui/TextLink'
import styles from './footer.module.scss'
import PageGrid from './PageGrid'

export default function Footer() {
	return (
		<footer className={styles['footer']}>
			<div className='container'>
				<PageGrid className={styles['footer_top']}>
					<div className={styles['footer_menu']}>
						<div className={styles['footer_sec-header']}>
							<div className={styles['footer_sec-line-01']}></div>
							<div className={styles['footer_sec-line-02']}></div>
							<div className={styles['footer_sec-line-03']}></div>
							<div className={styles['footer_sec-line-04']}></div>
							<div className={styles['footer_sec-header-content']}>
								<p className='text-14px'>Menu</p>
							</div>
						</div>
						<div className={styles['footer_menu-content']}>
							<div className={styles['footer_sec-links']}>
								<TextLink href='/cases' text='Cases' />
								<TextLink href='/about' text='About' />
								<TextLink href='/contacts' text='Contacts' />
								<TextLink href='#' text='Designer Diary' newTab />
							</div>
							<div className={styles['footer_sec-links']}>
								<TextLink href='#' text='Cookies Policy' newTab />
								<TextLink href='#' text='Privacy Policy' newTab />
							</div>
						</div>
					</div>
					<div className={styles['footer_social']}>
						<div className={styles['footer_sec-header']}>
							<div className={styles['footer_sec-line-01']}></div>
							<div className={styles['footer_sec-line-02']}></div>
							<div className={styles['footer_sec-line-03']}></div>
							<div className={styles['footer_sec-line-04']}></div>
							<div className={styles['footer_sec-header-content']}>
								<p className='text-14px'>Social</p>
							</div>
						</div>
						<div className={styles['footer_sec-links']}>
							<TextLink
								href='https://www.instagram.com/sivuraimo/'
								text='Instagram'
								newTab
							/>
							<TextLink
								href='https://www.behance.net/sivuraimo'
								text='Behance'
								newTab
							/>
							<TextLink
								href='https://www.linkedin.com/in/sivuraimo/'
								text='LinkedIn'
								newTab
							/>
						</div>
					</div>

					<div className={styles['footer_newsletter']}>
						<div className={styles['footer_sec-header']}>
							<div className={styles['footer_sec-line-01']}></div>
							<div className={styles['footer_sec-line-02']}></div>
							<div className={styles['footer_sec-line-03']}></div>
							<div className={styles['footer_sec-line-04']}></div>
							<div className={styles['footer_sec-header-content']}>
								<p className='text-14px'>Get in touch</p>
							</div>
						</div>
						<NewsForm />
					</div>
				</PageGrid>
				<PageGrid>
					<div className={styles['footer_copyright']}>
						<p className='text-14px'>©2025 Andrii Sivtsov</p>
						<div className={styles['footer_copyright-type']}>
							<p className='text-14px'>Working Worldwide</p>
						</div>
					</div>
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className={styles['footer_button-nav']}
					>
						To Top
					</button>
				</PageGrid>
			</div>
		</footer>
	)
}
