import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </div>
    </section>
  )
}
