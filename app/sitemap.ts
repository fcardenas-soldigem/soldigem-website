import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.soldigem.com.pe";
  const now = new Date();
  
  return [
    { 
      url: `${base}/`, 
      lastModified: now, 
      changeFrequency: "weekly", 
      priority: 1 
    },
    { 
      url: `${base}/es`, 
      lastModified: now, 
      changeFrequency: "weekly", 
      priority: 1 
    },
    { 
      url: `${base}/es/nosotros`, 
      lastModified: now, 
      changeFrequency: "monthly", 
      priority: 0.8 
    },
    { 
      url: `${base}/es/servicios`, 
      lastModified: now, 
      changeFrequency: "weekly", 
      priority: 0.9 
    },
    { 
      url: `${base}/es/contacto`, 
      lastModified: now, 
      changeFrequency: "monthly", 
      priority: 0.7 
    },
    { 
      url: `${base}/en`, 
      lastModified: now, 
      changeFrequency: "monthly", 
      priority: 0.6 
    },
  ];
}


