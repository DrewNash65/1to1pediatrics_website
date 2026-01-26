import { ExternalLink, Mail } from "lucide-react"

export interface NavItem {
  title: string
  href: string
  external?: boolean
  icon?: React.ComponentType<{ className?: string }>
}

// First row navigation items
export const topRowNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Why 1-to-1?", href: "/why-1-to-1" },
  { title: "Meet & Greet", href: "/register" },
  { title: "Register", href: "/register-for-practice" },
  { title: "Dr. Nash", href: "/dr-nash" },
  { title: "Dr. Borden", href: "/dr-borden" },
  { title: "Beth Quadraccia, PA", href: "/beth-quadraccia" },
  { title: "Contact", href: "/contact" },
]

// Second row navigation items
export const bottomRowNav: NavItem[] = [
  { title: "Concussion", href: "/concussion" },
  { title: "Telemedicine", href: "/telemedicine" },
  { title: "HouseCall For Kids", href: "/housecall-for-kids" },
  { title: "HMO Patients", href: "/hmo-patients" },
  { title: "Newborn Program", href: "/newborn-program" },
  { title: "Staff", href: "/staff" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Helpful Links", href: "/helpful-links" },
]

// Keep mainNav and moreNav for backwards compatibility
export const mainNav: NavItem[] = topRowNav
export const moreNav: NavItem[] = bottomRowNav

export const externalNav: NavItem[] = [
  {
    title: "Podcast for Parents",
    href: "https://theownersmanual.podbean.com",
    external: true,
    icon: ExternalLink
  },
]

export const footerNav: NavItem[] = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Contact", href: "/contact" },
]
