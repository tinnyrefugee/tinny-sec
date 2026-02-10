import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"

// Mock blog posts data
const recentPosts = [
  {
    id: 1,
    title: "Setting Up My First Penetration Testing Lab",
    excerpt: "Building a safe environment to practice ethical hacking techniques using VirtualBox and Kali Linux.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Lab Setup", "Kali Linux", "Beginner"],
  },
  {
    id: 2,
    title: "Understanding SQL Injection: Theory and Practice",
    excerpt:
      "Deep dive into SQL injection vulnerabilities, how they work, and how to prevent them in web applications.",
    date: "2024-01-12",
    readTime: "8 min read",
    tags: ["Web Security", "SQL Injection", "OWASP"],
  },
  {
    id: 3,
    title: "My Journey into Cybersecurity: Week 1 Reflections",
    excerpt: "First week of dedicated cybersecurity learning - resources, challenges, and initial impressions.",
    date: "2024-01-08",
    readTime: "4 min read",
    tags: ["Journey", "Learning", "Reflection"],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Avatar className="w-24 h-24 mx-auto mb-6 ring-2 ring-green-500/20">
              <AvatarFallback className="text-2xl font-bold bg-green-500/10 text-green-600 dark:text-green-400">
                KM
              </AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Khamis Michael
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Documenting my path in ethical hacking & cybersecurity
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto mb-8">
              Self-taught cybersecurity enthusiast sharing my learning journey, lab setups, and discoveries in the world
              of ethical hacking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/blog">
                  Read My Blog <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 px-4 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
            <Button asChild variant="ghost">
              <Link href="/blog" className="text-green-600 hover:text-green-700">
                View All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500/20 hover:border-l-green-500"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
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
                  <CardTitle className="group-hover:text-green-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Links</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-600">Learning Resources</CardTitle>
                <CardDescription>Tools, platforms, and resources I'm using in my cybersecurity journey</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/resources">Explore Resources</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-600">Lab Setup</CardTitle>
                <CardDescription>My current setup, VMs, and tools for practicing ethical hacking</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/setup">View Setup</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
