import { registerForPracticeContent } from "@/content/register-for-practice"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(registerForPracticeContent)

export default function RegisterForPracticePage() {
  return <PageBuilder content={registerForPracticeContent} />
}