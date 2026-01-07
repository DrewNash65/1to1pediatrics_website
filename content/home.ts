export interface ContentPage {
  title: string
  description: string
  sections: ContentSection[]
}

export interface ContentSection {
  type: "hero" | "info" | "features" | "cta" | "testimonial" | "accordion"
  content?: any
}

export const homeContent: ContentPage = {
  title: "1-to-1 Pediatrics",
  description: "Hometown Care for Your Child - Providing personalized pediatric care in Danville, California",
  sections: [
    {
      type: "hero",
      content: {
        title: "Hometown Care for Your Child",
        subtitle: "Personalized pediatric care with an old-school philosophy",
        description: "1-to-1 Pediatrics provides a revolutionary practice model designed to enhance the care provided to patients. By scheduling fewer patients per day, we spend more time with each patient, providing the highest quality, most personalized pediatric care available.",
        cta: {
          text: "Schedule a Meet & Greet",
          href: "/contact"
        },
        image: "/images/Nash-web1.jpg"
      }
    },
    {
      type: "features",
      content: {
        title: "Why Choose 1-to-1 Pediatrics?",
        subtitle: "A different approach to pediatric care",
        features: [
          {
            title: "More Time",
            description: "Fewer patients per day means we can spend quality time with your child, never rushing through appointments."
          },
          {
            title: "Direct Access",
            description: "Have a question? Get it answered right away by your personal pediatrician—the person you trust."
          },
          {
            title: "Continuity",
            description: "Build a long-term relationship with your pediatrician. We've been serving Danville families since 2011."
          },
          {
            title: "Personalized Care",
            description: "Experience a slower-paced, nurturing environment where your child is more than just a number."
          }
        ]
      }
    },
    {
      type: "info",
      content: {
        title: "About Our Practice",
        description: "1-to-1 Pediatrics opened its doors on Valentine's Day 2011. After working in a busy pediatric office for 16 years, Dr. Nash formed 1-to-1 Pediatrics to provide the kind of personalized, old-school care that's becoming rare in modern medicine. Having celebrated our 13th anniversary, the physicians and staff at 1-to-1 Pediatrics enjoy providing a different, slower-paced, and nurturing environment for children and adolescents to receive preventative and urgent pediatric care.",
        image: "/images/Nash-web5.jpg",
        imagePosition: "left"
      }
    },
    {
      type: "cta",
      content: {
        title: "Ready to Join Our Practice?",
        description: "If you're looking for a special pediatric home for your family, call us to schedule a \"Meet and Greet\" appointment.",
        cta: {
          text: "Contact Us",
          href: "/contact"
        }
      }
    }
  ]
}
