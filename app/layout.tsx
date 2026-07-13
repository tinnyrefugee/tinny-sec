import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EthicalHacker - Cybersecurity Learning Journey",
  description:
    "Documenting my path in ethical hacking & cybersecurity. Self-taught journey, lab setups, and learning resources.",
  keywords: ["cybersecurity", "ethical hacking", "penetration testing", "infosec", "security"],
  authors: [{ name: "Khamis Michael" }],
  creator: "Khamis Michael",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ethicalhacker.dev",
    title: "EthicalHacker - Cybersecurity Learning Journey",
    description: "Documenting my path in ethical hacking & cybersecurity",
    siteName: "EthicalHacker",
  },
  twitter: {
    card: "summary_large_image",
    title: "EthicalHacker - Cybersecurity Learning Journey",
    description: "Documenting my path in ethical hacking & cybersecurity",
    creator: "@khamismichael",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
