import { concussionContent } from "@/content/concussion"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(concussionContent)

export default function ConcussionPage() {
  return <PageBuilder content={concussionContent} />
}
