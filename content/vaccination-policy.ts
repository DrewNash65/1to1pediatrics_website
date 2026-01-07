import { ContentPage } from "./home"

export const vaccinationPolicyContent: ContentPage = {
  title: "Vaccination Policy",
  description: "Our approach to childhood immunizations",
  sections: [
    {
      type: "hero",
      content: {
        title: "Vaccination Policy",
        subtitle: "Protecting Children's Health",
        description: "1-to-1 Pediatrics follows the standard childhood vaccination schedule recommended by the American Academy of Pediatrics and the Centers for Disease Control and Prevention."
      }
    },
    {
      type: "info",
      content: {
        title: "Our Position on Vaccinations",
        description: "At 1-to-1 Pediatrics, we firmly believe in the safety and effectiveness of childhood vaccines. Vaccines are one of the most important tools we have to protect children from serious, preventable diseases. The scientific evidence overwhelmingly supports vaccination as safe and effective. We follow the standard immunization schedule recommended by the American Academy of Pediatrics (AAP) and the Centers for Disease Control and Prevention (CDC).",
        callout: true
      }
    },
    {
      type: "info",
      content: {
        title: "Recommended Vaccination Schedule",
        description: "We recommend that all children receive vaccines according to the standard schedule, which provides protection when children are most vulnerable to serious diseases. This schedule has been extensively studied and is designed to provide optimal protection while maintaining safety. Delaying or skipping vaccines leaves children vulnerable to preventable illnesses for longer than necessary."
      }
    },
    {
      type: "info",
      content: {
        title: "Why We Require Vaccinations",
        description: "Vaccines protect not only the individual child but also the community, especially those who cannot be vaccinated due to medical conditions or age. By maintaining high vaccination rates in our practice, we help protect all our patients, including newborns, children with compromised immune systems, and those who are too young to be fully vaccinated. This concept, known as herd immunity, is essential for community health."
      }
    },
    {
      type: "info",
      content: {
        title: "Addressing Concerns",
        description: "We understand that parents may have questions about vaccines. We welcome these questions and are happy to discuss them during well-child visits. We can provide evidence-based information about vaccine safety, ingredients, side effects, and the diseases they prevent. However, if after discussion you choose not to vaccinate your child according to the recommended schedule, we may need to refer you to another practice. This decision is made out of our obligation to protect all our patients, including those too young to be vaccinated or with compromised immune systems."
      }
    },
    {
      type: "info",
      content: {
        title: "Resources for Parents",
        description: "We encourage parents to seek reliable, evidence-based information about vaccines. Recommended resources include: The American Academy of Pediatrics (healthychildren.org), The Centers for Disease Control and Prevention (cdc.gov/vaccines), and The Immunization Action Coalition (immunize.org). These organizations provide comprehensive information based on the best available science."
      }
    },
    {
      type: "cta",
      content: {
        title: "Questions About Vaccines?",
        description: "Please discuss any vaccination concerns or questions with your pediatrician during your next visit.",
        cta: {
          text: "Contact Us",
          href: "/contact"
        }
      }
    }
  ]
}
