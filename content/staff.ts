import { ContentPage } from "./home"

export const staffContent: ContentPage = {
  title: "Our Staff",
  description: "Meet the 1-to-1 Pediatrics team",
  sections: [
    {
      type: "hero",
      content: {
        title: "Our Dedicated Team",
        subtitle: "Experienced, Caring Professionals",
        description: "The friendly and experienced staff at 1-to-1 Pediatrics is here to support you and your family.",
        image: "/images/Nash Group Photo.jpg"
      }
    },
    {
      type: "features",
      content: {
        title: "Meet Our Team",
        features: [
          {
            title: "Pam - Office Manager",
            description: "Pam has been Dr. Nash's 'right hand' for the past 25 years and is the office manager for 1-to-1 Pediatrics/Danville Pediatrics. She has the experience in pediatrics to get authorizations approved while simultaneously calming the nerves of an anxious child. As the 'Jill-of-all-trades' for 1-to-1 Pediatrics, Pam is the person who can get things done. Feel free to call her with your questions."
          },
          {
            title: "Karla - Medical Assistant",
            description: "Karla has also been working with Dr. Nash for over 20 years. She has a 'get it done' demeanor and loves interacting with children and their families. Karla works as a medical assistant for the office and is a whiz with referrals and prior authorizations."
          },
          {
            title: "Kaysi - Medical Assistant",
            description: "Kaysi is the newest addition to the office team and comes with years of experience as a medical assistant. She has a friendly and down-to-earth demeanor with patients and families. She's a quick problem solver and we're thrilled to have her with us."
          }
        ]
      }
    },
    {
      type: "info",
      content: {
        title: "Our Commitment to You",
        description: "Every member of our team is dedicated to providing the highest quality, personalized care for your child. From the moment you walk through our doors, you'll experience the difference that a small, hometown practice can make. We're not just here to process paperwork—we're here to support your family's healthcare journey.",
        image: "/images/Nash-web10.jpg",
        imagePosition: "right"
      }
    },
    {
      type: "cta",
      content: {
        title: "Meet Our Providers",
        description: "Learn more about Dr. Nash, Dr. Borden, and Beth Quadraccia, PA.",
        cta: {
          text: "View Provider Bios",
          href: "/dr-nash"
        }
      }
    }
  ]
}
