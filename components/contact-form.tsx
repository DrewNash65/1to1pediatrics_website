"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Schedule a Visit Text */}
          <div>
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold">Schedule a Visit</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Interested in joining our practice? Call us to schedule a complimentary "Meet and Greet" 
              appointment with Dr. Nash, Dr. Borden, or Beth Quadraccia, PA. This is a great opportunity 
              to tour our office, meet our team, and learn more about our practice model.
            </p>
          </div>

          {/* Office Location Card */}
          <Card>
            <CardHeader>
              <CardTitle>Office Location</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.8544656826283!2d-121.99860018468234!3d37.82151897975334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ff326c073b84b%3A0x8b8b8b8b8b8b8b8b!2s911%20San%20Ramon%20Valley%20Blvd%2C%20Danville%2C%20CA%2094526!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="1-to-1 Pediatrics Location"
                className="sm:h-[300px]"
              ></iframe>
              <div className="mt-4 space-y-2 text-sm">
                <p className="font-semibold">1-to-1 Pediatrics</p>
                <p className="text-muted-foreground">
                  911 San Ramon Valley Boulevard<br />
                  Suite 100<br />
                  Danville, CA 94526
                </p>
                <p className="text-muted-foreground mt-3">
                  Conveniently located in the San Ramon Valley for easy access from surrounding communities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
