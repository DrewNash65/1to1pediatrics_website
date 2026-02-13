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
    <section className="py-10 md:py-14 bg-gradient-to-br from-slate-700 via-teal-700 to-slate-800 text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center px-4 sm:px-0">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold md:text-4xl text-white drop-shadow-lg">
            {title}
          </h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg opacity-95 leading-relaxed">
            {description}
          </p>
          {author && (
            <p className="mb-6 sm:mb-8 text-sm font-semibold opacity-90 italic">
              — {author}
            </p>
          )}
          {cta && (
            cta.href.startsWith('http') ? (
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="font-semibold shadow-2xl hover:shadow-white/25 bg-white text-primary hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto min-h-[48px]"
                >
                  {cta.text}
                </Button>
              </a>
            ) : (
              <Link href={cta.href}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="font-semibold shadow-2xl hover:shadow-white/25 bg-white text-primary hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto min-h-[48px]"
                >
                  {cta.text}
                </Button>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}
