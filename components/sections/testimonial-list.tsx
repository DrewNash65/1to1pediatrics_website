import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface Testimonial {
  text: string
  author: string
  location: string
}

interface TestimonialListProps {
  testimonials: Testimonial[]
}

export function TestimonialList({ testimonials }: TestimonialListProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
