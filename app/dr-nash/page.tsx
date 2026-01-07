import { drNashContent } from "@/content/dr-nash"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(drNashContent)

export default function DrNashPage() {
  return <PageBuilder content={drNashContent} />
}
