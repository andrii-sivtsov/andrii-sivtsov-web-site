import { supabase } from '@/lib/supabaseClient'
import { Project } from '@/types/project' // Импортируем тип данных из файла project.ts
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ProjectPage = () => {
	const router = useRouter()
	const { slug } = router.query // Извлекаем slug из URL
	const [project, setProject] = useState<Project | null>(null) // Типизируем данные проекта

	useEffect(() => {
		// Если slug есть, выполняем запрос
		if (slug) {
			const fetchProjectData = async () => {
				const { data, error } = await supabase
					.from('projects')
					.select('*')
					.eq('slug', slug) // Фильтруем по slug
					.single() // Получаем только один проект по slug

				if (error) {
					console.error(error)
					return
				}
				setProject(data) // Сохраняем данные в состояние
			}
			fetchProjectData()
		}
	}, [slug]) // Срабатывает при изменении slug

	if (!project) {
		return <p>Loading...</p> // Пока проект загружается, показываем "Загрузка"
	}

	return (
		<div>
			<h1>{project.project_name}</h1>
			<p>{project.description}</p>
			<img src={project.cover_image} alt={project.project_name} />
			{/* Здесь можно отобразить больше данных проекта */}
			<p>Year: {project.year}</p>
			<p>Client: {project.client}</p>
			<p>Visibility: {project.visibility ? 'Visible' : 'Hidden'}</p>
			{/* Можешь добавить другие данные по необходимости */}
		</div>
	)
}

export default ProjectPage
