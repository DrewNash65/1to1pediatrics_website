import { privacyPolicyContent } from "@/content/privacy-policy"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(privacyPolicyContent)

export default function PrivacyPolicyPage() {
  return <PageBuilder content={privacyPolicyContent} />
}
