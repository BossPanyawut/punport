"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

type ProjectFiltersContextType = {
  selectedCategory: string
  selectedTags: string[]
  setSelectedCategory: (category: string) => void
  setSelectedTags: (tags: string[]) => void
}

const ProjectFiltersContext = createContext<ProjectFiltersContextType | undefined>(undefined)

export function ProjectFiltersProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  return (
    <ProjectFiltersContext.Provider
      value={{
        selectedCategory,
        selectedTags,
        setSelectedCategory,
        setSelectedTags,
      }}
    >
      {children}
    </ProjectFiltersContext.Provider>
  )
}

export function useProjectFilters() {
  const context = useContext(ProjectFiltersContext)
  if (context === undefined) {
    throw new Error("useProjectFilters must be used within a ProjectFiltersProvider")
  }
  return context
}
