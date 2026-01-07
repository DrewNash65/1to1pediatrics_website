export const siteConfig = {
  name: "1-to-1 Pediatrics",
  description: "Hometown Care for Your Child - Providing personalized pediatric care in Danville, California",
  url: "https://www.1to1pediatrics.com",
  ogImage: "/og-image.jpg",
  links: {
    phone: "(925) 362-1861",
    fax: "(925) 362-1862",
    email: "info@1to1pediatrics.com",
    address: {
      street: "3070 Camino Tassajara Suite 130",
      city: "Danville",
      state: "CA",
      zip: "94506"
    }
  },
  hours: {
    weekdays: "Monday - Friday: 8:30 AM - 5:00 PM",
    notes: "Closed for lunch 12:00 PM - 1:30 PM"
  }
}

export type SiteConfig = typeof siteConfig
