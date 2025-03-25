import { clsx } from '@/lib/utils'
import Header from '@/components/layouts/Header'
import Head from 'next/head'
import styles from './home.module.scss'
import PageGrid from '@/components/layouts/PageGrid'

export default function Home() {
	return (
		<>
			<Head>
				<title>Andrii Sivtsov - Web Architect</title>
				<meta
					name='description'
					content='Portfolio of Andrii Sivtsov — Web Architect specializing in Web Design, Visual AI Design, and Development.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<main className='main-wrapper'>
				<section
					className={clsx(styles['section_hero'], 'section-margin-bottom')}
				>
					<div className='container'>
						<PageGrid className={styles['hero_wrapper']}>
							<div className={styles['hero_content']}>
								<h1 className='text-32px'>
									Building web spaces. Andrii Sivtsov, Web Architect
								</h1>
							</div>
						</PageGrid>
					</div>
				</section>
				<section className={styles['section_cases']}>
					<div className='container'>
						<PageGrid>
							<div className={styles['cases_intro']}></div>
							<div className={styles['cases_list']}></div>
						</PageGrid>
					</div>
				</section>
			</main>
		</>
	)
}
