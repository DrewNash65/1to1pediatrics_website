import { hmoPatientsContent } from "@/content/hmo-patients"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(hmoPatientsContent)

export default function HMOPatientsPage() {
  return <PageBuilder content={hmoPatientsContent} />
}
