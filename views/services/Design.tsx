import Header from '@/components/layouts/Header'
import styles from './design.module.scss'

export default function Design() {
	return (
		<div className={styles.page}>
			<Header />
			<main className='main-wrapper'></main>
		</div>
	)
}
