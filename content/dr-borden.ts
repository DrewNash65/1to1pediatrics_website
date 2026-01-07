import { ContentPage } from "./home"

export const drBordenContent: ContentPage = {
  title: "Marianne Borden, M.D.",
  description: "Pediatrician at 1-to-1 Pediatrics",
  sections: [
    {
      type: "hero",
      content: {
        title: "Marianne Borden, M.D.",
        subtitle: "Pediatrician",
        description: "Dr. Marianne Borden joined 1-to-1 Pediatrics, bringing extensive experience and a deep connection to the Danville community."
      }
    },
    {
      type: "info",
      content: {
        title: "About Dr. Borden",
        description: "Marianne grew up in Danville and is the product of the San Ramon Valley Unified School District (she attended Montair, Rancho Romero, Stone Valley, and Monte Vista). She's thrilled to be able to join Dr. Nash and his team in their 'hometown' style office setting and is passionate about providing personalized care to children and families from birth through college."
      }
    },
    {
      type: "info",
      content: {
        title: "Education & Training",
        description: "After high school, Marianne attended UCLA, graduating summa cum laude from the Honors College with a bachelor's degree in Biology. She then attended UCLA School of Medicine, earning her MD degree in 1999. Marianne fell in love with pediatrics during her clinical rotations in medical school and was thrilled to return to the Bay Area, choosing Lucile Packard Children's Hospital at Stanford for her pediatric residency from 1999-2002.",
        image: "/images/Nash-web10.jpg",
        imagePosition: "left"
      }
    },
    {
      type: "info",
      content: {
        title: "Professional Experience",
        description: "Following residency, Marianne remained at Stanford as a pediatric hospitalist in the NICU, PICU, and CVICU. She then became a partner at the Palo Alto Medical Foundation in Palo Alto where she practiced for seven years. Since that time, she has remained active in both the hospital and outpatient pediatric clinic setting. Most recently, Marianne has enjoyed her time as a Clinical Instructor for Stanford, supervising pediatric residents and attending for the Stanford Pediatric Service in the Well Baby Nursery at Lucile Packard Children's Hospital."
      }
    },
    {
      type: "info",
      content: {
        title: "Credentials",
        description: "Dr. Borden is a fellow of the American Academy of Pediatrics and a diplomate of the American Board of Pediatrics. She is on staff at John Muir Medical Center, Walnut Creek."
      }
    },
    {
      type: "info",
      content: {
        title: "Back Home",
        description: "Marianne and her husband, Ross, relocated to Danville with their two children, Nicky and Casey. She feels privileged to be able to return to practice in her hometown and provide personalized care to the community she knows and loves."
      }
    },
    {
      type: "cta",
      content: {
        title: "Schedule a Meet & Greet",
        description: "Interested in learning more about our practice? Schedule a complimentary meet and greet appointment with Dr. Borden.",
        cta: {
          text: "Contact Us",
          href: "/contact"
        }
      }
    }
  ]
}
