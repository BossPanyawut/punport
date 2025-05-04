import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact | Panyawut Suton",
  description:
    "Get in touch with Panyawut Suton for collaboration, job opportunities, or just to say hello",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <p className="text-lg mb-12 max-w-3xl">
        I'm always open to new opportunities, collaborations, or just a friendly
        chat. Feel free to reach out using the form below or through my social
        media channels.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
