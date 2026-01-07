import { drBordenContent } from "@/content/dr-borden"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(drBordenContent)

export default function DrBordenPage() {
  return <PageBuilder content={drBordenContent} />
}
