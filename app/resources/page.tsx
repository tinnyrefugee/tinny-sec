import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Globe, Users, Terminal, Shield, ExternalLink, Star } from "lucide-react"

const learningPlatforms = [
  {
    name: "TryHackMe",
    description: "Gamified cybersecurity learning with hands-on challenges",
    category: "Interactive Learning",
    rating: 5,
    url: "https://tryhackme.com",
    free: true,
  },
  {
    name: "Hack The Box",
    description: "Advanced penetration testing labs and challenges",
    category: "Practical Labs",
    rating: 5,
    url: "https://hackthebox.com",
    free: false,
  },
  {
    name: "Cybrary",
    description: "Comprehensive cybersecurity courses and career paths",
    category: "Video Courses",
    rating: 4,
    url: "https://cybrary.it",
    free: true,
  },
  {
    name: "Professor Messer",
    description: "Free Security+ training videos and study materials",
    category: "Certification Prep",
    rating: 5,
    url: "https://professormesser.com",
    free: true,
  },
]

const books = [
  {
    title: "The Web Application Hacker's Handbook",
    author: "Dafydd Stuttard, Marcus Pinto",
    description: "Comprehensive guide to web application security testing",
    category: "Web Security",
    difficulty: "Intermediate",
  },
  {
    title: "Penetration Testing: A Hands-On Introduction to Hacking",
    author: "Georgia Weidman",
    description: "Practical introduction to penetration testing methodologies",
    category: "Penetration Testing",
    difficulty: "Beginner",
  },
  {
    title: "The Hacker Playbook 3",
    author: "Peter Kim",
    description: "Practical guide to penetration testing with real-world scenarios",
    category: "Penetration Testing",
    difficulty: "Intermediate",
  },
  {
    title: "Black Hat Python",
    author: "Justin Seitz",
    description: "Python programming for hackers and pentesters",
    category: "Programming",
    difficulty: "Intermediate",
  },
]

const tools = [
  {
    name: "Kali Linux",
    description: "Debian-based Linux distribution for penetration testing",
    category: "Operating System",
    type: "Free",
    useCase: "Primary pentesting OS",
  },
  {
    name: "Burp Suite Community",
    description: "Web application security testing platform",
    category: "Web Security",
    type: "Free/Paid",
    useCase: "Web app testing",
  },
  {
    name: "Nmap",
    description: "Network discovery and security auditing tool",
    category: "Network Scanning",
    type: "Free",
    useCase: "Network reconnaissance",
  },
  {
    name: "Metasploit Community",
    description: "Penetration testing framework",
    category: "Exploitation",
    type: "Free/Paid",
    useCase: "Vulnerability exploitation",
  },
  {
    name: "Wireshark",
    description: "Network protocol analyzer",
    category: "Network Analysis",
    type: "Free",
    useCase: "Traffic analysis",
  },
  {
    name: "OWASP ZAP",
    description: "Web application security scanner",
    category: "Web Security",
    type: "Free",
    useCase: "Automated web scanning",
  },
]

const communities = [
  {
    name: "r/cybersecurity",
    platform: "Reddit",
    description: "Active community discussing cybersecurity news and career advice",
    members: "1M+",
  },
  {
    name: "InfoSec Twitter",
    platform: "Twitter",
    description: "Follow security researchers and stay updated on latest threats",
    members: "Active",
  },
  {
    name: "OWASP Local Chapters",
    platform: "In-Person/Virtual",
    description: "Local meetups and conferences focused on application security",
    members: "Global",
  },
  {
    name: "DEF CON Groups",
    platform: "In-Person",
    description: "Local hacker meetups in cities worldwide",
    members: "Global",
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Tools, platforms, and resources I'm using in my cybersecurity journey
          </p>
        </div>

        {/* Learning Platforms */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Globe className="h-6 w-6 text-green-600" />
            Learning Platforms
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {learningPlatforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {platform.name}
                        {platform.free && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          >
                            Free
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-1">{platform.description}</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < platform.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{platform.category}</Badge>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={platform.url} target="_blank" rel="noopener noreferrer">
                        Visit <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Books */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-green-600" />
            Essential Books
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {books.map((book, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{book.title}</CardTitle>
                  <CardDescription>by {book.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{book.description}</p>
                  <div className="flex gap-2">
                    <Badge variant="outline">{book.category}</Badge>
                    <Badge
                      variant="secondary"
                      className={
                        book.difficulty === "Beginner"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : book.difficulty === "Intermediate"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }
                    >
                      {book.difficulty}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="h-6 w-6 text-green-600" />
            Essential Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between">
                    {tool.name}
                    <Badge
                      variant={tool.type === "Free" ? "secondary" : "outline"}
                      className={
                        tool.type === "Free" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : ""
                      }
                    >
                      {tool.type}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Category:</span>
                      <Badge variant="outline" className="text-xs">
                        {tool.category}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Use Case:</span>
                      <span className="text-gray-700 dark:text-gray-300">{tool.useCase}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Communities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="h-6 w-6 text-green-600" />
            Communities & Networking
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {communities.map((community, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {community.name}
                    <Badge variant="outline">{community.platform}</Badge>
                  </CardTitle>
                  <CardDescription>{community.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Members: {community.members}</span>
                    <Button variant="ghost" size="sm">
                      Join Community <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="h-6 w-6 text-green-600" />
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Vulnerable Applications</CardTitle>
                <CardDescription>Practice environments for ethical hacking</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• DVWA (Damn Vulnerable Web Application)</li>
                  <li>• Metasploitable 2 & 3</li>
                  <li>• VulnHub VMs</li>
                  <li>• OverTheWire Wargames</li>
                  <li>• PentesterLab</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Certification Resources</CardTitle>
                <CardDescription>Study materials for cybersecurity certifications</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• CompTIA Security+ Study Guide</li>
                  <li>• CEH Official Cert Guide</li>
                  <li>• OSCP PWK Course Materials</li>
                  <li>• CISSP Official Study Guide</li>
                  <li>• Practice exams and labs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
