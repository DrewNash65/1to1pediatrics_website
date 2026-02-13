import { buildPageMetadata, PageBuilder } from "@/lib/page-builder"
import { dosingChartsContent } from "@/content/dosing-charts"

export const metadata = buildPageMetadata(dosingChartsContent)

export default function DosingChartsPage() {
  return <PageBuilder content={dosingChartsContent} />
}