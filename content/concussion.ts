import { ContentPage } from "./home"

export const concussionContent: ContentPage = {
  title: "Concussion Care",
  description: "East Bay ImPACT Center - Baseline testing and concussion management",
  sections: [
    {
      type: "hero",
      content: {
        title: "East Bay ImPACT Center",
        subtitle: "Comprehensive Concussion Management",
        description: "Protect your child's most valuable asset—their brain. We offer baseline testing and expert concussion management for young athletes.",
        cta: {
          text: "Purchase Baseline Test - $50",
          href: "https://www.impacttest.com"
        }
      }
    },
    {
      type: "info",
      content: {
        title: "COVID-19 Update",
        description: "Because of the global pandemic, we have suspended baseline ImPACT testing at our facility. However, we now have the ability to have individuals complete baseline testing for ages 11 years through adulthood in your own home. The process of completing testing in the home environment has been validated by ImPACT to be accurate and reliable.",
        callout: true
      }
    },
    {
      type: "info",
      content: {
        title: "About Concussions",
        description: "Over the past few years, the medical community has become increasingly aware of the effect of head trauma on the adolescent brain. Teenagers and young adults often don't exhibit symptoms of a mild traumatic brain injury (mTBI) resulting from a level of impact that would cause more obvious findings in an adult. Consequently, an adolescent athlete with post-concussive syndrome most likely has suffered a more substantial injury than an adult with a similar level of symptoms. After suffering an initial mTBI, the young athlete is at a five-fold risk of sustaining another. If repeated trauma occurs after the initial injury has had a chance to fully resolve, 'second impact syndrome' may result—with tragic consequences."
      }
    },
    {
      type: "info",
      content: {
        title: "What is ImPACT?",
        description: "ImPACT (Immediate Post-Concussion Assessment and Cognitive Testing) is a computer-based neurocognitive tool established by researchers at the University of Pittsburgh. This testing evaluates visual and verbal memory, problem-solving ability, and reaction times to establish baseline scores in athletes. The evaluation is then re-administered following head injuries to follow the recovery process. Dr. Nash is a Credentialed ImPACT Consultant—the only primary care pediatrician in California with this certification.",
        image: "/images/Nash-web8.jpg",
        imagePosition: "left"
      }
    },
    {
      type: "features",
      content: {
        title: "How It Works",
        features: [
          {
            title: "Purchase Test",
            description: "Buy a baseline test for $50. You'll be emailed a link with complete instructions. The link is active for 90 days."
          },
          {
            title: "Complete at Home",
            description: "Take the test at your convenience using a laptop or desktop computer in a quiet environment. The test takes about 30 minutes."
          },
          {
            title: "Establish Baseline",
            description: "Your child's baseline scores are stored for reference. If a concussion occurs, we can compare post-injury results to guide return-to-play decisions."
          }
        ]
      }
    },
    {
      type: "info",
      content: {
        title: "Important Notes",
        description: "For athletes ages 5 to 10, baseline testing at home is not yet available. Call the office to inquire about scheduling an in-office ImPACT test for this younger age group. Baseline ImPACT testing is not covered by insurance. The $50 cost is less than the average pair of cleats or athletic shoes. In the event of a suspected concussion, the cost of office visits and follow-up testing are usually covered by insurance."
      }
    }
  ]
}
