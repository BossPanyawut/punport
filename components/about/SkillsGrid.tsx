import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
  Nextjs,
  Typescript,
  Tailwind,
  Redux,
  Git,
  Figma,
  Nodejs,
  Graphql,
} from "@/components/icons/TechIcons"

const skills = [
  { name: "HTML5", icon: <Html5 className="h-10 w-10" /> },
  { name: "CSS3", icon: <Css3 className="h-10 w-10" /> },
  { name: "JavaScript", icon: <Javascript className="h-10 w-10" /> },
  { name: "TypeScript", icon: <Typescript className="h-10 w-10" /> },
  { name: "React", icon: <ReactLogo className="h-10 w-10" /> },
  { name: "Next.js", icon: <Nextjs className="h-10 w-10" /> },
  { name: "Tailwind CSS", icon: <Tailwind className="h-10 w-10" /> },
  { name: "Redux", icon: <Redux className="h-10 w-10" /> },
  { name: "Node.js", icon: <Nodejs className="h-10 w-10" /> },
  { name: "GraphQL", icon: <Graphql className="h-10 w-10" /> },
  { name: "Git", icon: <Git className="h-10 w-10" /> },
  { name: "Figma", icon: <Figma className="h-10 w-10" /> },
]

export default function SkillsGrid() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Skills & Technologies</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
          >
            {skill.icon}
            <span className="mt-2 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
