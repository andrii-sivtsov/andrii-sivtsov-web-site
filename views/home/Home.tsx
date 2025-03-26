import Header from '@/components/layouts/Header'
import PageGrid from '@/components/layouts/PageGrid'
import GridListCard from '@/components/ui/GridListCard'
import Tab from '@/components/ui/Tab'
import styles from '@/views/home/home.module.scss'
import gsap from 'gsap'
import Flip from 'gsap/Flip'
import Head from 'next/head'
import { useLayoutEffect, useRef, useState } from 'react'
import { projects } from '../../data/projects'
import { clsx } from '../../lib/utils'

gsap.registerPlugin(Flip)

export default function Home() {
	const [activeTab, setActiveTab] = useState<'grid' | 'list'>('grid')
	const [pendingTab, setPendingTab] = useState<'grid' | 'list'>('grid')
	const flipState = useRef<Flip.FlipState | null>(null)

	// 📦 Сохраняем состояние до смены layout
	const handleTabChange = (next: 'grid' | 'list') => {
		flipState.current = Flip.getState(['.cases_list', '.project-card'])
		setPendingTab(next)
	}

	// 🌀 Применяем Flip после DOM обновления
	useLayoutEffect(() => {
		if (!flipState.current) return

		setActiveTab(pendingTab)

		requestAnimationFrame(() => {
			Flip.from(flipState.current!, {
				duration: 0.6,
				ease: 'power2.inOut',
				stagger: 0.03,
				absolute: true,
				scale: true,
			})
			flipState.current = null
		})
	}, [pendingTab])

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
						<PageGrid className={styles['cases_wrapper']}>
							<div className={styles['cases_intro']}>
								<div className={styles['cases_tabs']}>
									<Tab
										label='grid'
										isActive={activeTab === 'grid'}
										onClick={() => handleTabChange('grid')}
									/>
									<Tab
										label='list'
										isActive={activeTab === 'list'}
										onClick={() => handleTabChange('list')}
									/>
								</div>
								<div className={styles['cases_title']}>
									<h2 className='text-68px'>Featured Projects</h2>
									<span className='text-68px'>{projects.length}</span>
								</div>
							</div>

							<div
								className={clsx(
									'cases_list', // 👈 обязательно как обычный класс
									styles['cases_list'],
									activeTab === 'list' && styles['is--list']
								)}
							>
								{projects.map((project, i) => (
									<GridListCard key={i} {...project} view={activeTab} />
								))}
							</div>
						</PageGrid>
					</div>
				</section>
			</main>
		</>
	)
}
