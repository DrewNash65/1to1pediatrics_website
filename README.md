# 1-to-1 Pediatrics Website

A modern, responsive website for 1-to-1 Pediatrics, a concierge pediatric practice in Danville, California. Built with Next.js 15, TypeScript, TailwindCSS, and shadcn/ui.

## Features

- **Modern Design**: Clean, warm, and premium aesthetic with excellent readability
- **Mobile-First**: Fully responsive design that works beautifully on all devices
- **Fast Performance**: Built on Next.js 15 with App Router for optimal performance
- **Accessible**: WCAG-compliant with semantic HTML and ARIA labels
- **Easy Content Management**: Content stored in TypeScript files for easy editing
- **SEO Optimized**: Proper metadata, sitemap, and robots.txt configuration
- **Announcement System**: Configurable announcement banners for updates

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Components**: shadcn/ui (Radix UI primitives)
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DrewNash65/1to1pediatrics_website.git
cd 1to1pediatrics_website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
1to1pediatrics_website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── sitemap.ts         # Sitemap configuration
│   ├── robots.ts          # Robots.txt configuration
│   ├── concussion/        # Concussion page
│   ├── why-1-to-1/        # Why 1-to-1 page
│   ├── telemedicine/      # Telemedicine page
│   ├── register/          # Register page
│   ├── hmo-patients/      # HMO Patients page
│   ├── dr-nash/           # Dr. Nash bio page
│   ├── dr-borden/         # Dr. Borden bio page
│   ├── contact/           # Contact page
│   ├── newborn-program/   # Newborn Program page
│   ├── staff/             # Staff page
│   ├── testimonials/      # Testimonials page
│   ├── helpful-links/     # Helpful Links page
│   ├── privacy-policy/    # Privacy Policy page
│   ├── tylenol-note/      # Tylenol Note page
│   └── vaccination-policy/ # Vaccination Policy page
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── sections/         # Page section components
│   ├── ui/               # shadcn/ui components
│   └── contact-form.tsx  # Contact form component
├── content/              # Page content (TypeScript files)
├── config/               # Configuration files
│   ├── site.ts          # Site information
│   ├── navigation.ts    # Navigation configuration
│   └── announcement.ts  # Announcement banner configuration
├── lib/                 # Utility functions
└── public/              # Static assets
```

## Editing Content

### Page Content

All page content is stored in the `/content` directory as TypeScript files. To edit a page:

1. Open the corresponding file in `/content`
2. Edit the content in the `content` object
3. Save the file - changes will appear immediately

For example, to edit the home page:
```typescript
// content/home.ts
export const homeContent: ContentPage = {
  title: "1-to-1 Pediatrics",
  description: "Your description here",
  sections: [
    {
      type: "hero",
      content: {
        title: "Your Title Here",
        // ... edit hero content
      }
    },
    // ... more sections
  ]
}
```

### Navigation

To update navigation links, edit `config/navigation.ts`:
```typescript
export const mainNav: NavItem[] = [
  { title: "Page Title", href: "/page-url" },
  // ... add or remove nav items
]
```

### Site Information

To update site name, description, contact info, etc., edit `config/site.ts`:
```typescript
export const siteConfig = {
  name: "1-to-1 Pediatrics",
  description: "Your description",
  links: {
    phone: "(925) 362-1861",
    // ... update contact info
  }
}
```

### Announcement Banner

To show/hide or edit announcements, edit `config/announcement.ts`:
```typescript
export const announcements: Announcement[] = [
  {
    id: "unique-id",
    title: "Announcement Title",
    message: "Your announcement message",
    active: true,  // Set to false to hide
    type: "success",
    dismissible: true
  }
]
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure everything
4. Click Deploy

### Environment Variables

No environment variables are required for basic functionality. For the contact form, you'll want to integrate either:

- **Formspree** (recommended for simplicity)
- **Custom server action** with email service

### Custom Domain

**Note**: DNS and domain configuration should only be done when ready to go live. For development/preview, Vercel will provide a `.vercel.app` domain.

## Contact Form Integration

The contact form currently simulates submission. To integrate:

### Option 1: Formspree (Recommended)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update `components/contact-form.tsx`:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })

  // ... handle response
}
```

### Option 2: Server Action

Create a server action in `app/actions.ts` and integrate with your email service (Resend, SendGrid, etc.).

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create content in `/content/your-page.ts`
2. Create page at `/app/your-page/page.tsx`:
```typescript
import { yourPageContent } from "@/content/your-page"
import { PageBuilder, buildPageMetadata } from "@/lib/page-builder"

export const metadata = buildPageMetadata(yourPageContent)

export default function YourPage() {
  return <PageBuilder content={yourPageContent} />
}
```
3. Add to navigation in `config/navigation.ts`

### Adding New Sections

Create new section components in `/components/sections/` and add them to the page builder in `/lib/page-builder.tsx`.

## Accessibility

This site follows WCAG 2.1 AA guidelines:
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast
- Focus indicators

## Performance

Optimizations included:
- Next.js Image optimization
- Automatic code splitting
- Font optimization with next/font
- Minimal JavaScript bundle size
- CSS-in-JS with TailwindCSS

## Support

For questions or issues:
- Open an issue on GitHub
- Contact the development team

## License

Copyright © 2025 1-to-1 Pediatrics. All rights reserved.
