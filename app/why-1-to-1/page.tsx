import { whyOneToOneContent } from "@/content/why-1-to-1"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(whyOneToOneContent)

export default function WhyOneToOnePage() {
  return <PageBuilder content={whyOneToOneContent} />
}
