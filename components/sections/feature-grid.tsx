import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Feature {
  title: string
  description: string
  link?: string
}

interface FeatureGridProps {
  title?: string
  subtitle?: string
  features: Feature[]
  columns?: number // Optional columns prop
}

export function FeatureGrid({ title, subtitle, features, columns }: FeatureGridProps) {
  // Determine grid columns based on number of features or explicit columns prop
  // 4 cards → 2 columns (2x2 grid), 3 cards → 3 columns (3 across)
  const getGridClassName = () => {
    const cols = columns || (features.length <= 2 || features.length === 4 ? 2 : 3);

    switch(cols) {
      case 2:
        return "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto";
      case 4:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto";
      default:
        return "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto";
    }
  }
  
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-stone-50 via-amber-50/30 to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-200/20 bg-[size:20px_20px] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold md:text-4xl bg-gradient-to-r from-slate-700 to-teal-700 bg-clip-text text-transparent">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={getGridClassName()}>
          {features.map((feature, index) => {
            const cardContent = (
              <>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-slate-500 rounded-full flex-shrink-0"></div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </>
            )

            if (feature.link) {
              return (
                <a
                  key={index}
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300"
                >
                  <Card className="h-full group-hover:shadow-2xl group-hover:scale-105 group-hover:border-primary/30 transition-all duration-300">
                    {cardContent}
                    <CardFooter>
                      <div className="flex items-center text-primary font-medium">
                        <span>Visit Link</span>
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </CardFooter>
                  </Card>
                </a>
              )
            }

            return (
              <Card key={index} className="group hover:shadow-2xl hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                {cardContent}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
