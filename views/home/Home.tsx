import Header from '@/components/layouts/Header'
import PageGrid from '@/components/layouts/PageGrid'
import GridListCard from '@/components/ui/GridListCard'
import Tab from '@/components/ui/Tab'
import styles from '@/views/home/home.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { projects } from '../../data/projects'
import { clsx } from '../../lib/utils'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
	const [activeTab, setActiveTab] = useState<'grid' | 'list'>('grid')

	// Logos
	const trackRef = useRef<HTMLDivElement>(null)
	const trackReverseRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!trackRef.current || !trackReverseRef.current) return

		gsap.to(trackRef.current, {
			yPercent: -100,
			repeat: -1,
			ease: 'linear',
			duration: 10,
			scrollTrigger: {
				trigger: '#section-about',
				start: 'top+=500 bottom',
				end: 'bottom-=500 top',
				toggleActions: 'play pause resume pause',
			},
		})

		gsap.to(trackReverseRef.current, {
			yPercent: 50,
			repeat: -1,
			ease: 'linear',
			duration: 10,
			scrollTrigger: {
				trigger: '#section-about',
				start: 'top+=500 bottom',
				end: 'bottom-=500 top',
				toggleActions: 'play pause resume pause',
			},
		})
	}, [])

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

				<section
					className={clsx(styles['section_cases'], 'section-margin-bottom')}
				>
					<div className='container'>
						<PageGrid className={styles['cases_wrapper']}>
							<div className={styles['cases_intro']}>
								<div className={styles['cases_tabs']}>
									<Tab
										label='grid'
										isActive={activeTab === 'grid'}
										onClick={() => setActiveTab('grid')}
									/>
									<Tab
										label='list'
										isActive={activeTab === 'list'}
										onClick={() => setActiveTab('list')}
									/>
								</div>
								<div className={styles['cases_title']}>
									<h2 className='text-68px'>Featured Projects</h2>
									<span className='text-68px'>{projects.length}</span>
								</div>
							</div>

							<div
								className={clsx(
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
				<section id='section-about' className={styles['section_about']}>
					<div className={styles['about_wrapper']}>
						<div className='container'>
							<PageGrid className={styles['about_top']}>
								<div className={styles['about_title']}>
									<h2 className='text-32px'>
										My name is Andrii. I combine design and development skills.
										My main goal is to help you communicate with your clients in
										a clear and effective way, solve business challenges, and
										design the web.
									</h2>
								</div>
							</PageGrid>
						</div>

						<PageGrid className={styles['about_content']}>
							<div className={styles['about_banner']}>
								<div className={styles['about_banner-line-1']}></div>
								<div className={styles['about_banner-line-2']}></div>
								<div className={styles['about_banner-line-3']}></div>
								<div className={styles['about_banner-line-4']}></div>
								<div className={styles['about_banner-wrapper']}>
									<h3 className='text-32px'>Clients</h3>
									<div className={styles['about_banner-logos']}>
										<div ref={trackRef} className={styles['about_logos-track']}>
											<p>Integrica</p>
											<p>Blue Pill</p>
											<p>Telemetter</p>
											<p>Gapsy Studio</p>
											<p>Bruit Brothers</p>
											<p>Integrica</p>
											<p>UCO</p>
											<p>Pokrovskaya 10</p>
											<p>Ticket AG</p>
											<p>CMM LLC</p>
											<p>Integrica</p>
											<p>Blue Pill</p>
											<p>Telemetter</p>
											<p>Gapsy Studio</p>
											<p>Bruit Brothers</p>
											<p>Integrica</p>
											<p>UCO</p>
											<p>Pokrovskaya 10</p>
											<p>Ticket AG</p>
											<p>CMM LLC</p>
										</div>
										<div className={styles['about_logos-track-reverse']}>
											<div
												ref={trackReverseRef}
												className={styles['about_logos-track']}
											>
												<p>Looqme</p>
												<p>Rili AI</p>
												<p>Sea Portal</p>
												<p>Nsads</p>
												<p>Fashion Camp</p>
												<p>Leaping AI</p>
												<p>MIO ART</p>
												<p>MeloFx</p>
												<p>DAH</p>
												<p>IN1 Holding Limited</p>
												<p>Looqme</p>
												<p>Rili AI</p>
												<p>Sea Portal</p>
												<p>Nsads</p>
												<p>Fashion Camp</p>
												<p>Leaping AI</p>
												<p>MIO ART</p>
												<p>MeloFx</p>
												<p>DAH</p>
												<p>IN1 Holding Limited</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</PageGrid>
					</div>
				</section>
			</main>
		</>
	)
}
