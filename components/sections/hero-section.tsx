import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  cta?: {
    text: string
    href: string
  }
  image?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  cta,
  image
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className={`mx-auto ${image ? 'grid md:grid-cols-2 gap-12 items-center max-w-6xl' : 'max-w-3xl text-center'}`}>
          <div className={image ? '' : 'text-center'}>
            {subtitle && (
              <p className="mb-4 text-lg font-semibold text-primary">
                {subtitle}
              </p>
            )}
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                {description}
              </p>
            )}
            {cta && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={cta.href}>
                  <Button size="lg" className="font-semibold">
                    {cta.text}
                  </Button>
                </Link>
              </div>
            )}
          </div>
          {image && (
            <div className="relative">
              <img
                src={image}
                alt={`${title} - 1-to-1 Pediatrics`}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
