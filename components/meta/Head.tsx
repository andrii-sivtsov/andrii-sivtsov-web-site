import Head from 'next/head'

interface SeoHeadProps {
	title: string
	description: string
}

export default function SeoHead({ title, description }: SeoHeadProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta
				name={description}
				content='Portfolio of Andrii Sivtsov — Web Architect specializing in Web Design, Visual AI Design, and Development.'
			/>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<link rel='icon' href='/images/favicon.ico' />
		</Head>
	)
}
