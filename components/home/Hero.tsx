import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">Panyawut Suton</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Developer</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            I build fast, reliable full-stack apps for web, iOS, and
            Android-combining sleek Flutter UIs with rock-solid Node.js backends
            to deliver pixel-perfect, cross-platform experiences at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
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
    </section>
  );
}
