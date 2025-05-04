import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import LatestPosts from "@/components/home/LatestPosts";
import Skills from "@/components/home/Skills";
import CallToAction from "@/components/home/CallToAction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panyawut Suton | Frontend Developer",
  description:
    "Personal portfolio and blog of Panyawut Suton, a frontend developer specializing in React and Next.js",
};

export default function Home() {
  return (
    <div className="space-y-20 py-10">
      <Hero />
      <Skills />
      <FeaturedProjects />
      <LatestPosts />
      <CallToAction />
    </div>
  );
}
