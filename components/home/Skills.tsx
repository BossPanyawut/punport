import { Code, Smartphone, Zap, Server, Brain, Users } from "lucide-react";

const skills = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web interfaces with React, Next.js, and TypeScript.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile Development",
    description:
      "Creating high-performance, cross-platform apps for iOS and Android using Flutter.",
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Backend Development",
    description:
      "Designing and implementing scalable APIs and microservices with Node.js and Express.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Performance Optimization",
    description:
      "Tuning applications for speed, accessibility, and SEO to deliver lightning-fast experiences.",
  },
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "AI & Machine Learning",
    description:
      "Integrating AI-powered features and working with ML models to bring intelligent functionality to apps.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Collaboration & DevOps",
    description:
      "Working closely with teams and leveraging DevOps practices for smooth, end-to-end delivery.",
  },
];

export default function Skills() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I've developed a diverse set of skills throughout my career, focusing
          on frontend development and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-lg shadow-sm border border-border hover:border-primary transition-colors"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-muted-foreground">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
