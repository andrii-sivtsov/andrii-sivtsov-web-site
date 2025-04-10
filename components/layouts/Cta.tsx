import EnterBtn from '../ui/btns/EnterBtn'
import PageGrid from './PageGrid'
import styles from './cta.module.scss'

export default function Cta() {
	return (
		<section className='section-margin-bottom'>
			<div className='container'>
				<PageGrid>
					<div className={styles['cta_wrapper']}>
						<h2 className='text-32px'>
							If you want takoqge project, write me, and we voplotim your minds
							to life.
						</h2>
						<EnterBtn text="Let's talk" />
					</div>
				</PageGrid>
			</div>
		</section>
	)
}
