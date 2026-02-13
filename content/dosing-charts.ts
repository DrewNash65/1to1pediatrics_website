import { ContentPage } from "./home"

export const dosingChartsContent: ContentPage = {
  title: "Medication Dosing Charts",
  description: "Safe dosing guidelines for common over-the-counter medications",
  sections: [
    {
      type: "hero",
      content: {
        title: "Medication Dosing Charts",
        subtitle: "Safe, Clear Guidelines for Parents",
        description: "Quick reference charts for common over-the-counter medications. Always consult with your pediatrician before giving any medication to your child."
      }
    },
    {
      type: "info",
      content: {
        title: "Important Safety Information",
        description: "⚠️ ALWAYS READ LABELS CAREFULLY\n\n• These charts are guidelines only - always follow package directions\n• Never exceed maximum daily doses\n• If your child has any medical conditions or takes other medications, check with your pediatrician\n• Call our office if you have any questions: (925) 362-1861\n• For emergencies, call 911 or go to the nearest emergency room",
        callout: true
      }
    },
    {
      type: "info", 
      content: {
        title: "Tylenol (Acetaminophen) Dosing Chart",
        description: `<div class="overflow-x-auto">
<table class="w-full border-collapse border border-gray-300 text-sm">
<thead class="bg-blue-50">
<tr>
<th class="border border-gray-300 p-3 font-bold">Weight</th>
<th class="border border-gray-300 p-3 font-bold">Age Range</th>
<th class="border border-gray-300 p-3 font-bold">Infant Drops<br>(80mg/0.8mL)</th>
<th class="border border-gray-300 p-3 font-bold">Children's Liquid<br>(160mg/5mL)</th>
<th class="border border-gray-300 p-3 font-bold">Children's Chewables<br>(160mg)</th>
</tr>
</thead>
<tbody>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">12-17 lbs<br>(5.5-7.7 kg)</td>
<td class="border border-gray-300 p-3">4-11 months</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">0.8 mL</td>
<td class="border border-gray-300 p-3 text-center">Not recommended</td>
<td class="border border-gray-300 p-3 text-center">Not recommended</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 p-3 font-medium">18-23 lbs<br>(8.2-10.5 kg)</td>
<td class="border border-gray-300 p-3">12-23 months</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">1.2 mL</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">2.5 mL (1/2 tsp)</td>
<td class="border border-gray-300 p-3 text-center">Not recommended</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">24-35 lbs<br>(10.9-15.9 kg)</td>
<td class="border border-gray-300 p-3">2-3 years</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">1.6 mL</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">3.75 mL (3/4 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">1 tablet</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 p-3 font-medium">36-47 lbs<br>(16.4-21.4 kg)</td>
<td class="border border-gray-300 p-3">4-5 years</td>
<td class="border border-gray-300 p-3 text-center">Not recommended</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">5 mL (1 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">1.5 tablets</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">48-59 lbs<br>(21.8-26.8 kg)</td>
<td class="border border-gray-300 p-3">6-8 years</td>
<td class="border border-gray-300 p-3 text-center">Not recommended</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">7.5 mL (1.5 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">2 tablets</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 p-3 font-medium">60-71 lbs<br>(27.3-32.3 kg)</td>
<td class="border border-gray-300 p-3">9-10 years</td>
<td class="border border-gray-300 p-3 text-center">Not recommended</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">10 mL (2 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">2.5 tablets</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">72-95 lbs<br>(32.7-43.2 kg)</td>
<td class="border border-gray-300 p-3">11+ years</td>
<td class="border border-gray-300 p-3 text-center">Not recommended</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">12.5 mL (2.5 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-blue-600">3 tablets</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
<p class="text-sm"><strong>Give every 4-6 hours as needed.</strong> Maximum 5 doses in 24 hours. Do not exceed maximum daily dose.</p>
</div>`
      }
    },
    {
      type: "info",
      content: {
        title: "Motrin/Advil (Ibuprofen) Dosing Chart",
        description: `<div class="overflow-x-auto">
<table class="w-full border-collapse border border-gray-300 text-sm">
<thead class="bg-red-50">
<tr>
<th class="border border-gray-300 p-3 font-bold">Weight</th>
<th class="border border-gray-300 p-3 font-bold">Age Range</th>
<th class="border border-gray-300 p-3 font-bold">Infant Drops<br>(50mg/1.25mL)</th>
<th class="border border-gray-300 p-3 font-bold">Children's Liquid<br>(100mg/5mL)</th>
<th class="border border-gray-300 p-3 font-bold">Children's Chewables<br>(50mg)</th>
</tr>
</thead>
<tbody>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">12-17 lbs<br>(5.5-7.7 kg)</td>
<td class="border border-gray-300 p-3">6-11 months</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">1.25 mL</td>
<td class="border border-gray-300 p-3 text-center">Not recommended</td>
<td class="border border-gray-300 p-3 text-center">Not recommended</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 p-3 font-medium">18-23 lbs<br>(8.2-10.5 kg)</td>
<td class="border border-gray-300 p-3">12-23 months</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">1.875 mL</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">2.5 mL (1/2 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">1.5 tablets</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">24-35 lbs<br>(10.9-15.9 kg)</td>
<td class="border border-gray-300 p-3">2-3 years</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">2.5 mL</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">3.75 mL (3/4 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">2 tablets</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 p-3 font-medium">36-47 lbs<br>(16.4-21.4 kg)</td>
<td class="border border-gray-300 p-3">4-5 years</td>
<td class="border border-gray-300 p-3 text-center">Not recommended</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">5 mL (1 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">3 tablets</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">48-59 lbs<br>(21.8-26.8 kg)</td>
<td class="border border-gray-300 p-3">6-8 years</td>
<td class="border border-gray-300 p-3 text-center">Not recommended</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">7.5 mL (1.5 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">4 tablets</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 p-3 font-medium">60-71 lbs<br>(27.3-32.3 kg)</td>
<td class="border border-gray-300 p-3">9-10 years</td>
<td class="border border-gray-300 p-3 text-center">Not recommended</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">10 mL (2 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">5 tablets</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">72-95 lbs<br>(32.7-43.2 kg)</td>
<td class="border border-gray-300 p-3">11+ years</td>
<td class="border border-gray-300 p-3 text-center">Not recommended</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">15 mL (3 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-red-600">6 tablets</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
<p class="text-sm"><strong>Give every 6-8 hours as needed.</strong> Maximum 3 doses in 24 hours. Do not give to children under 6 months old. Take with food to prevent stomach upset.</p>
</div>`
      }
    },
    {
      type: "info",
      content: {
        title: "Benadryl (Diphenhydramine) Dosing Chart",
        description: `<div class="overflow-x-auto">
<table class="w-full border-collapse border border-gray-300 text-sm">
<thead class="bg-purple-50">
<tr>
<th class="border border-gray-300 p-3 font-bold">Weight</th>
<th class="border border-gray-300 p-3 font-bold">Age Range</th>
<th class="border border-gray-300 p-3 font-bold">Children's Liquid<br>(12.5mg/5mL)</th>
<th class="border border-gray-300 p-3 font-bold">Children's Chewables<br>(12.5mg)</th>
</tr>
</thead>
<tbody>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">20-24 lbs<br>(9.1-10.9 kg)</td>
<td class="border border-gray-300 p-3">2-3 years</td>
<td class="border border-gray-300 p-3 text-center font-bold text-purple-600">2.5 mL (1/2 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-purple-600">1/2 tablet</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 p-3 font-medium">25-37 lbs<br>(11.4-16.8 kg)</td>
<td class="border border-gray-300 p-3">4-5 years</td>
<td class="border border-gray-300 p-3 text-center font-bold text-purple-600">3.75 mL (3/4 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-purple-600">1 tablet</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">38-49 lbs<br>(17.3-22.3 kg)</td>
<td class="border border-gray-300 p-3">6-8 years</td>
<td class="border border-gray-300 p-3 text-center font-bold text-purple-600">5 mL (1 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-purple-600">1.5 tablets</td>
</tr>
<tr class="bg-gray-50">
<td class="border border-gray-300 p-3 font-medium">50-99 lbs<br>(22.7-45 kg)</td>
<td class="border border-gray-300 p-3">9-12 years</td>
<td class="border border-gray-300 p-3 text-center font-bold text-purple-600">7.5 mL (1.5 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-purple-600">2 tablets</td>
</tr>
<tr class="bg-white">
<td class="border border-gray-300 p-3 font-medium">100+ lbs<br>(45+ kg)</td>
<td class="border border-gray-300 p-3">13+ years</td>
<td class="border border-gray-300 p-3 text-center font-bold text-purple-600">10 mL (2 tsp)</td>
<td class="border border-gray-300 p-3 text-center font-bold text-purple-600">2-4 tablets</td>
</tr>
</tbody>
</table>
</div>

<div class="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
<p class="text-sm"><strong>Give every 6 hours as needed.</strong> Maximum 4 doses in 24 hours. Do not give to children under 2 years old without consulting your doctor. May cause drowsiness.</p>
</div>`
      }
    },
    {
      type: "info",
      content: {
        title: "When to Call Your Doctor",
        description: "Call 1-to-1 Pediatrics at (925) 362-1861 if:\n\n• Your child has a fever over 100.4°F (38°C) and is under 3 months old\n• Fever persists for more than 3 days\n• Your child is not drinking fluids or seems dehydrated\n• Symptoms are getting worse instead of better\n• You're unsure about the correct dose for your child\n• Your child has any adverse reactions to medications\n• You have any concerns about your child's health\n\nFor medical emergencies, call 911 or go to your nearest emergency room.",
        callout: true
      }
    },
    {
      type: "cta",
      content: {
        title: "Questions About Medication?",
        description: "When in doubt, call our office. We're here to help ensure your child's safety and comfort.",
        cta: {
          text: "Call (925) 362-1861",
          href: "tel:9253621861"
        }
      }
    }
  ]
}