import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"

const latestPosts = [
  {
    id: 1,
    title: "Building Accessible React Applications",
    excerpt:
      "Learn how to create React applications that are accessible to all users, including those with disabilities.",
    date: "2023-10-15",
    slug: "building-accessible-react-applications",
    coverImage: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 2,
    title: "Next.js 14: What's New and Improved",
    excerpt:
      "Explore the latest features and improvements in Next.js 14 and how they can enhance your development workflow.",
    date: "2023-09-28",
    slug: "nextjs-14-whats-new-and-improved",
    coverImage: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 3,
    title: "Optimizing Performance in React Applications",
    excerpt: "Discover techniques and best practices for optimizing the performance of your React applications.",
    date: "2023-09-10",
    slug: "optimizing-performance-in-react-applications",
    coverImage: "/placeholder.svg?height=300&width=600",
  },
]

export default function LatestPosts() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I write about web development, frontend technologies, and career insights.
          </p>
        </div>
        <Button asChild className="mt-4 md:mt-0">
          <Link href="/blog">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group">
            <article className="bg-card rounded-lg overflow-hidden border border-border group-hover:border-primary transition-all group-hover:shadow-md h-full flex flex-col">
              <div className="relative h-48">
                <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <time dateTime={post.date} className="text-sm text-muted-foreground mb-2">
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                <span className="text-primary font-medium inline-flex items-center group-hover:underline">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
