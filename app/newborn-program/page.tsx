import { newbornProgramContent } from "@/content/newborn-program"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(newbornProgramContent)

export default function NewbornProgramPage() {
  return <PageBuilder content={newbornProgramContent} />
}
