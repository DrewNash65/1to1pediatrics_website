import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface Feature {
  title: string
  description: string
  link?: string
}

interface FeatureGridProps {
  title?: string
  subtitle?: string
  features: Feature[]
}

export function FeatureGrid({ title, subtitle, features }: FeatureGridProps) {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const cardContent = (
              <>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
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
                  className="transition-shadow hover:shadow-lg"
                >
                  <Card className="h-full">
                    {cardContent}
                  </Card>
                </a>
              )
            }

            return (
              <Card key={index}>
                {cardContent}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
