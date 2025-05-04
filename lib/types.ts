export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  coverImage: string
  readingTime: number
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  demoUrl: string
  githubUrl: string
}
