import type { Metadata } from "next";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectFilters from "@/components/projects/ProjectFilters";
import { ProjectFiltersProvider } from "@/lib/hooks/useProjectFilters";

export const metadata: Metadata = {
  title: "Projects | Panyawut Suton",
  description:
    "Explore the projects built by Panyawut Suton, including web applications, websites, and open-source contributions",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <p className="text-lg mb-12 max-w-3xl">
        Here's a collection of my recent work, including web applications,
        websites, and open-source contributions. Each project represents a
        unique challenge and solution.
      </p>

      {/* Wrap both components with ProjectFiltersProvider */}
      <ProjectFiltersProvider>
        <ProjectFilters />
        <ProjectGrid />
      </ProjectFiltersProvider>
    </div>
  );
}
