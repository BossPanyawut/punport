import type { Metadata } from "next";
import ResumeViewer from "@/components/resume/ResumeViewer";
import ResumeDownload from "@/components/resume/ResumeDownload";

export const metadata: Metadata = {
  title: "Resume | Panyawut Suton",
  description:
    "View and download Panyawut Suton's resume, showcasing skills, experience, and education",
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">My Resume</h1>
        <ResumeDownload />
      </div>

      <p className="text-lg mb-12 max-w-3xl">
        Below you'll find my professional resume detailing my skills,
        experience, and education. You can also download a PDF version for your
        reference.
      </p>

      <ResumeViewer />
    </div>
  );
}
