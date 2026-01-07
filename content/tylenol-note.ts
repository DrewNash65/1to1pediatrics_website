import { ContentPage } from "./home"

export const tylenolNoteContent: ContentPage = {
  title: "A Note About Tylenol/Acetaminophen",
  description: "Important information about acetaminophen use",
  sections: [
    {
      type: "hero",
      content: {
        title: "A Note About Tylenol/Acetaminophen",
        subtitle: "Important Safety Information",
        description: "Understanding safe use of acetaminophen for your child."
      }
    },
    {
      type: "info",
      content: {
        title: "Acetaminophen Safety",
        description: "Acetaminophen (the active ingredient in Tylenol and other medications) is generally safe and effective when used as directed. However, it's important for parents to understand proper dosing and potential risks. Always follow the dosing instructions on the package or as directed by your pediatrician. Never give more than the recommended dose.",
        callout: true
      }
    },
    {
      type: "info",
      content: {
        title: "Important Guidelines",
        description: "Check the concentration: Different formulations have different concentrations. Infant drops are often more concentrated than children's liquid suspension. Always read the label carefully. Use the measuring device that comes with the medication, not a household spoon. Know your child's weight-based dose - dosing is typically based on weight, not just age. Keep track of timing - acetaminophen can be given every 4-6 hours, but do not exceed 5 doses in 24 hours unless directed by your pediatrician."
      }
    },
    {
      type: "info",
      content: {
        title: "What to Avoid",
        description: "Never give acetaminophen to children under 3 months old without consulting your pediatrician. Be aware that many cold and cough medicines contain acetaminophen - check all medication labels to avoid accidental overdose. Don't give acetaminophen and other medications containing acetaminophen at the same time. If you're unsure whether a medication contains acetaminophen, ask your pharmacist or check the label for 'acetaminophen' or 'APAP.'"
      }
    },
    {
      type: "info",
      content: {
        title: "When to Call Your Pediatrician",
        description: "Call us if: Your baby is under 3 months old and has a fever (100.4°F or higher), The fever lasts more than 3 days in a child of any age, Symptoms worsen or don't improve, You accidentally give too much medication, You have questions about proper dosing, Your child has other symptoms that concern you."
      }
    },
    {
      type: "info",
      content: {
        title: "Signs of Overdose",
        description: "Signs of acetaminophen overdose may include: Nausea and vomiting, Loss of appetite, Sweating, Stomach pain (especially on the upper right side), Dark urine, Yellowing of the skin or eyes (jaundice). If you suspect an acetaminophen overdose, seek immediate medical attention or call Poison Control at 1-800-222-1222."
      }
    },
    {
      type: "cta",
      content: {
        title: "Questions?",
        description: "If you have questions about acetaminophen or any medication for your child, please don't hesitate to contact our office.",
        cta: {
          text: "Contact Us",
          href: "/contact"
        }
      }
    }
  ]
}
