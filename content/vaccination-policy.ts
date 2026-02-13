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
        description: "1-to-1 Pediatrics follows the standard childhood vaccination schedule recommended by the American Academy of Pediatrics."
      }
    },
    {
      type: "info",
      content: {
        title: "Our Position on Vaccinations",
        description: "At 1-to-1 Pediatrics, we firmly believe in the safety and effectiveness of childhood vaccines. Vaccines are one of the most important tools we have to protect children from serious, preventable diseases. The scientific evidence overwhelmingly supports vaccination as safe and effective. We follow the standard immunization schedule recommended by the American Academy of Pediatrics (AAP).",
        callout: true
      }
    },
    {
      type: "info",
      content: {
        title: "Recommended Vaccination Schedule",
        description: "We recommend that all children receive vaccines according to the standard schedule, which provides protection when children are most vulnerable to serious diseases. This schedule has been extensively studied and is designed to provide optimal protection while maintaining safety. Delaying or skipping vaccines leaves children vulnerable to preventable illnesses for longer than necessary.",
        image: "/images/Nash-web8.jpg",
        imagePosition: "right"
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
        description: "We encourage parents to seek reliable, evidence-based information about vaccines. Recommended resources include: The American Academy of Pediatrics (healthychildren.org) and The Immunization Action Coalition (immunize.org). These organizations provide comprehensive information based on the best available science."
      }
    },
    {
      type: "info",
      content: {
        title: "Well-Child Visit Vaccine Schedule",
        description: `<div class="overflow-x-auto">
<table class="w-full border-collapse border border-gray-300 text-sm mt-4">
<thead class="bg-teal-50">
<tr>
<th class="border border-gray-300 p-3 font-bold text-left">Age</th>
<th class="border border-gray-300 p-3 font-bold text-left">Vaccines & Screenings</th>
</tr>
</thead>
<tbody>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">Birth</td>
<td class="border border-gray-300 p-3">Hepatitis B #1</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 p-3 font-medium">2 Months</td>
<td class="border border-gray-300 p-3">
<strong>Pediarix</strong> (DTaP/IPV/Hep B) #1<br>
<strong>ActHIB</strong> (HIB meningitis) #1<br>
<strong>Prevnar-20</strong> (pneumococcal meningitis) #1<br>
<strong>Rotarix</strong> (rotavirus) #1
</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">4 Months</td>
<td class="border border-gray-300 p-3">
<strong>Pediarix</strong> (DTaP/IPV/Hep B) #2<br>
<strong>ActHIB</strong> (HIB meningitis) #2<br>
<strong>Prevnar-20</strong> (pneumococcal meningitis) #2<br>
<strong>Rotarix</strong> (rotavirus) #2
</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 p-3 font-medium">6 Months</td>
<td class="border border-gray-300 p-3">
<strong>Pediarix</strong> (DTaP/IPV/Hep B) #3<br>
<strong>ActHIB</strong> (HIB meningitis) #3<br>
<strong>Prevnar-20</strong> (pneumococcal meningitis) #3<br>
<strong>Flu Vaccine</strong> (annually, seasonal)
</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">9 Months</td>
<td class="border border-gray-300 p-3">Hemoglobin (Anemia screening)</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 p-3 font-medium">12 Months</td>
<td class="border border-gray-300 p-3">
<strong>MMR</strong> (Measles, Mumps, Rubella) #1<br>
<strong>Varivax</strong> (Chickenpox) #1
</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">15 Months</td>
<td class="border border-gray-300 p-3">
<strong>Hepatitis A</strong> #1<br>
<strong>HIB</strong> #4
</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 p-3 font-medium">18 Months</td>
<td class="border border-gray-300 p-3">
<strong>DTaP</strong> #4 (Infanrix)<br>
<strong>Prevnar-20</strong> #4
</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">2 Years</td>
<td class="border border-gray-300 p-3">Hepatitis A #2</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 p-3 font-medium">4 Years</td>
<td class="border border-gray-300 p-3">
<strong>ProQuad</strong> (MMR & Varivax combined) #2<br>
<strong>Kinrix</strong> (DTaP/IPV) #5<br>
<strong>Hemoglobin</strong> (Anemia screening)<br>
<strong>PPD</strong> (TB screening, if indicated)
</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">5 Years</td>
<td class="border border-gray-300 p-3">
Hearing Screening<br>
Vision Screening
</td>
</tr>
<tr class="bg-yellow-50">
<td class="border border-gray-300 p-3 font-medium" colspan="2"><strong>Annual Flu Vaccine</strong></td>
</tr>
<tr class="bg-yellow-50">
<td class="border border-gray-300 p-3" colspan="2">
Recommended annually for all children 6 months and older. The <strong>Flumist</strong> (nasal spray) vaccine may be given to children 2 years and older who do not have asthma or reactive airways disease.
</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
<p class="text-sm"><strong>Note:</strong> This schedule may vary based on your child's health history and specific circumstances. We follow the American Academy of Pediatrics guidelines.</p>
</div>`
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
