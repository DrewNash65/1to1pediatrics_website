"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { topRowNav, bottomRowNav, externalNav } from "@/config/navigation"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Logo and Mobile Toggle */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/images/1_to_1_logo.png" 
              alt="1-to-1 Pediatrics Logo" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">1-to-1 Pediatrics</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Hometown Care for Your Child</span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-md hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Desktop CTA Button */}
          <div className="hidden xl:flex items-center space-x-4">
            <a href="tel:9253621861" className="text-primary text-sm font-medium hover:underline">
              (925) 362-1861
            </a>
            <Link href="/contact">
              <Button size="sm" className="font-medium">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Two-Row Navigation */}
      <div className="hidden xl:block border-t bg-slate-50/50">
        <div className="container mx-auto px-4">
          {/* Top Row */}
          <nav className="flex items-center justify-center space-x-1 py-2">
            {topRowNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-primary hover:bg-white rounded-md"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          
          {/* Bottom Row */}
          <nav className="flex items-center justify-center space-x-1 py-2 border-t">
            {bottomRowNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-primary hover:bg-white rounded-md"
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
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-primary hover:bg-white rounded-md"
                >
                  {item.title}
                  {Icon && <Icon className="h-3 w-3" />}
                </a>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Navigation Grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[...topRowNav, ...bottomRowNav].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block p-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-accent rounded-md text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            
            {/* External Links */}
            <div className="border-t pt-4 mb-4">
              <div className="grid grid-cols-1 gap-2">
                {externalNav.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-accent rounded-md"
                    >
                      {item.title}
                      {Icon && <Icon className="h-3 w-3" />}
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="border-t pt-4 space-y-3">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full font-medium">
                  Contact Us
                </Button>
              </Link>
              <a href="tel:9253621861">
                <Button size="sm" variant="outline" className="w-full font-medium">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (925) 362-1861
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
