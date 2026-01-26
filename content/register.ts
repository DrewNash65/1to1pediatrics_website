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
        description: "Before joining 1-to-1 Pediatrics, please contact our office to schedule a \"Meet & Greet\" appointment with one of our providers.  This complementary visit gives you the opportunity to meet our team and learn more about our practice model.  It's a great way to see if 1-to-1 Pediatrics is right for your family. We usually perform these meetings \"virtually,\" however, if you would like to meet in person, just let us know when you schedule.",
        image: "/images/Nash-web9.jpg",
        imagePosition: "left"
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
        title: "What to Bring to the Meet and Greet",
        features: [
          {
            title: "Questions About the Practice",
            description: "Any questions you might have about the practice, hours, and availability"
          },
          {
            title: "Parents and Family",
            description: "One or both parents. Kids can join too if they would like."
          }
        ]
      }
    },
    {
      type: "features",
      content: {
        title: "What to Bring to the First Office Visit",
        features: [
          {
            title: "Questions or Concerns",
            description: "Questions or concerns regarding your child"
          },
          {
            title: "Insurance Card",
            description: "Copy of your insurance card"
          },
          {
            title: "Vaccination Records",
            description: "Copy of vaccination records (if not a newborn)"
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
