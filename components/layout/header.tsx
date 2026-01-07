"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { mainNav, externalNav } from "@/config/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">1-to-1 Pediatrics</span>
              <span className="text-xs text-muted-foreground">Hometown Care for Your Child</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
            {externalNav.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.title}
                  {Icon && <Icon className="h-3 w-3" />}
                </a>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button size="sm" className="font-medium">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            {externalNav.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.title}
                  {Icon && <Icon className="h-3 w-3" />}
                </a>
              )
            })}
            <div className="pt-4 space-y-2">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full font-medium">
                  Contact
                </Button>
              </Link>
              <a href="tel:9253621861" className="block">
                <Button size="sm" variant="outline" className="w-full font-medium">
                  <Phone className="mr-2 h-4 w-4" />
                  (925) 362-1861
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
