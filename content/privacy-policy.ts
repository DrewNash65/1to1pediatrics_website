import { ContentPage } from "./home"

export const privacyPolicyContent: ContentPage = {
  title: "Privacy Policy",
  description: "Our commitment to protecting your privacy",
  sections: [
    {
      type: "hero",
      content: {
        title: "Privacy Policy",
        subtitle: "Your Privacy Matters to Us",
        description: "1-to-1 Pediatrics is committed to protecting your personal health information."
      }
    },
    {
      type: "info",
      content: {
        title: "Our Commitment",
        description: "At 1-to-1 Pediatrics, we understand the importance of protecting your personal health information. We are committed to maintaining the confidentiality and security of your medical records and personal information in compliance with the Health Insurance Portability and Accountability Act (HIPAA) and other applicable laws and regulations."
      }
    },
    {
      type: "info",
      content: {
        title: "Information We Collect",
        description: "We collect and maintain information necessary to provide you with quality healthcare services. This may include: Personal identification information (name, address, date of birth, contact information), Medical history and current health information, Insurance information, Treatment records and notes, Billing and payment information, and Communications between you and our practice."
      }
    },
    {
      type: "info",
      content: {
        title: "How We Protect Your Information",
        description: "We implement appropriate administrative, physical, and technical safeguards to protect your personal health information against unauthorized use, disclosure, or alteration. This includes secure electronic health records systems, encrypted communications where appropriate, limited access to information on a need-to-know basis, regular training for our staff on privacy practices, and secure physical storage of paper records."
      }
    },
    {
      type: "info",
      content: {
        title: "How We Use Your Information",
        description: "We use your personal health information to: Provide, coordinate, or manage your healthcare and related services, Obtain payment for healthcare services (billing insurance), Conduct quality improvement activities, Comply with legal and regulatory requirements, and Operate and improve our practice. We will not use or disclose your information for marketing purposes without your explicit authorization."
      }
    },
    {
      type: "info",
      content: {
        title: "Your Rights",
        description: "You have the right to: Inspect and copy your medical records, Request corrections to your medical records, Request restrictions on how we use your information, Request confidential communications, Obtain an accounting of disclosures of your information, and Request a copy of this notice. You also have the right to file a complaint if you believe your privacy rights have been violated."
      }
    },
    {
      type: "info",
      content: {
        title: "Electronic Communications",
        description: "Please note that HIPAA laws do NOT allow medical documents to be sent via email. We ask that you do not include sensitive medical information in unencrypted email messages. For secure communication of personal health information, please contact our office by phone or use our secure patient portal if available."
      }
    },
    {
      type: "cta",
      content: {
        title: "Questions About Your Privacy?",
        description: "If you have questions about this privacy policy or how we handle your information, please contact our office.",
        cta: {
          text: "Contact Us",
          href: "/contact"
        }
      }
    }
  ]
}
