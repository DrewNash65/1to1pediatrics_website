import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTA {
  text: string
  href: string
}

interface InfoSectionProps {
  title: string
  description: string
  callout?: boolean
  quote?: boolean
  author?: string
  image?: string
  video?: string
  imagePosition?: 'left' | 'right'
  cta?: CTA
}

export function InfoSection({
  title,
  description,
  callout,
  quote,
  author,
  image,
  video,
  imagePosition = 'right',
  cta
}: InfoSectionProps) {
  if (quote) {
    return (
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <blockquote className="mx-auto max-w-3xl">
            <div className="relative bg-slate-50 rounded-lg p-8 md:p-12">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
              <p className="relative pl-6 sm:pl-8 text-base sm:text-lg md:text-xl italic text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              {author && (
                <footer className="relative mt-6 pl-8">
                  <cite className="not-italic font-semibold text-primary">
                    — {author}
                  </cite>
                </footer>
              )}
            </div>
          </blockquote>
        </div>
      </section>
    )
  }

  return (
    <section className={cn(
      "py-6 md:py-8",
      callout && "bg-stone-50"
    )}>
      <div className="container mx-auto px-4">
        {(image || video) ? (
          <div className={cn(
            "mx-auto max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center",
            callout && "bg-white rounded-lg p-8 shadow-sm border-l-4 border-primary"
          )}>
            <div className={imagePosition === 'left' ? 'md:order-2' : ''}>
              <h2 className="mb-4 text-xl sm:text-2xl font-bold md:text-3xl text-center whitespace-pre-line leading-tight">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed whitespace-pre-line px-2 sm:px-0"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              {cta && (
                <div className="mt-6 text-center">
                  {cta.href.startsWith('http') ? (
                    <a
                      href={cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button
                        size="lg"
                        className="font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[48px]"
                      >
                        {cta.text}
                      </Button>
                    </a>
                  ) : (
                    <Link href={cta.href}>
                      <Button
                        size="lg"
                        className="font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[48px]"
                      >
                        {cta.text}
                      </Button>
                    </Link>
                  )}
                </div>
              )}
            </div>
            <div className={imagePosition === 'left' ? 'md:order-1' : ''}>
              {video ? (
                <div className="relative">
                  <iframe
                    src={video}
                    title={title}
                    className="rounded-lg shadow-lg w-full h-48 sm:h-64 md:h-80"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : image ? (
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              ) : null}
            </div>
          </div>
        ) : (
          <div className={cn(
            "mx-auto max-w-3xl",
            callout && "bg-white rounded-lg p-8 shadow-sm border-l-4 border-primary"
          )}>
            <h2 className="mb-4 text-xl sm:text-2xl font-bold md:text-3xl text-center whitespace-pre-line leading-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed whitespace-pre-line px-2 sm:px-0"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {cta && (
              <div className="mt-6 text-center">
                {cta.href.startsWith('http') ? (
                  <a
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      size="lg"
                      className="font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[48px]"
                    >
                      {cta.text}
                    </Button>
                  </a>
                ) : (
                  <Link href={cta.href}>
                    <Button
                      size="lg"
                      className="font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-h-[48px]"
                    >
                      {cta.text}
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
