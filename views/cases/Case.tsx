import Cta from '@/components/layouts/Cta'
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import PageGrid from '@/components/layouts/PageGrid'
import SeoHead from '@/components/meta/Head'
import LinesBtn from '@/components/ui/btns/LinesBtn'
import { clsx } from '@/lib/utils'
import { Project } from '@/types/project'
import styles from './case.module.scss'

interface CasePageProps {
	project: Project // Типизируем как Project
}

const CasePage: React.FC<CasePageProps> = ({ project }) => {
	return (
		<>
			<SeoHead title={project.project_name} description={project.description} />
			<Header />
			<main className={styles['main']}>
				<section
					className={clsx('section-margin-bottom', styles['section_hero'])}
				>
					<div className={clsx('container', styles['hero_container'])}>
						<PageGrid className={styles['hero_wrapper']}>
							<div className={styles['hero_content']}>
								<h1 className='text-68px'>{project.project_name}</h1>
								<div className={styles['hero_btn']}>
									<LinesBtn
										href={project.live_url}
										text='Live Project'
										newTab
									/>
								</div>
							</div>
						</PageGrid>
					</div>
				</section>
				<section
					className={clsx(styles['section_about'], 'section-margin-bottom')}
				>
					<div className='container'>
						<PageGrid>
							<div className={styles['about_wrapper']}>
								<div className={styles['about_title']}>
									<h2 className='text-32px'>{project.description}</h2>
								</div>
								<div className={styles['about_table']}>
									<div className={styles['about_cell']}>
										<p
											className={clsx(
												styles['about_cell-caption'],
												'text-gray'
											)}
										>
											Client
										</p>
										<p className={styles['about_cell-text']}>
											{project.client}
										</p>
									</div>
									<div className={styles['about_cell']}>
										<p
											className={clsx(
												styles['about_cell-caption'],
												'text-gray'
											)}
										>
											Deadlines
										</p>
										<div className={styles['about_deadline']}>
											{Object.entries(project.deadline).map(
												([key, value], i) => (
													<p
														className={styles['about_cell-text']}
														key={i}
													>{`${key}: ${value}`}</p>
												)
											)}
										</div>
									</div>
									<div className={styles['about_cell']}>
										<p
											className={clsx(
												styles['about_cell-caption'],
												'text-gray'
											)}
										>
											Type
										</p>
										<p className={styles['about_cell-text']}>{project.type}</p>
									</div>
								</div>
							</div>
						</PageGrid>
					</div>
				</section>
				<Cta />
			</main>
			<Footer />
		</>
	)
}

export default CasePage
