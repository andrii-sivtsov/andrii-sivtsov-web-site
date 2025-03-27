import { useState } from 'react'
import { clsx } from '../../../lib/utils'
import styles from './newsform.module.scss'
export default function NewsForm() {
	const [email, setEmail] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// тут можно сделать отправку
		console.log('Submitted email:', email)
	}

	return (
		<form onSubmit={handleSubmit} className={styles['newsletter-form']}>
			<label htmlFor='email'>Send message</label>
			<div className={styles['newsletter-form_content']}>
				<input
					id='email'
					type='email'
					placeholder='say hello@sivuraimo.com'
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
					className={styles['newsletter-form_input']}
				></input>
				<button
					type='submit'
					className={clsx(styles['newsletter-form_button'], 'text-14px')}
				>
					Send
				</button>
			</div>
		</form>
	)
}
