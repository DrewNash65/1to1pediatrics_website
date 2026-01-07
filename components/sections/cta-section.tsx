import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTASectionProps {
  title: string
  description: string
  author?: string
  cta?: {
    text: string
    href: string
  }
}

export function CTASection({ title, description, author, cta }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            {title}
          </h2>
          <p className="mb-8 text-lg opacity-90 leading-relaxed">
            {description}
          </p>
          {author && (
            <p className="mb-8 text-sm font-semibold opacity-75">
              — {author}
            </p>
          )}
          {cta && (
            <Link href={cta.href}>
              <Button
                size="lg"
                variant="secondary"
                className="font-semibold"
              >
                {cta.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
