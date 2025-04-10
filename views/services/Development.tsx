import ProcessCard from '@/components/cards/ProcessCard'
import StackCard from '@/components/cards/StackCard'
import Cta from '@/components/layouts/Cta'
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import PageGrid from '@/components/layouts/PageGrid'
import LinesBtn from '@/components/ui/btns/LinesBtn'
import { clsx } from '@/lib/utils'
import styles from './development.module.scss'

export default function Development() {
	return (
		<div className={styles.page}>
			<Header />
			<main className='main-wrapper'>
				<section
					className={clsx(styles['section_hero'], 'section-margin-bottom')}
				>
					<div className={clsx('container', styles['hero_container'])}>
						<div className={styles['hero_wrapper']}>
							<div className={styles['hero_title']}>
								<h1 className='text-68px'>Development</h1>
							</div>
							<PageGrid className={styles['hero_content']}>
								<div className={styles['hero_description']}>
									<p className='text-32px'>
										My name is Andrii. I combine design and development skills.
										My main goal is to help you communicate with your clients in
										a clear and effective way, solve business challenges, and
										design the web.
									</p>
								</div>
								<div className={styles['hero_btn']}>
									<LinesBtn href='#' text='Rates' />
								</div>
							</PageGrid>
						</div>
					</div>
				</section>
				<section
					className={clsx(styles['section_stack'], 'section-margin-bottom')}
				>
					<div className='container'>
						<PageGrid className={styles['stack_wrapper']}>
							<div className={styles['stack_left']}>
								<div className={styles['stack_title']}>
									<h2 className='text-32px'>
										Tech Stack For Every Client Project
									</h2>
								</div>
								<div className={styles['stack_window']}></div>
							</div>
							<div className={styles['stack_table']}>
								<div className={styles['stack_row']}>
									<div className={styles['stack_cell']}>
										<p className={clsx('text-14-12px', 'text-gray')}>
											frontend
										</p>
										<div className={styles['stack_cell-list']}>
											<StackCard text='Webflow' />
											<StackCard text='Custom Code' />
										</div>
									</div>
									<div className={styles['stack_cell']}>
										<p className={clsx('text-14-12px', 'text-gray')}>backend</p>
										<div className={styles['stack_cell-list']}>
											<StackCard text='n8n' />
											<StackCard text='Zapier' />
											<StackCard text='Make' />
										</div>
									</div>
									<div className={styles['stack_cell']}>
										<p className={clsx('text-14-12px', 'text-gray')}>
											File & Code Storage
										</p>
										<div className={styles['stack_cell-list']}>
											<StackCard text='AWS 3' />
											<StackCard text='Kineskope' />
											<StackCard text='Github' />
										</div>
									</div>
								</div>
								<div className={styles['stack_row']}>
									<div className={styles['stack_cell']}>
										<p className={clsx('text-14-12px', 'text-gray')}>
											Animations
										</p>
										<div className={styles['stack_cell-list']}>
											<StackCard text='Gsap' />
											<StackCard text='Swiper.js' />
											<StackCard text='Matter.js' />
											<StackCard text='Lottie' />
										</div>
									</div>
									<div className={styles['stack_cell']}>
										<p className={clsx('text-14-12px', 'text-gray')}>
											Automation & Integrations
										</p>
										<div className={styles['stack_cell-list']}>
											<StackCard text='Airtable' />
											<StackCard text='Pipedrive' />
											<StackCard text='Telegram' />
											<StackCard text='Mailchimp' />
											<StackCard text='Hubspot' />
											<StackCard text='Google sheets' />
											<StackCard text='API' />
										</div>
									</div>
								</div>
								<div className={styles['stack_row']}>
									<div className={styles['stack_cell']}>
										<p className={clsx('text-14-12px', 'text-gray')}>3D</p>
										<div className={styles['stack_cell-list']}>
											<StackCard text='Three.js' />
											<StackCard text='Spline' />
										</div>
									</div>
								</div>
							</div>
						</PageGrid>
					</div>
				</section>
				<section
					className={clsx(styles['section_process'], 'section-margin-bottom')}
				>
					<div className={clsx('container', styles['process_container'])}>
						<div className={styles['process_wrapper']}>
							<PageGrid>
								<div className={styles['process_title']}>
									<h2 className='text-32px'>
										Work Process it is my own system and personal client
										profile, where i push all steps and documents
									</h2>
								</div>
							</PageGrid>

							<div className={styles['process_content']}>
								<PageGrid className={styles['process_list']}>
									<ProcessCard
										text='Maket'
										className={styles['process_card-01']}
									/>
									<ProcessCard
										text='Desktop full'
										className={styles['process_card-02']}
									/>
									<ProcessCard
										text='integrations'
										className={styles['process_card-03']}
									/>
								</PageGrid>
								<PageGrid className={styles['process_list']}>
									<ProcessCard
										text='Animations'
										className={styles['process_card-04']}
									/>
									<ProcessCard
										text='Adaptation'
										className={styles['process_card-05']}
									/>
									<ProcessCard
										text='Finish'
										className={styles['process_card-06']}
									/>
								</PageGrid>
							</div>
						</div>
					</div>
				</section>
				<Cta />
			</main>
			<Footer />
		</div>
	)
}
