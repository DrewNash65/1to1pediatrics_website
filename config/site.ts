export const siteConfig = {
  name: "1-to-1 Pediatrics",
  description: "Hometown Care for Your Child - Providing personalized pediatric care in Danville, California",
  url: "https://www.1to1pediatrics.com",
  ogImage: "/og-image.jpg",
  links: {
    phone: "(925) 362-1861",
    fax: "(925) 838-6329",
    email: "info@1to1pediatrics.com",
    address: {
      street: "911 San Ramon Valley Boulevard",
      suite: "Suite 100",
      city: "Danville",
      state: "CA",
      zip: "94526"
    }
  },
  hours: {
    weekdays: "Mon-Wed: 9:00 AM - 12:30 PM, 2:00 PM - 5:00 PM",
    notes: "Thurs-Friday: 9:00 AM - 2:00 PM"
  }
}

export type SiteConfig = typeof siteConfig
