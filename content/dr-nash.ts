import { ContentPage } from "./home"

export const drNashContent: ContentPage = {
  title: "Andrew L. Nash, M.D.",
  description: "Founding physician of 1-to-1 Pediatrics",
  sections: [
    {
      type: "hero",
      content: {
        title: "Andrew L. Nash, M.D.",
        subtitle: "Founding Physician",
        description: "Dr. Drew Nash is the founding physician of 1-to-1 Pediatrics and has been practicing primary care pediatrics in the East Bay for over 30 years.",
        image: "/images/Dr_Nash_New.PNG"
      }
    },
    {
      type: "info",
      content: {
        title: "About Dr. Nash",
        description: "Dr. Nash founded 1-to-1 Pediatrics on Valentine's Day 2011 after working in a busy pediatric office for 16 years. His vision was to create a revolutionary practice model designed to enhance the care provided to patients. By scheduling fewer patients per day, the practice prides itself on being able to spend more time with each patient, providing the highest quality, most personalized pediatric care available."
      }
    },
    {
      type: "info",
      content: {
        title: "Training & Credentials",
        description: "Dr. Nash grew up in Massachusetts. He attended Harvard College where he graduated Cum Laude in Biology. He then went on to medical school at The University of California, Davis. He subsequently completed his pediatric internship at UCSF and the remainder of his pediatric residency at Children's Hospital and Research Center in Oakland.\n\nDr. Nash is a fellow of the American Academy of Pediatrics and a diplomate of the American Board of Pediatrics. He is on staff at John Muir Medical Center in Walnut Creek and has been practicing primary care pediatrics in the San Ramon Valley for over 30 years."
      }
    },
    {
      type: "info",
      content: {
        title: "Philosophy",
        description: "\"When I started out in pediatrics in 1991, I did so with the intent to develop long-term relationships with my patients. As new families joined my practice and new babies were born, I got to know my patients well and could provide the same in-depth, comprehensive care that I received from my pediatrician when I was a child. That's the kind of old-school, personalized care I wanted to bring back with 1-to-1 Pediatrics.\"\n\n— Andrew L. Nash, M.D."
      }
    },
    {
      type: "cta",
      content: {
        title: "Schedule a Meet & Greet",
        description: "Interested in learning more about our practice? Schedule a complimentary meet and greet appointment with Dr. Nash.",
        cta: {
          text: "Contact Us",
          href: "/contact"
        }
      }
    }
  ]
}
