import { registerContent } from "@/content/register"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(registerContent)

export default function RegisterPage() {
  return <PageBuilder content={registerContent} />
}
