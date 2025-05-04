import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ResumeDownload() {
  return (
    <Button asChild className="mt-4 md:mt-0">
      <a href="/john-doe-resume.pdf" download>
        <Download className="mr-2 h-4 w-4" />
        Download Resume (PDF)
      </a>
    </Button>
  )
}
