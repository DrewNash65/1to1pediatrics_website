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
        image: "/images/Telehealth_Borden.png"
      }
    },
    {
      type: "info",
      content: {
        title: "What is Telemedicine?",
        description: "At the start of the COVID-19 pandemic, 1-to-1 Pediatrics rolled out new ways for our patients to obtain healthcare from our physicians and staff. Telemedicine allows patients to speak face-to-face, in a virtual environment, with your doctor to discuss medical concerns and symptoms. Depending on the type of problem, the physician may be able to diagnose and treat the condition through the virtual visit. In most cases, these visits are billed to and covered by commercial health insurance. Copays, deductibles, and coinsurance will apply as usual."
      }
    },
    {
      type: "info",
      content: {
        title: "How It Works",
        description: "Telemedicine visits will be scheduled as appointments, the same way that normal office visits are done. Please call the office to schedule a telemedicine visit. Just prior to your appointment time, go to the link on the bottom of this page for the provider for which you are scheduled and click on it. You'll then be entered into the queue to be seen.",
        image: "/images/Nash-web4.jpg",
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
          },
          {
            title: "Behavioral Concerns",
            description: "If you have questions about your child's sleep or behavior, telehealth is a great way to communicate with your provider and get your questions answered."
          },
          {
            title: "Nutrition or Feeding Questions",
            description: "If you have questions regarding nutrition and feeding and you don't want to wait until your child's next well visit, this is a great way to discuss them."
          }
        ]
      }
    },
    {
      type: "features",
      content: {
        title: "Start Your Telemedicine Visit",
        subtitle: "Click on your provider's link to begin your virtual appointment",
        features: [
          {
            title: "Start a Telemedicine Call With Dr. Nash",
            description: "By clicking on the link to the left, the patient/parent agrees to have their visit with Dr. Nash via Telehealth. Copays, coinsurance, and deductibles will apply as per the patient's health insurance plan.",
            link: "https://doxy.me/v2/check-in/drnash/?utm_source=Badge&utm_medium=Badge"
          },
          {
            title: "Start a Telemedicine Call With Dr. Borden",
            description: "By clicking on the link to the left, the patient/parent agrees to have their visit with Dr. Borden via Telehealth. Copays, coinsurance, and deductibles will apply as per the patient's health insurance plan.",
            link: "https://doxy.me/v2/check-in/drborden/?utm_source=Badge&utm_medium=Badge"
          },
          {
            title: "Start a Telemedicine Call With Beth Quadraccia, PA",
            description: "By clicking on the link to the left, the patient/parent agrees to have their visit with Beth Quadraccia, PA via Telehealth. Copays, coinsurance, and deductibles will apply as per the patient's health insurance plan.",
            link: "https://doxy.me/bethquadraccia"
          }
        ]
      }
    },
    {
      type: "cta",
      content: {
        title: "Need to Schedule?",
        description: "Call our office to schedule a telemedicine visit with Dr. Nash, Dr. Borden, or Beth Quadraccia, PA.",
        cta: {
          text: "Call (925) 362-1861",
          href: "tel:9253621861"
        }
      }
    }
  ]
}
