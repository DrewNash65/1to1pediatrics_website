import { staffContent } from "@/content/staff"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(staffContent)

export default function StaffPage() {
  return <PageBuilder content={staffContent} />
}
