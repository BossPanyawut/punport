import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { ArrowRight } from "lucide-react"
import type { Post } from "@/lib/types"

export default function BlogPostGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
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
              <div className="flex items-center justify-between">
                <span className="text-primary font-medium inline-flex items-center group-hover:underline">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
                <span className="text-sm text-muted-foreground">{post.readingTime} min read</span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}
