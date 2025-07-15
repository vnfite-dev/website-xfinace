import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // dùng async để sau này có thể gọi API hoặc Dynamic Routes
    return [
        {
            url: "https://xfinance.com",
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 1.0,
        },
        {
            url: "https://xfinance.com/about",
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.9,
        },
    ]
}