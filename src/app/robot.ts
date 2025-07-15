import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api", "/admin", "/private"],
            },
        ],
        sitemap: "https://xfinance.com/sitemap.xml",
    }
}