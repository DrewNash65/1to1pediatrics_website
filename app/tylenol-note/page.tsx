import { tylenolNoteContent } from "@/content/tylenol-note"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(tylenolNoteContent)

export default function TylenolNotePage() {
  return <PageBuilder content={tylenolNoteContent} />
}
