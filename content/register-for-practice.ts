import { ContentPage } from "./home"

export const registerForPracticeContent: ContentPage = {
  title: "Register For the Practice",
  description: "Complete your registration paperwork after your Meet & Greet appointment",
  sections: [
    {
      type: "hero",
      content: {
        title: "Register For the Practice",
        subtitle: "Complete Your Registration Paperwork",
        description: "After you have completed your Meet & Greet appointment with Dr. Nash, Dr. Borden, or Beth Quadraccia, PA, click on the button below to complete registration paperwork. Please note: you need to click \"submit\" after completing the form. Please do this for each of your children. If you would rather complete the forms with pen and paper in the office, that is fine as well."
      }
    },
    {
      type: "cta",
      content: {
        title: "Ready to Complete Your Registration?",
        description: "Click the button below to access our online registration forms.",
        cta: {
          text: "Complete Registration Forms",
          href: "https://forms.1to1pediatrics.com"
        }
      }
    }
  ]
}