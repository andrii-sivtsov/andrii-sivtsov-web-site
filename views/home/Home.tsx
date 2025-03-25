import Header from '@/components/layouts/Header'
import PageGrid from '@/components/layouts/PageGrid'
import { clsx } from '@/lib/utils'
import Head from 'next/head'
import styles from '@/views/home/home.module.scss'
import Tab from '@/components/ui/Tab'

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
							<div className={styles['cases_intro']}>
								<div className={styles['cases_tabs']}>
									<Tab
										label='grid'
										isActive={true}
										onClick={() => console.log('Grid clicked')}
									/>
									<Tab
										label='list'
										isActive={false}
										onClick={() => console.log('List clicked')}
									/>
								</div>
								<div className={styles['cases_title']}>
									<h2 className='text-68px'>Featured Projects</h2>
									<span className='text-68px'>6</span>
								</div>
							</div>
							<div className={styles['cases_list']}></div>
						</PageGrid>
					</div>
				</section>
			</main>
		</>
	)
}
