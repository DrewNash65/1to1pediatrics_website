import { telemedicineContent } from "@/content/telemedicine"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(telemedicineContent)

export default function TelemedicinePage() {
  return <PageBuilder content={telemedicineContent} />
}
