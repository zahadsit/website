// app/sitemap.ts
import { MetadataRoute } from 'next'
import { blogs } from './blogs/data'
import { services } from '@/data/services'
import { businessSetup } from '@/data/businessSetup'
import { accountingServices } from '@/data/accounting'
import { taxation } from '@/data/taxation'
import { assurance } from '@/data/assurance'
import { partners } from '@/data'
import { setupGuides } from '@/data'

// Cache the sitemap generation for better performance
let cachedSitemap: MetadataRoute.Sitemap | null = null

export default function sitemap(): MetadataRoute.Sitemap {
  // Return cached sitemap if available (reduces computation)
  if (cachedSitemap) {
    return cachedSitemap
  }

  const baseUrl = 'https://www.zahads.com'
  const currentDate = new Date()

  // Helper function to parse dates safely
  const parseDate = (dateString: string | undefined): Date => {
    if (!dateString) return currentDate

    try {
      let date: Date

      if (dateString.includes('/')) {
        // Format: "24/06/2025" -> convert to "2025-06-24"
        const [day, month, year] = dateString.split('/')
        date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
      } else {
        date = new Date(dateString)
      }

      // Validate the date
      return isNaN(date.getTime()) ? currentDate : date
    } catch (error) {
      return currentDate
    }
  }

  // Static pages with optimized priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9, // Increased priority for contact page
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly', // FAQ pages often update
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'daily', // Blog listing updates frequently
      priority: 0.9,
    },
    {
      url: `${baseUrl}/start-a-business`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/get-business-license-in-uae`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/trade-license`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  // Service pages - batch processing for better performance
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Business setup pages
  const businessSetupPages: MetadataRoute.Sitemap = businessSetup.map((setup) => ({
    url: `${baseUrl}/business-setup/${setup.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Accounting pages
  const accountingPages: MetadataRoute.Sitemap = accountingServices.map((accounting) => ({
    url: `${baseUrl}/accounting/${accounting.link}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Taxation pages
  const taxationPages: MetadataRoute.Sitemap = taxation.map((tax) => ({
    url: `${baseUrl}/taxation/${tax.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Assurance pages
  const assurancePages: MetadataRoute.Sitemap = assurance.map((assuranceItem) => ({
    url: `${baseUrl}/assurance/${assuranceItem.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Partner pages
  const partnerPages: MetadataRoute.Sitemap = partners.map((partner) => ({
    url: `${baseUrl}/partners/${partner.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  // Guide pages
  const guidePages: MetadataRoute.Sitemap = setupGuides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Blog pages - optimized date parsing and sorting
  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => {
    const lastModified = parseDate(blog.date)

    return {
      url: `${baseUrl}/blogs/${blog.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const, // Blog content may get updates
      priority: blog.featured ? 0.8 : 0.6, // Higher priority for featured blogs
    }
  })

  // Combine all pages (no need to reverse blogs anymore)
  const allPages = [
    ...staticPages,
    ...servicePages,
    ...businessSetupPages,
    ...accountingPages,
    ...taxationPages,
    ...assurancePages,
    ...partnerPages,
    ...guidePages,
    ...blogPages,
  ]

  // Cache the result
  cachedSitemap = allPages

  return allPages
}