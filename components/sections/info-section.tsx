import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

interface InfoSectionProps {
  title: string
  description: string
  callout?: boolean
  quote?: boolean
  author?: string
  image?: string
  imagePosition?: 'left' | 'right'
}

export function InfoSection({
  title,
  description,
  callout,
  quote,
  author,
  image,
  imagePosition = 'right'
}: InfoSectionProps) {
  if (quote) {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <blockquote className="mx-auto max-w-3xl">
            <div className="relative bg-slate-50 rounded-lg p-8 md:p-12">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
              <p className="relative pl-8 text-lg md:text-xl italic text-muted-foreground leading-relaxed">
                {description}
              </p>
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
      "py-12 md:py-16",
      callout && "bg-blue-50"
    )}>
      <div className="container mx-auto px-4">
        {image ? (
          <div className={cn(
            "mx-auto max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center",
            callout && "bg-white rounded-lg p-8 shadow-sm border-l-4 border-primary"
          )}>
            <div className={imagePosition === 'left' ? 'md:order-2' : ''}>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </div>
            <div className={imagePosition === 'left' ? 'md:order-1' : ''}>
              <img
                src={image}
                alt={title}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        ) : (
          <div className={cn(
            "mx-auto max-w-3xl",
            callout && "bg-white rounded-lg p-8 shadow-sm border-l-4 border-primary"
          )}>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
