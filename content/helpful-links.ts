import { ContentPage } from "./home"

export const helpfulLinksContent: ContentPage = {
  title: "Helpful Links",
  description: "Resources for parents and patients",
  sections: [
    {
      type: "hero",
      content: {
        title: "Helpful Resources",
        subtitle: "Trusted Health Information",
        description: "A collection of reliable resources for parents and caregivers."
      }
    },
    {
      type: "features",
      content: {
        title: "General Health & Development",
        features: [
          {
            title: "American Academy of Pediatrics",
            description: "Comprehensive child health information from the leading authority on pediatric care.",
            link: "https://www.aap.org"
          },
          {
            title: "HealthyChildren.org",
            description: "Parenting advice and child health information backed by the American Academy of Pediatrics.",
            link: "https://www.healthychildren.org"
          },
          {
            title: "CDC Child Development",
            description: "Developmental milestones and screening information from birth to 5 years.",
            link: "https://www.cdc.gov/ncbddd/childdevelopment/index.html"
          }
        ]
      }
    },
    {
      type: "features",
      content: {
        title: "Safety & Injury Prevention",
        features: [
          {
            title: "Safe Kids Worldwide",
            description: "Tips and resources for keeping children safe from accidental injuries.",
            link: "https://www.safekids.org"
          },
          {
            title: "Consumer Product Safety Commission",
            description: "Product recalls and safety information for children's products.",
            link: "https://www.cpsc.gov"
          },
          {
            title: "Poison Control",
            description: "Free, confidential expert advice 24/7. Call 1-800-222-1222 or visit online.",
            link: "https://www.poison.org"
          }
        ]
      }
    },
    {
      type: "features",
      content: {
        title: "Mental Health & Behavioral Health",
        features: [
          {
            title: "Child Mind Institute",
            description: "Resources for children's mental health and learning disorders.",
            link: "https://childmind.org"
          },
          {
            title: "NAMI (National Alliance on Mental Illness)",
            description: "Support, education, and advocacy for mental health conditions.",
            link: "https://www.nami.org"
          },
          {
            title: "Substance Abuse and Mental Health Services Administration (SAMHSA)",
            description: "National helpline and resources for mental health and substance use disorders.",
            link: "https://www.samhsa.gov"
          }
        ]
      }
    },
    {
      type: "info",
      content: {
        title: "Disclaimer",
        description: "These links are provided for informational purposes only. Inclusion does not imply endorsement by 1-to-1 Pediatrics. Always consult your pediatrician for specific medical advice about your child. For urgent concerns or medical emergencies, contact our office or seek immediate medical attention."
      }
    }
  ]
}
