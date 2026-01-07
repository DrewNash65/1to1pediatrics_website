import { ContentPage } from "./home"

export const testimonialsContent: ContentPage = {
  title: "Patient Testimonials",
  description: "What our families say about 1-to-1 Pediatrics",
  sections: [
    {
      type: "hero",
      content: {
        title: "What Families Say",
        subtitle: "Real Experiences from Real Families",
        description: "Here's what some of our 1-to-1 families have to say about their experience with our practice."
      }
    },
    {
      type: "testimonial",
      content: {
        testimonials: [
          {
            text: "We joined the 1-to-1 Pediatrics Plan when Dr. Nash opened his new office in Danville last year, and it has been one of the best healthcare decisions we have made as a family. The new plan gives us the ability to have access to Dr. Nash via email virtually 24/7, drop in appointments before, during, and after hours as needed, we even had a home visit when my daughter had a serious sickness. Additionally, we had sick kids on two of our summer vacations this year, and Dr. Nash was able to find pharmacies near our location and call in prescriptions remotely! It's been an added bonus for us to have Dr. Nash stock common prescriptions on hand to give me during our office visits, eliminating the need for me to take a second trip (with my sick child) to the pharmacy to get my prescriptions filled. I can say without reservation that Dr. Nash is one of the most competent, researched medical professionals I have ever known, and has created a model of delivering healthcare that works exceptionally well for our family! His cheery, helpful office staff is a huge bonus!",
            author: "P.Y.",
            location: "Danville, CA"
          },
          {
            text: "My wife and I are new parents. Along with our excitement about our beautiful daughter we also had many of the new parent concerns (and maybe a few more). The best thing we did for our peace of mind was to participate in Dr. Nash's 1-to-1 Pediatrics program. We heard about the program from friends and thought it might be helpful. That's a huge understatement. Dr. Nash visited us at our home three times in the first six weeks. Any new parent will tell you the value of having your personal, family doctor come to your house two days after birth as opposed trying to figure out how to bring your daughter to a doctor's office. We have thoroughly enjoyed partnering with Dr. Nash (which is how we view our relationship). He is available 24 hours a day – we have the luxury of emailing, texting and calling him on his cell phone whenever needed; that alone, provides comfort. Dr. Nash is experienced, has a great bedside manner, compassionate, committed and importantly for us, he is able to step back and give you a common sense perspective. My wife and I could not be happier with our relationship with Dr. Nash and the comfort we have in knowing our daughter is well protected. The one area for improvement is that he is a Red Sox fan – but what are you going to do?",
            author: "S.D.",
            location: "Alamo, CA"
          },
          {
            text: "As parents of micropreemie triplets, we couldn't have made a better choice for our pediatrician. Dr. Nash came highly recommended from friends, family members, NICU Doctors and nurses. He has always been so warm, compassionate and extremely knowledgeable. We always feel comfortable asking any questions we may have (and we've had a lot as first time parents) and seeking advice whether it is from Dr. Nash or any of the wonderful staff in his office. It's genuinely obvious from the minute you walk into this office that everyone loves children and are very attentive. We've never had trouble getting a same day appointment or receiving timely advice over the phone. We always leave feeling confident as we have never felt rushed through an appointment. This office just gets the job done. For example, we needed certain authorizations for one of our daughter's and felt like we kept getting the runaround from our insurance company, Pam took charge and turned everything around positively in no time. Also, it's great when you tell your kids it's time to head to Dr. Nash's office and they all smile and start talking about him. We can't express how truly thankful we are to have Dr. Nash and his staff as our triplets care team.",
            author: "L.F.",
            location: "Pleasanton, CA"
          }
        ]
      }
    },
    {
      type: "info",
      content: {
        title: "Individual Experiences May Vary",
        description: "These testimonials reflect the personal experiences of our patients. Every family's healthcare journey is unique, and we're committed to providing personalized care that meets your specific needs and circumstances."
      }
    },
    {
      type: "cta",
      content: {
        title: "Join Our Family",
        description: "Ready to experience the 1-to-1 difference for yourself? Contact us to schedule a meet and greet.",
        cta: {
          text: "Contact Us",
          href: "/contact"
        }
      }
    }
  ]
}
