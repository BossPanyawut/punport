"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { useProjectFilters } from "@/lib/hooks/useProjectFilters"

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Personal Finance Tracker",
    description:
      "A finance tracking application that helps users manage expenses, set budgets, and visualize spending patterns.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Chart.js", "Supabase"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A weather application that provides current weather conditions and forecasts for locations worldwide.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "JavaScript", "API", "CSS"],
    category: "mobile",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 5,
    title: "Recipe Finder",
    description:
      "A recipe finder application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "JavaScript", "API", "Styled Components"],
    category: "web",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 6,
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers and designers to showcase their work and skills.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "design",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export default function ProjectGrid() {
  const { selectedCategory, selectedTags } = useProjectFilters()
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    let filtered = projects

    if (selectedCategory !== "all") {
      filtered = filtered.filter((project) => project.category === selectedCategory)
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) => selectedTags.some((tag) => project.tags.includes(tag)))
    }

    setFilteredProjects(filtered)
  }, [selectedCategory, selectedTags])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all hover:shadow-md"
          >
            <div className="relative h-48">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex space-x-4">
                <Button asChild size="sm" variant="outline">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-lg text-muted-foreground">
            No projects match the selected filters. Try adjusting your filters.
          </p>
        </div>
      )}
    </div>
  )
}
