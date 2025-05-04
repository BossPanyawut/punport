import Image from "next/image"

export default function ResumeViewer() {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="relative w-full h-[800px]">
        <Image src="/placeholder.svg?height=1200&width=800" alt="Resume preview" fill className="object-contain" />
      </div>
    </div>
  )
}
