import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock blog posts data (expanded)
const blogPosts = [
  {
    id: 1,
    title: "Setting Up My First Penetration Testing Lab",
    excerpt:
      "Building a safe environment to practice ethical hacking techniques using VirtualBox and Kali Linux. This comprehensive guide covers everything from initial setup to configuring vulnerable machines.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Lab Setup", "Kali Linux", "Beginner", "VirtualBox"],
  },
  {
    id: 2,
    title: "Understanding SQL Injection: Theory and Practice",
    excerpt:
      "Deep dive into SQL injection vulnerabilities, how they work, and how to prevent them in web applications. Includes practical examples and mitigation strategies.",
    date: "2024-01-12",
    readTime: "8 min read",
    tags: ["Web Security", "SQL Injection", "OWASP", "Vulnerabilities"],
  },
  {
    id: 3,
    title: "My Journey into Cybersecurity: Week 1 Reflections",
    excerpt:
      "First week of dedicated cybersecurity learning - resources, challenges, and initial impressions. What I learned and what surprised me the most.",
    date: "2024-01-08",
    readTime: "4 min read",
    tags: ["Journey", "Learning", "Reflection", "Beginner"],
  },
  {
    id: 4,
    title: "Network Scanning with Nmap: A Beginner's Guide",
    excerpt:
      "Learning the fundamentals of network reconnaissance using Nmap. From basic scans to advanced techniques for ethical penetration testing.",
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["Network Security", "Nmap", "Reconnaissance", "Tools"],
  },
  {
    id: 5,
    title: "Setting Up Burp Suite for Web Application Testing",
    excerpt:
      "Complete walkthrough of configuring Burp Suite Community Edition for web application security testing. Proxy setup, certificate installation, and basic usage.",
    date: "2024-01-02",
    readTime: "7 min read",
    tags: ["Web Security", "Burp Suite", "Tools", "Setup"],
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Documenting my cybersecurity learning journey, one post at a time.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search posts..." className="pl-10" />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500/20 hover:border-l-green-500"
            >
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs hover:bg-green-100 hover:text-green-800 dark:hover:bg-green-900 dark:hover:text-green-200 transition-colors cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400">
            More posts coming soon as I continue my cybersecurity journey!
          </p>
        </div>
      </div>
    </div>
  )
}
