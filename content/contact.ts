import { ContentPage } from "./home"

export const contactContent: ContentPage = {
  title: "Contact Us",
  description: "Get in touch with 1-to-1 Pediatrics",
  sections: [
    {
      type: "hero",
      content: {
        title: "Contact Us",
        subtitle: "We're Here to Help",
        description: "Reach out to schedule an appointment, ask questions, or learn more about our practice."
      }
    },
    {
      type: "features",
      content: {
        title: "Contact Information",
        features: [
          {
            title: "Phone & Fax",
            description: "Phone:\n(925) 362-1861\nor\n(925) DOC-1TO1\n\nFax:\n(925) 838-6329"
          },
          {
            title: "Address",
            description: "911 San Ramon Valley Boulevard\nSuite 100\nDanville, CA 94526"
          },
          {
            title: "Office Hours",
            description: "Monday-Wednesday:\n    9 am-12:30 pm\n    2 pm-5 pm\nThursday-Friday:\n    9 am-2 pm"
          }
        ]
      }
    }
  ]
}
