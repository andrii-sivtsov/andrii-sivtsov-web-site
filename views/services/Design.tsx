import Header from '@/components/layouts/Header'
import styles from './design.module.scss'

export default function Design() {
	return (
		<div className={styles.page}>
			<Header />
			<main className='main-wrapper'>
				<section className={styles.section}>
					<div className='container'>
						<h1>Design Services</h1>
					</div>
				</section>
			</main>
		</div>
	)
}
