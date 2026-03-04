import Link from "next/link"
import { siteConfig } from "@/config/site"
import { footerNav } from "@/config/navigation"
import { Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/1_to_1_logo.png" 
                alt="1-to-1 Pediatrics Logo" 
                className="h-8 w-auto"
              />
              <h3 className="font-bold text-lg">1-to-1 Pediatrics</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Hometown Care for Your Child. Personalized pediatric care with an old-school philosophy.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:9253621861" className="text-muted-foreground hover:text-primary">
                    {siteConfig.links.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">
                    {siteConfig.links.address.street}<br />
                    {siteConfig.links.address.suite}<br />
                    {siteConfig.links.address.city}, {siteConfig.links.address.state} {siteConfig.links.address.zip}
                  </p>
                </div>
              </li>

            </ul>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Office Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">
                    {siteConfig.hours.weekdays}
                  </p>
                  <p className="text-muted-foreground mt-1">
                    {siteConfig.hours.notes}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 1-to-1 Pediatrics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
