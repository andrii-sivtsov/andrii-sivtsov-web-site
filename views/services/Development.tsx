import Header from '@/components/layouts/Header'
import styles from './development.module.scss'

export default function Development() {
	return (
		<div className={styles.page}>
			<Header />
			<main className='main-wrapper'>
				<section className={styles.section}>
					<div className='container'>
						<h1>Development Services</h1>
					</div>
				</section>
			</main>
		</div>
	)
}
