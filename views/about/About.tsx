import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import PageGrid from '@/components/layouts/PageGrid'
import SeoHead from '@/components/meta/Head'
import ReviewCard from '@/components/ui/ReviewCard'
import { reviews } from '@/data/reviews'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'
import styles from './about.module.scss'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const maskRef = useRef<HTMLDivElement | null>(null)
	const titleRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!wrapperRef.current || !maskRef.current || !titleRef.current) return

		// Маска с clip-path (идёт по скроллу)
		gsap.to(maskRef.current, {
			clipPath: 'inset(0% 0% 0 -110%)',
			scrollTrigger: {
				trigger: wrapperRef.current,
				start: 'top top',
				end: 'bottom bottom',
				scrub: 1,
			},
		})

		// Отдельная анимация появления текста в самом конце
		ScrollTrigger.create({
			trigger: wrapperRef.current,
			start: 'top+=20% top',
			end: 'bottom bottom',
			toggleActions: 'play reverse play reverse',
			onEnter: () => {
				gsap.to(titleRef.current, {
					opacity: 1,
					filter: 'blur(0em)',
					duration: 0.3,
					ease: 'power2.out',
				})
			},
			onLeaveBack: () => {
				gsap.to(titleRef.current, {
					opacity: 0,
					filter: 'blur(2em)',
					duration: 0.3,
					ease: 'power2.in',
				})
			},
		})
	}, [])

	return (
		<>
			<SeoHead
				title='About – Andrii Sivtsov'
				description='A closer look at who I am — my background, design journey, work experience, and what motivates me to create meaningful digital experiences.'
			/>
			<Header />
			<main className={styles['main']}>
				<div className={styles['hero_track']}>
					<section className={styles['section_hero']}>
						<PageGrid ref={wrapperRef} className={styles['hero_wrapper']}>
							<div ref={maskRef} className={styles['hero_mask']}>
								<PageGrid className={styles['hero_content']}>
									<div ref={titleRef} className={styles['hero_title']}>
										<h1 className='text-32px'>
											I was made to create.
											<br></br>
											<br></br>
											Through design, I share what I feel, what I think, and
											what I dream. I care about your comfort, but more than
											that — I want to change the world.
										</h1>
									</div>
								</PageGrid>
							</div>
						</PageGrid>
					</section>
					<section className={styles['section_about']}>
						<div className='container'>
							<div className={styles['about_card']}>
								<div className={styles['about_card-row']}>
									<article className={styles['about_card-cell']}>
										<h3 className='text-48px'>40⁺</h3>
										<p>projects completed in 2024</p>
									</article>
									<article className={styles['about_card-cell']}>
										<h3 className='text-48px'>4⁺</h3>
										<p>years in design and development</p>
									</article>
								</div>
								<div className={styles['about_card-row']}>
									<div className={styles['about_card-cell']}></div>
									<div className={styles['about_card-cell']}>
										<p>Work on top – life below.</p>
									</div>
								</div>
								<div className={styles['about_card-row']}>
									<div className={styles['about_card-cell']}>
										<p>
											More than 7,000 km were walked in reflections on design
											and the search for the best solutions.
										</p>
									</div>
									<div className={styles['about_card-cell']}>
										<p>
											During this time, I spent over 730 hours in conversations
											with clients, transforming their thoughts into clear and
											effective solutions.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<section className='section-margin-bottom'>
					<div className='container'>
						<PageGrid>
							<div className={styles['reviews_title']}>
								<h2 className='text-68px'>Reviews</h2>
								<span className='text-68px'>{reviews.length}</span>
							</div>
							<div className={styles['reviews_list']}>
								{reviews.map((review, i) => (
									<ReviewCard key={i} {...review} />
								))}
							</div>
						</PageGrid>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
