import { ExternalLink, Mail } from "lucide-react"

export interface NavItem {
  title: string
  href: string
  external?: boolean
  icon?: React.ComponentType<{ className?: string }>
}

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Concussion", href: "/concussion" },
  { title: "Why 1-to-1?", href: "/why-1-to-1" },
  { title: "Telemedicine", href: "/telemedicine" },
  { title: "Register", href: "/register" },
  { title: "HMO Patients", href: "/hmo-patients" },
  { title: "Dr. Nash", href: "/dr-nash" },
  { title: "Dr. Borden", href: "/dr-borden" },
  { title: "Contact", href: "/contact" },
  { title: "Newborn Program", href: "/newborn-program" },
  { title: "Staff", href: "/staff" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Helpful Links", href: "/helpful-links" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Tylenol Note", href: "/tylenol-note" },
  { title: "Vaccination Policy", href: "/vaccination-policy" },
]

export const externalNav: NavItem[] = [
  {
    title: "Podcast for Parents",
    href: "https://theownersmanual.podbean.com",
    external: true,
    icon: ExternalLink
  },
  {
    title: "Office",
    href: "https://www.DrNashOnline.com",
    external: true,
    icon: ExternalLink
  },
]

export const footerNav: NavItem[] = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Contact", href: "/contact" },
]
