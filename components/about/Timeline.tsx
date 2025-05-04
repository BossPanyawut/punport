import { Briefcase, GraduationCap, Award } from "lucide-react"

const timelineItems = [
  {
    id: 1,
    date: "2022 - Present",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    description:
      "Leading the frontend development team, architecting and implementing complex web applications using React, Next.js, and TypeScript.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    id: 2,
    date: "2020 - 2022",
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Developed responsive web applications and collaborated with designers and backend developers to deliver high-quality products.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    id: 3,
    date: "2019 - 2020",
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    description:
      "Built and maintained websites for clients across various industries, focusing on responsive design and performance optimization.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    id: 4,
    date: "2019",
    title: "B.Sc. Computer Science",
    company: "University of Technology",
    description: "Graduated with honors, specializing in web development and software engineering.",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    id: 5,
    date: "2021",
    title: "Best Frontend Developer Award",
    company: "Tech Conference 2021",
    description: "Recognized for contributions to open-source projects and innovative frontend solutions.",
    icon: <Award className="h-5 w-5" />,
  },
]

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-12">
        {timelineItems.map((item) => (
          <div key={item.id} className="relative pl-12">
            {/* Icon */}
            <div className="absolute left-0 top-0 bg-primary text-primary-foreground p-2 rounded-full">{item.icon}</div>

            <div>
              <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-2">
                {item.date}
              </span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-primary font-medium">{item.company}</p>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
