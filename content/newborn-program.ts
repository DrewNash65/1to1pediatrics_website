import { ContentPage } from "./home"

export const newbornProgramContent: ContentPage = {
  title: "Newborn Program",
  description: "Comprehensive newborn care for the first 3 months",
  sections: [
    {
      type: "hero",
      content: {
        title: "The Newborn Program",
        subtitle: "Extra Support for New Families",
        description: "A fee-based, supplemental service designed to complement the in-office care provided to patients of Drs. Nash and Borden."
      }
    },
    {
      type: "info",
      content: {
        title: "What is the Newborn Program?",
        description: "In addition to traditional office-based services available at Danville Pediatrics, 1-to-1 Pediatrics also offers the Newborn Program—a special service designed to give new families extra support during those critical first three months. Our unique 'low volume' approach allows members access to a variety of services not normally available in most primary care practices.",
        callout: true
      }
    },
    {
      type: "features",
      content: {
        title: "Program Highlights",
        columns: 2,
        features: [
          {
            title: "24/7 Availability",
            description: "Have a question? Get it answered right away by your personal pediatrician—the person you trust. Available for the first 3 months."
          },
          {
            title: "Home Visits",
            description: "Initial newborn care from birth to 6 weeks provided in the comfort of your home. No need to bundle up your newborn and travel to the office."
          },
          {
            title: "Personalized Care",
            description: "Build a strong foundation with your pediatrician from day one. We're there when you need us most."
          },
          {
            title: "Peace of Mind",
            description: "New parents have enough to worry about. Knowing you can reach your pediatrician anytime provides invaluable comfort."
          }
        ]
      }
    },
    {
      type: "info",
      content: {
        title: "About Enrollment",
        description: "To allow time to provide these services, enrollment in the 1-to-1 Pediatrics Newborn Program is limited. We recommend inquiring about enrollment during your pregnancy or as soon as your baby is born. Please feel free to contact us to inquire about enrolling your family in this unique 'hometown style' pediatric service.",
        image: "/images/Nash-web6.jpg",
        imagePosition: "left"
      }
    },
    {
      type: "cta",
      content: {
        title: "Learn More or Enroll",
        description: "Call our office to inquire about signing up for the Newborn Program or to schedule a meet and greet to learn more.",
        cta: {
          text: "Call (925) 362-1861",
          href: "tel:9253621861"
        }
      }
    }
  ]
}
