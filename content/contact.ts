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
            title: "Phone",
            description: "(925) 362-1861"
          },
          {
            title: "Address",
            description: "3070 Camino Tassajara Suite 130, Danville, CA 94506"
          },
          {
            title: "Office Hours",
            description: "Monday - Friday: 8:30 AM - 5:00 PM (Closed for lunch 12:00 PM - 1:30 PM)"
          },
          {
            title: "Fax",
            description: "(925) 362-1862"
          }
        ]
      }
    },
    {
      type: "info",
      content: {
        title: "Important Notice",
        description: "Please do not send urgent medical concerns through this form or email. If you have a medical emergency, please call 911 or proceed to the nearest emergency room. For urgent but non-emergency concerns during office hours, please call our office directly.",
        callout: true
      }
    },
    {
      type: "info",
      content: {
        title: "Schedule a Visit",
        description: "Interested in joining our practice? Call us to schedule a complimentary 'Meet and Greet' appointment with Dr. Nash or Dr. Borden. This is a great opportunity to tour our office, meet our team, and learn more about our practice model.",
        image: "/images/Nash-web8.jpg",
        imagePosition: "right"
      }
    }
  ]
}
