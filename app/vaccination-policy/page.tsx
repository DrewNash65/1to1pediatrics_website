import { vaccinationPolicyContent } from "@/content/vaccination-policy"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(vaccinationPolicyContent)

export default function VaccinationPolicyPage() {
  return <PageBuilder content={vaccinationPolicyContent} />
}
