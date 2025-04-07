import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import PageGrid from '@/components/layouts/PageGrid'
import SeoHead from '@/components/meta/Head'
import EnterBtn from '@/components/ui/btns/EnterBtn'
import GridListCard from '@/components/ui/GridListCard'
import ServiceCard from '@/components/ui/ServiceCard'
import Tab from '@/components/ui/Tab'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { projects } from '../../data/projects'
import { clsx } from '../../lib/utils'
import styles from './home.module.scss'

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
				end: 'bottom+=500 top',
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
				end: 'bottom+=500 top',
				toggleActions: 'play pause resume pause',
			},
		})
	}, [])

	return (
		<>
			<SeoHead
				title='Andrii Sivtsov - Web Architect'
				description='Portfolio of Andrii Sivtsov — Web Architect specializing in Web Design, Visual AI Design, and Development.'
			/>

			<Header />
			<main className='main-wrapper'>
				<section
					className={clsx('section-margin-bottom', styles['section_hero'])}
					id='section-hero'
				>
					<div className={clsx('container', styles['hero_container'])}>
						<PageGrid className={styles['hero_wrapper']}>
							<div className={styles['hero_content']}>
								<h1 className='text-32px'>
									Building web spaces.<br></br>Andrii Sivtsov, Web Architect
								</h1>
							</div>
						</PageGrid>
					</div>
					<div className={styles['hero_bg']}>
						<Image
							src='/images/hero-image-bg.png'
							className='image-cover'
							alt='Andrii Sivtsov'
							fill
							priority
						/>
					</div>
					<div
						className={styles['cases-anchor']}
						id='section-cases-anchor'
					></div>
				</section>

				<section
					className={clsx(styles['section_cases'], 'section-margin-bottom')}
					id='section-cases'
				>
					<div className='container'>
						<PageGrid className={styles['cases_wrapper']}>
							<div className={styles['cases_intro']}>
								<div className={styles['cases_tabs']}>
									<Tab
										label='grid'
										isActive={activeTab === 'grid'}
										onClick={() => {
											setActiveTab('grid') // или 'list'

											const section = document.getElementById(
												'section-cases-anchor'
											)
											section?.scrollIntoView({
												behavior: 'smooth',
												block: 'start',
											})
										}}
									/>
									<Tab
										label='list'
										isActive={activeTab === 'list'}
										onClick={() => {
											setActiveTab('list')

											const section = document.getElementById(
												'section-cases-anchor'
											)
											section?.scrollIntoView({
												behavior: 'smooth',
												block: 'start',
											})
										}}
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
				<section id='section-about' className='section-margin-bottom'>
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
				<section
					className={clsx(styles['section_services'], 'section-margin-bottom')}
				>
					<div className='container'>
						<PageGrid className={styles['services_wrapper']}>
							<div className={styles['services_info']}>
								<h2 className='text-68px'>
									Primary<br></br> Services
								</h2>
								<span className='text-68px'>3</span>
							</div>
							<div className={styles['services_list']}>
								<ServiceCard
									title='Design'
									services={[
										'UX/UI',
										'Web Design',
										'Ai Graphic Design',
										'Animations',
									]}
								/>
								<ServiceCard
									title='Development'
									services={['Webflow', 'Custom Code', '3D', 'Animations']}
								/>
								<ServiceCard
									title='Consulting'
									services={['Design', 'Webflow', 'Animations (Gsap)']}
								/>
							</div>
						</PageGrid>
					</div>
				</section>
				<section
					className={clsx(styles['section_process'], 'section-margin-bottom')}
				>
					<div className='container'>
						<div className={styles['process_wrapper']}>
							<PageGrid className={styles['process_top']}>
								<div className={styles['process_title']}>
									<p className='text-32px'>
										I take an individual approach to each project, helping
										clients convey their story in the digital space. To ensure
										maximum transparency and seamless collaboration, I use my
										own workflow system. Each client gets access to a personal
										account, where they can track the project’s progress at any
										time and receive all necessary files and documents.
									</p>
								</div>
								<div className={styles['process_banner']}>
									<div className={styles['process_banner-line-1']}></div>
									<div className={styles['process_banner-line-2']}></div>
									<div className={styles['process_banner-line-3']}></div>
									<div className={styles['process_banner-line-4']}></div>
									<div className={styles['process_banner-wrapper']}>
										<p>
											Sign up for a free tour<br></br>of my personal process.
										</p>
										<EnterBtn text='Apply now' style='black' />
									</div>
								</div>
							</PageGrid>
							<PageGrid>
								<div className={styles['process_table']}>
									<div className={styles['process_table-cel']}>
										<p>Transparency</p>
									</div>
									<div className={styles['process_table-cel']}>
										<p>Centralized access </p>
									</div>
									<div className={styles['process_table-cel']}>
										<p>Security</p>
									</div>
									<div className={styles['process_table-cel']}>
										<p>Flexibility and control</p>
									</div>
								</div>
							</PageGrid>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
