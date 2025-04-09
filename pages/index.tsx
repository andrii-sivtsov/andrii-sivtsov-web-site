import { supabase } from '@/lib/supabaseClient'
import { Project } from '@/types/project'
import Home from '@/views/home/Home'

export async function getStaticProps() {
	const { data: projects, error } = await supabase
		.from('projects')
		.select('*')
		.eq('is_archived', false)
		.order('published_at', { ascending: false })

	if (error) {
		console.error('Error fetching projects:', error)
		return {
			props: {
				projects: [], // Пустой массив если ошибка
				error: true, // Флаг ошибки
			},
		}
	}

	return {
		props: {
			projects, // Данные проектов
			error: false,
		},
		revalidate: 60, // Страница будет обновляться каждые 60 секунд
	}
}

interface IndexPageProps {
	projects: Project[]
	error: boolean
}

const IndexPage: React.FC<IndexPageProps> = ({ projects, error }) => {
	return <Home projects={projects} error={error} /> // Передаем данные и флаг ошибки
}

export default IndexPage
