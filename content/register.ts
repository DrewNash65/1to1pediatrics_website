import { ContentPage } from "./home"

export const registerContent: ContentPage = {
  title: "Register for the Practice",
  description: "Join the 1-to-1 Pediatrics family",
  sections: [
    {
      type: "hero",
      content: {
        title: "Join Our Practice",
        subtitle: "Experience Personalized Pediatric Care",
        description: "Ready to make the switch to 1-to-1 Pediatrics? Here's what you need to know about registering for our practice."
      }
    },
    {
      type: "info",
      content: {
        title: "The Registration Process",
        description: "To enroll in 1-to-1 Pediatrics, please contact our office to schedule a \"Meet and Greet\" appointment with Dr. Nash or Dr. Borden. This complimentary visit gives you the opportunity to tour our office, meet our team, and learn more about our practice model. It's a great way to see if 1-to-1 Pediatrics is the right fit for your family."
      }
    },
    {
      type: "info",
      content: {
        title: "About the Newborn Program",
        description: "In addition to traditional office-based services, 1-to-1 Pediatrics offers the Newborn Program—a fee-based, supplemental service designed to complement the in-office care provided to patients of Drs. Nash and Borden. Highlights of this 3-month program include availability of the pediatrician 24/7 for the first 3 months and initial newborn care from birth to 6 weeks in your home. To allow time to provide these services, enrollment in the 1-to-1 Pediatrics Newborn Program is limited.",
        callout: true
      }
    },
    {
      type: "features",
      content: {
        title: "What to Bring",
        features: [
          {
            title: "Insurance Information",
            description: "Bring your insurance card and any relevant policy information"
          },
          {
            title: "Medical Records",
            description: "If transferring from another practice, bring your child's vaccination records and medical history"
          },
          {
            title: "Questions",
            description: "Write down any questions you have about our practice model and services"
          },
          {
            title: "Your Child",
            description: "While not required, it's nice for us to meet your child during the visit"
          }
        ]
      }
    },
    {
      type: "cta",
      content: {
        title: "Ready to Get Started?",
        description: "Call our office to schedule your Meet and Greet appointment today.",
        cta: {
          text: "Call (925) 362-1861",
          href: "tel:9253621861"
        }
      }
    }
  ]
}
