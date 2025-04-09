import { supabase } from '@/lib/supabaseClient'
import { Project } from '@/types/project'
import CasePage from '@/views/cases/Case'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
	const { data, error } = await supabase.from('projects').select('slug')

	if (error) {
		console.error(error)
		return { paths: [], fallback: 'blocking' }
	}

	const paths = data.map((project: { slug: string }) => ({
		params: { slug: project.slug },
	}))

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params || {}

	const { data, error } = await supabase
		.from('projects')
		.select('*')
		.eq('slug', slug)
		.single()

	if (error) {
		console.error(error)
		return { notFound: true }
	}

	return {
		props: {
			project: data,
		},
		revalidate: 60, // Optional: will regenerate the page after 60 seconds
	}
}

const ProjectPage = ({ project }: { project: Project }) => {
	if (!project) {
		return <p>Loading...</p> // Loading state
	}

	return <CasePage project={project} />
}

export default ProjectPage
