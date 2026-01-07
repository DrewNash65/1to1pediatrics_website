"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Clock, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Integrate with Formspree or create server action
    // For now, just simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 1000)
  }

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-900">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="text-sm mt-1">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-900 flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Important:</strong> Do not send urgent medical concerns through this form. Call 911 for emergencies.
                    </p>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * TODO: Integrate with Formspree or create server action for form submission
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Map and Additional Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Office Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full bg-slate-200 rounded-lg flex items-center justify-center text-slate-500">
                  <p className="text-sm">TODO: Add Google Maps embed</p>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="font-semibold">1-to-1 Pediatrics</p>
                  <p className="text-muted-foreground">
                    3070 Camino Tassajara Suite 130<br />
                    Danville, CA 94506
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:9253621861" className="text-primary hover:underline">
                        (925) 362-1861
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@1to1pediatrics.com" className="text-primary hover:underline">
                        info@1to1pediatrics.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 8:30 AM - 5:00 PM<br />
                        Closed for lunch 12:00 PM - 1:30 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
