import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content/posts')

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  content: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return []
  return fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'))
}

export function getPostBySlug(slug: string): Post {
  const fileName = slug.endsWith('.md') ? slug : `${slug}.md`
  const filePath = path.join(postsDir, fileName)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug: fileName.replace(/\.md$/, ''),
    title: data.title ?? '',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    author: data.author ?? '',
    content,
  }
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((f) => getPostBySlug(f))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
