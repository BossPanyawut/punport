import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Email</h3>
              <a href="mailto:john@example.com" className="text-muted-foreground hover:text-primary">
                john@example.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-muted-foreground">San Francisco, CA, USA</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-6">Connect With Me</h2>
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-3 rounded-full border border-border hover:border-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-3 rounded-full border border-border hover:border-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card p-3 rounded-full border border-border hover:border-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-6">Availability</h2>
        <p className="text-muted-foreground">
          I'm currently available for freelance work and full-time positions. Feel free to reach out if you have a
          project in mind or want to discuss potential opportunities.
        </p>
      </div>
    </div>
  )
}
