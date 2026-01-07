import { ContentPage } from "./home"

export const hmoPatientsContent: ContentPage = {
  title: "Information for HMO Patients",
  description: "Important information for HMO insurance patients",
  sections: [
    {
      type: "hero",
      content: {
        title: "A Message to Our HMO Patients",
        subtitle: "Understanding Your Options",
        description: "We're committed to serving all families in our community. Here's what HMO patients need to know."
      }
    },
    {
      type: "info",
      content: {
        title: "Important Notice",
        description: "For families who have HMO insurance, we have learned that our practice is not contractually allowed to provide the added value services through 1-to-1 Pediatrics. Consequently, the Annual Administrative Fee that covers our After Hours Advice Nurse service, form completion, and letter writing does not apply to you. We're sorry about the inconvenience this may cause; however, in order to continue to provide services to HMO patients, we must comply with these restrictions.",
        callout: true
      }
    },
    {
      type: "info",
      content: {
        title: "After-Hours Advice",
        description: "For after-hours advice, you are encouraged to contact the advice nurse service provided by your insurance carrier. Please refer to the telephone number provided on your child's insurance card to access that service. For those of you who would still like to contact the Team Health advice nurse service that our practice works with for non-HMO patients, you may still access them outside the scope of our office."
      }
    },
    {
      type: "info",
      content: {
        title: "Form Completion & Letter Writing",
        description: "Because HMO regulations restrict patients from participating in our program, forms and letter writing will be charged in an à la carte manner:"
      }
    },
    {
      type: "features",
      content: {
        title: "Fee Schedule",
        features: [
          {
            title: "Simple Form Completion",
            description: "1-3 pages in length: $50 per form"
          },
          {
            title: "Complex Form Completion",
            description: "4 or more pages: $75 per form"
          },
          {
            title: "Letter Writing",
            description: "For schools, 504 plans, diagnosis summaries, etc.: $60"
          }
        ]
      }
    },
    {
      type: "info",
      content: {
        title: "How to Request Services",
        description: "To simplify the process, please contact our office to request form completion or letter writing services. Once processed, you may deliver or fax the requested form or letter request to the office. HIPAA laws do NOT allow medical documents to be sent via email. Please allow 48-72 hours for completion."
      }
    },
    {
      type: "cta",
      content: {
        title: "Questions?",
        description: "If you have questions about HMO services, please contact our office.",
        cta: {
          text: "Contact Us",
          href: "/contact"
        }
      }
    }
  ]
}
