export type Project = {
	id: string
	slug: string
	created_at: string
	cover_image: string
	year: number
	project_name: string
	description: string
	client: string
	is_archived: boolean
	deadline: { [key: string]: string } // формат JSONB: { "design": "1 week", "webflow": "2 weeks" }
	services: string[] // массив строк
	stack: string[] // массив технологий
	visibility: boolean
	live_url: string
	slides: string[] // массив ссылок на изображения
	published_at: string // timestamp
}
