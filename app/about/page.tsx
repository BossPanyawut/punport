import Image from "next/image";
import type { Metadata } from "next";
import Timeline from "@/components/about/Timeline";
import SkillsGrid from "@/components/about/SkillsGrid";

export const metadata: Metadata = {
  title: "About Me | Panyawut Suton",
  description:
    "Learn more about Panyawut Suton, a frontend developer with expertise in React, Next.js, and TypeScript",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <p className="text-lg mb-4">
            Hi, I'm Panyawut Suton, a passionate frontend developer with over 5
            years of experience building modern web applications. I specialize
            in React, Next.js, and TypeScript, and I'm dedicated to creating
            performant, accessible, and beautiful user interfaces.
          </p>
          <p className="text-lg mb-4">
            My journey in web development started when I built my first website
            for a local business while studying Computer Science. Since then,
            I've worked with startups and established companies to deliver
            high-quality web experiences.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me hiking, reading sci-fi novels,
            or experimenting with new technologies. I'm always eager to learn
            and grow as a developer.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Panyawut Suton"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <SkillsGrid />

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8">My Experience</h2>
        <Timeline />
      </div>
    </div>
  );
}
