import Header from '@/components/layouts/Header'
import styles from './about.module.scss'

export default function About() {
	return (
		<div className={styles.page}>
			<Header />
			<main className='main-wrapper'>
				<section className={styles.section}>
					<div className='container'>
						<h1>About</h1>
					</div>
				</section>
			</main>
		</div>
	)
}
