import { bethQuadracciaContent } from "@/content/beth-quadraccia"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(bethQuadracciaContent)

export default function BethQuadracciaPage() {
  return <PageBuilder content={bethQuadracciaContent} />
}