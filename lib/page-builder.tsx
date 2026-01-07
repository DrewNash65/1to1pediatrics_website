import { Metadata } from "next"
import { ContentPage } from "@/content/home"
import { HeroSection } from "@/components/sections/hero-section"
import { InfoSection } from "@/components/sections/info-section"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"
import { TestimonialList } from "@/components/sections/testimonial-list"

interface PageBuilderProps {
  content: ContentPage
}

export function buildPageMetadata(content: ContentPage): Metadata {
  return {
    title: `${content.title} | 1-to-1 Pediatrics`,
    description: content.description,
  }
}

export function PageBuilder({ content }: PageBuilderProps) {
  return (
    <>
      {content.sections.map((section, index) => {
        switch (section.type) {
          case "hero":
            return <HeroSection key={index} {...section.content} />
          case "info":
            return <InfoSection key={index} {...section.content} />
          case "features":
            return <FeatureGrid key={index} {...section.content} />
          case "cta":
            return <CTASection key={index} {...section.content} />
          case "testimonial":
            return <TestimonialList key={index} {...section.content} />
          default:
            return null
        }
      })}
    </>
  )
}
