import NextLink from 'next/link'
import styles from './TextLink.module.scss'

interface LinkProps {
	href: string
	text: string
	newTab?: boolean
	dataElement?: string
}

export default function TextLink({
	href,
	text,
	newTab = false,
	dataElement,
}: LinkProps) {
	return (
		<NextLink
			href={href}
			className={styles['g-link']}
			target={newTab ? '_blank' : '_self'}
			rel={newTab ? 'noopener noreferrer' : undefined}
			data-element={dataElement}
		>
			<div className={styles['g-link_text']}>{text}</div>
		</NextLink>
	)
}
