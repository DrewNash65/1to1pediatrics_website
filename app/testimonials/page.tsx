import { testimonialsContent } from "@/content/testimonials"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(testimonialsContent)

export default function TestimonialsPage() {
  return <PageBuilder content={testimonialsContent} />
}
