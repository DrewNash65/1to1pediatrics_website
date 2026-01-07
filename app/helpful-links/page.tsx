import { helpfulLinksContent } from "@/content/helpful-links"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(helpfulLinksContent)

export default function HelpfulLinksPage() {
  return <PageBuilder content={helpfulLinksContent} />
}
