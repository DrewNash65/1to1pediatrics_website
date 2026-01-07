import { ContentPage } from "./home"

export const telemedicineContent: ContentPage = {
  title: "Telemedicine",
  description: "Virtual healthcare visits with your pediatrician",
  sections: [
    {
      type: "hero",
      content: {
        title: "Telemedicine Visits",
        subtitle: "Quality Care from the Comfort of Home",
        description: "Speak face-to-face with your doctor in a virtual environment to discuss medical concerns and symptoms.",
        image: "/images/Nash-web7.jpg"
      }
    },
    {
      type: "info",
      content: {
        title: "What is Telemedicine?",
        description: "With concern over COVID-19 and other illnesses, we at 1-to-1 Pediatrics are rolling out new ways for our patients to obtain healthcare from our physicians and staff. Telemedicine allows patients to speak face-to-face, in a virtual environment, with your doctor to discuss medical concerns and symptoms. Depending on the type of problem, the physician may be able to diagnose and treat the condition through the virtual visit. In most cases, these visits are billed to and covered by commercial health insurance. Copays, deductibles, and coinsurance will apply as usual."
      }
    },
    {
      type: "info",
      content: {
        title: "How It Works",
        description: "Telemedicine visits will be scheduled as appointments, the same way that normal office visits are done. Please call the office to schedule a telemedicine visit. Just prior to your appointment time, you'll receive a link to 'check in' to the visit. You'll then be entered into the queue to be seen.",
        image: "/images/Nash-web9.jpg",
        imagePosition: "left"
      }
    },
    {
      type: "info",
      content: {
        title: "After Your Visit",
        description: "Once your visit is completed, the visit will be documented in the medical chart as usual and prescriptions, tests, and referrals will be sent in the same way as an in-office visit. We're hoping that patients make use of this modern way to communicate with our physicians and obtain high-quality care in a virtual environment."
      }
    },
    {
      type: "features",
      content: {
        title: "When to Use Telemedicine",
        features: [
          {
            title: "Follow-up Visits",
            description: "Check-ins for ongoing conditions or post-illness follow-ups"
          },
          {
            title: "Minor Illnesses",
            description: "Cold symptoms, allergies, rashes, and other non-emergency concerns"
          },
          {
            title: "Consultations",
            description: "Discuss test results, treatment plans, or general health questions"
          },
          {
            title: "Medication Reviews",
            description: "Discuss current medications and potential adjustments"
          }
        ]
      }
    },
    {
      type: "cta",
      content: {
        title: "Ready to Schedule?",
        description: "Call our office to schedule a telemedicine visit with Dr. Nash or Dr. Borden.",
        cta: {
          text: "Call (925) 362-1861",
          href: "tel:9253621861"
        }
      }
    }
  ]
}
