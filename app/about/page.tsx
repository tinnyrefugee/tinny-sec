import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Shield, Target, BookOpen, Award, Terminal, Network, Lock, Bug } from "lucide-react"

const currentTools = [
  { name: "Kali Linux", category: "OS", progress: 75 },
  { name: "Nmap", category: "Network Scanning", progress: 60 },
  { name: "Burp Suite", category: "Web Security", progress: 45 },
  { name: "Metasploit", category: "Exploitation", progress: 30 },
  { name: "Wireshark", category: "Network Analysis", progress: 40 },
  { name: "John the Ripper", category: "Password Cracking", progress: 25 },
]

const certificationGoals = [
  {
    name: "CompTIA Security+",
    status: "In Progress",
    timeline: "Q2 2024",
    description: "Foundation certification covering security fundamentals",
  },
  {
    name: "CEH (Certified Ethical Hacker)",
    status: "Planned",
    timeline: "Q4 2024",
    description: "Comprehensive ethical hacking certification",
  },
  {
    name: "OSCP",
    status: "Long-term Goal",
    timeline: "2025",
    description: "Hands-on penetration testing certification",
  },
]

const learningAreas = [
  {
    icon: Network,
    title: "Network Security",
    description: "Understanding network protocols, scanning techniques, and network-based attacks",
  },
  {
    icon: Bug,
    title: "Web Application Security",
    description: "Learning about OWASP Top 10, SQL injection, XSS, and web app testing methodologies",
  },
  {
    icon: Terminal,
    title: "System Administration",
    description: "Linux fundamentals, command line proficiency, and system hardening techniques",
  },
  {
    icon: Lock,
    title: "Cryptography",
    description: "Understanding encryption, hashing, digital signatures, and cryptographic attacks",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-green-500/20">
            <AvatarFallback className="text-4xl font-bold bg-green-500/10 text-green-600 dark:text-green-400">
              KM
            </AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Self-taught cybersecurity enthusiast on a mission to become an ethical hacker
          </p>
        </div>

        {/* Background Story */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-green-600" />
              My Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Hi! I'm Khamis, a self-taught cybersecurity enthusiast who decided to pivot into ethical hacking and
              information security. Coming from a background in general ICT, I've always been fascinated by the
              cat-and-mouse game between security professionals and malicious actors.
            </p>
            <p>
              What started as curiosity about "how things get hacked" has evolved into a serious commitment to learning
              ethical hacking methodologies, understanding vulnerabilities, and developing the skills needed to help
              organizations secure their digital assets.
            </p>
            <p>
              This website serves as my public learning journal, where I document my progress, share discoveries, and
              hopefully help others who are on a similar path. I believe in learning in public and contributing to the
              cybersecurity community.
            </p>
          </CardContent>
        </Card>

        {/* Goals */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              Goals in Ethical Hacking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-green-600">Short-term (2024)</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Master fundamental penetration testing tools</li>
                  <li>• Complete CompTIA Security+ certification</li>
                  <li>• Build comprehensive home lab environment</li>
                  <li>• Participate in CTF competitions</li>
                  <li>• Contribute to open-source security projects</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-green-600">Long-term (2025+)</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Obtain OSCP certification</li>
                  <li>• Land first role in cybersecurity</li>
                  <li>• Specialize in web application security</li>
                  <li>• Mentor other aspiring ethical hackers</li>
                  <li>• Speak at security conferences</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Learning Areas */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Current Learning Focus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {learningAreas.map((area, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <area.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{area.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tools & Skills */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-green-600" />
              Tools I'm Learning
            </CardTitle>
            <CardDescription>My current proficiency with various cybersecurity tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {currentTools.map((tool, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-medium">{tool.name}</span>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {tool.category}
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-500">{tool.progress}%</span>
                  </div>
                  <Progress value={tool.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-green-600" />
              Certification Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {certificationGoals.map((cert, index) => (
                <div key={index} className="border-l-4 border-l-green-500/30 pl-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{cert.name}</h3>
                    <Badge
                      variant={cert.status === "In Progress" ? "default" : "secondary"}
                      className={cert.status === "In Progress" ? "bg-green-600" : ""}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{cert.description}</p>
                  <p className="text-sm font-medium text-green-600">Target: {cert.timeline}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact/Connect */}
        <Card>
          <CardHeader>
            <CardTitle>Let's Connect</CardTitle>
            <CardDescription>I'm always interested in connecting with fellow cybersecurity enthusiasts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Whether you're just starting your cybersecurity journey or you're an experienced professional, I'd love to
              connect and learn from each other. Feel free to reach out if you want to discuss security topics, share
              resources, or collaborate on projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="outline" className="cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20">
                GitHub
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20">
                LinkedIn
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20">
                Twitter
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20">
                Email
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
