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
    <section className="relative bg-gradient-to-br from-stone-50 via-amber-50/30 to-slate-50 py-16 md:py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-teal-400/8 to-slate-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-amber-400/6 to-teal-400/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className={`mx-auto ${image ? 'grid md:grid-cols-2 gap-12 items-center max-w-6xl' : 'max-w-3xl text-center'}`}>
          <div className={`${image ? 'slide-in-left' : 'text-center'}`}>
            {subtitle && (
              <p className="mb-4 text-sm sm:text-lg font-semibold text-primary bg-primary/10 px-3 sm:px-4 py-2 rounded-full inline-block">
                {subtitle}
              </p>
            )}
            <h1 className="mb-6 text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-slate-700 to-teal-700 bg-clip-text text-transparent leading-tight">
              {title}
            </h1>
            {description && (
              <p className="mb-8 text-base sm:text-lg text-muted-foreground md:text-xl leading-relaxed px-2 sm:px-0">
                {description}
              </p>
            )}
            {cta && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <Link href={cta.href}>
                  <Button size="lg" className="font-semibold shadow-2xl hover:shadow-teal-500/20 w-full sm:w-auto min-h-[48px]">
                    {cta.text}
                  </Button>
                </Link>
              </div>
            )}
          </div>
          {image && (
            <div className="relative slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-lg opacity-30 transform scale-105"></div>
              <img
                src={image}
                alt={`${title} - 1-to-1 Pediatrics`}
                className="rounded-lg shadow-2xl w-full h-auto object-cover relative z-10 float-animation"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
