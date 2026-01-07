import { Metadata } from "next"
import { homeContent } from "@/content/home"
import { HeroSection } from "@/components/sections/hero-section"
import { InfoSection } from "@/components/sections/info-section"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Home | 1-to-1 Pediatrics",
  description: "Hometown Care for Your Child - Providing personalized pediatric care in Danville, California since 2011",
}

export default function HomePage() {
  const content = homeContent

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
          default:
            return null
        }
      })}
    </>
  )
}
