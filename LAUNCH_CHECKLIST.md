# Launch Checklist

This checklist covers all technical and content items that should be completed before launching the new website.

## Pre-Launch Checklist

### Content Review
- [ ] Review all pages for accuracy against current practice information
- [ ] Verify phone numbers, address, and email are correct
- [ ] Verify office hours are current
- [ ] Review provider bios for accuracy
- [ ] Check all testimonials are still appropriate and have permissions
- [ ] Verify external links (Podcast, DrNashOnline) are correct
- [ ] Review and update announcement banner content
- [ ] Verify HMO fee schedule is current
- [ ] Check all medical information is still accurate
- [ ] Review privacy policy for compliance with current regulations

### Images & Media
- [ ] Add hero image for home page
- [ ] Add Dr. Nash photo
- [ ] Add Dr. Borden photo
- [ ] Add staff photos (Pam, Karla, Kasie)
- [ ] Add office photos if desired
- [ ] Create and add OpenGraph image for social sharing
- [ ] Optimize all images (WebP format recommended)
- [ ] Add alt text to all images for accessibility
- [ ] Add favicon (create from logo if available)

### Contact Form
- [ ] Choose form solution (Formspree recommended)
- [ ] Set up Formspree account and create form
- [ ] Update contact form with Formspree endpoint
- [ ] Test form submission
- [ ] Set up email notifications
- [ ] OR create server action with email service (Resend/SendGrid)
- [ ] Add disclaimer about not sending urgent medical concerns
- [ ] Test form on mobile and desktop

### SEO & Analytics
- [ ] Verify page titles are descriptive
- [ ] Verify meta descriptions for all pages
- [ ] Add Google Analytics (if desired)
- [ ] Add Google Tag Manager (if needed)
- [ ] Verify sitemap is accessible at `/sitemap.xml`
- [ ] Verify robots.txt is accessible at `/robots.txt`
- [ ] Test OpenGraph tags on social media preview tool
- [ ] Add structured data (JSON-LD) for local business
- [ ] Verify mobile-friendliness with Google's tool

### Functionality Testing
- [ ] Test all navigation links
- [ ] Test all external links open in new tab
- [ ] Test mobile menu functionality
- [ ] Test announcement banner dismiss functionality
- [ ] Test contact form validation
- [ ] Test all phone number links (`tel:`)
- [ ] Test all email links (`mailto:`)
- [ ] Test responsive design on multiple devices
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test keyboard navigation
- [ ] Test screen reader accessibility

### Performance
- [ ] Run Lighthouse audit (aim for 90+ in all categories)
- [ ] Optimize any large images
- [ ] Check for unused CSS/JS
- [ ] Verify font loading is optimal
- [ ] Test on slow 3G connection
- [ ] Check Core Web Vitals

### Security & Privacy
- [ ] Review HIPAA compliance considerations
- [ ] Ensure no PHI is sent via email/contact form
- [ ] Add disclaimer about not sending medical info through contact form
- [ ] Review privacy policy with legal counsel if needed
- [ ] Verify SSL certificate will be active (Vercel provides this)

## Deployment to Vercel

### Initial Deployment (Staging/Preview)
1. [ ] Push code to GitHub repository
2. [ ] Connect repository to Vercel
3. [ ] Configure build settings (Next.js auto-detected)
4. [ ] Deploy to preview environment
5. [ ] Test all functionality on preview URL
6. [ ] Share preview URL for review

### Production Deployment
**NOTE: Do NOT connect custom domain until ready to go live. Use Vercel's `.vercel.app` domain for testing.**

1. [ ] Complete all pre-launch items above
2. [ ] Get final approval on content and design
3. [ ] Schedule launch date/time
4. [ ] Plan for downtime (if any) during transition
5. [ ] Prepare announcement about new website

### Custom Domain (ONLY WHEN READY FOR LAUNCH)
**IMPORTANT**: DNS changes are permanent and will affect the live site. Only do this when ready to fully switch over.

1. [ ] Backup existing Weebly site (if needed)
2. [ ] Update DNS records:
   - Add A record pointing to Vercel's IP
   - OR update CNAME to point to Vercel
3. [ ] Configure custom domain in Vercel dashboard
4. [ ] Wait for DNS propagation (can take 24-48 hours)
5. [ ] Verify SSL certificate is active
6. [ ] Test all functionality on custom domain
7. [ ] Set up automatic deployments from main branch

### Post-Launch
- [ ] Monitor for errors or issues
- [ ] Check analytics data is collecting
- [ ] Test contact form submissions
- [ ] Verify all email notifications are received
- [ ] Update any marketing materials with new URL
- [ ] Announce new website to patients
- [ ] Monitor search engine indexing
- [ ] Check for any broken links in Google Search Console

## Maintenance

### Regular Tasks
- [ ] Check and update announcement banners as needed
- [ ] Review and update content quarterly
- [ ] Update provider information if anything changes
- [ ] Monitor contact form submissions
- [ ] Review analytics monthly
- [ ] Check for broken links quarterly
- [ ] Update site if any policies or services change

### Content Updates
- [ ] Add seasonal announcements (flu shots, etc.)
- [ ] Update hours if they change
- [ ] Add new testimonials as received
- [ ] Update staff information if team changes
- [ ] Add new services as offered

## Emergency Contacts

- **Vercel Support**: https://vercel.com/support
- **Next.js Documentation**: https://nextjs.org/docs
- **GitHub Repository**: https://github.com/DrewNash65/1to1pediatrics_website

## Notes

- **TODO items in code** are marked with comments and should be addressed before or shortly after launch
- **Images**: Use Next.js Image component for optimization
- **Form integration**: Choose Formspree for simplicity or build custom server action
- **Analytics**: Consider privacy-focused alternatives if needed
- **Backups**: Vercel maintains deployment history for rollbacks if needed
