import { contactContent } from "@/content/contact"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"
import { ContactForm } from "@/components/contact-form"

export const metadata = buildPageMetadata(contactContent)

export default function ContactPage() {
  return (
    <>
      <PageBuilder content={contactContent} />
      <ContactForm />
    </>
  )
}
