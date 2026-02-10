import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"

// Mock blog post data
const blogPost = {
  id: 1,
  title: "Setting Up My First Penetration Testing Lab",
  content: `
# Setting Up My First Penetration Testing Lab

As I begin my journey into ethical hacking and cybersecurity, one of the first things I needed was a safe, isolated environment to practice. Here's how I set up my first penetration testing lab using VirtualBox and Kali Linux.

## Why You Need a Lab Environment

Before diving into any hands-on cybersecurity work, it's crucial to have a controlled environment where you can:

- Practice techniques safely without affecting real systems
- Learn tools and methodologies in isolation
- Make mistakes without consequences
- Document your learning process

## My Setup Overview

Here's what I'm currently running:

### Host System
- **OS**: Windows 11 Pro
- **RAM**: 16GB (minimum recommended for running multiple VMs)
- **Storage**: 500GB SSD with 200GB dedicated to VMs
- **Processor**: Intel i7 (virtualization enabled in BIOS)

### Virtualization Platform
I chose **VirtualBox** for several reasons:
- Free and open-source
- Cross-platform compatibility
- Good community support
- Sufficient for learning purposes

## Step-by-Step Setup

### 1. Installing VirtualBox

\`\`\`bash
# Download from official website
# https://www.virtualbox.org/wiki/Downloads

# Enable virtualization in BIOS if not already enabled
# This varies by manufacturer but usually found in CPU settings
\`\`\`

### 2. Setting Up Kali Linux

Kali Linux is the go-to distribution for penetration testing, packed with hundreds of security tools.

\`\`\`bash
# Download Kali Linux VirtualBox image
wget https://cdimage.kali.org/kali-2024.1/kali-linux-2024.1-virtualbox-amd64.7z

# Extract the 7z file
7z x kali-linux-2024.1-virtualbox-amd64.7z
\`\`\`

**VM Configuration:**
- RAM: 4GB (minimum 2GB)
- Storage: 80GB dynamic
- Network: NAT + Host-only adapter
- Enable 3D acceleration

### 3. Vulnerable Machines

To practice on, I set up several intentionally vulnerable VMs:

#### Metasploitable 2
\`\`\`bash
# Classic vulnerable Linux system
# Great for learning basic exploitation
wget https://sourceforge.net/projects/metasploitable/files/Metasploitable2/metasploitable-linux-2.0.0.zip
\`\`\`

#### DVWA (Damn Vulnerable Web Application)
\`\`\`bash
# Web application with common vulnerabilities
# Perfect for learning web app security
git clone https://github.com/digininja/DVWA.git
\`\`\`

## Network Configuration

Setting up proper network isolation is crucial:

### Host-Only Network
- Allows VMs to communicate with each other
- Isolated from the internet (safer for malware analysis)
- Host can access VMs for management

### NAT Network
- Provides internet access when needed
- Useful for downloading tools and updates
- Can be disabled for complete isolation

\`\`\`bash
# VirtualBox network setup
VBoxManage natnetwork add --netname labnet --network "192.168.100.0/24" --enable
\`\`\`

## Essential Tools and Initial Setup

Once Kali was running, I updated the system and familiarized myself with key tools:

\`\`\`bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install additional tools
sudo apt install -y terminator code-oss

# Configure SSH (disabled by default in Kali)
sudo systemctl enable ssh
sudo systemctl start ssh
\`\`\`

### Key Tools I'm Learning:
- **Nmap**: Network discovery and security auditing
- **Burp Suite**: Web application security testing
- **Metasploit**: Penetration testing framework
- **Wireshark**: Network protocol analyzer
- **John the Ripper**: Password cracking tool

## Documentation and Note-Taking

I set up a systematic approach to document my learning:

\`\`\`bash
# Create organized directory structure
mkdir -p ~/lab/{notes,scripts,reports,screenshots}

# Install note-taking tools
sudo apt install -y cherrytree obsidian
\`\`\`

## Safety and Legal Considerations

**Important reminders:**
- Only test on systems you own or have explicit permission to test
- Keep lab environment isolated from production networks
- Document everything for learning purposes
- Understand the legal implications in your jurisdiction

## Next Steps

Now that my lab is set up, my immediate goals are:
1. Complete basic Nmap scans on Metasploitable
2. Work through DVWA challenges
3. Learn Burp Suite basics
4. Document findings and methodologies

## Lessons Learned

Setting up this lab taught me:
- The importance of proper planning and documentation
- How virtualization works in practice
- Basic network configuration concepts
- The value of having a dedicated learning environment

## Resources

Here are the resources that helped me:
- [VirtualBox Documentation](https://www.virtualbox.org/wiki/Documentation)
- [Kali Linux Documentation](https://www.kali.org/docs/)
- [Metasploitable Guide](https://docs.rapid7.com/metasploit/metasploitable-2/)

---

This is just the beginning of my cybersecurity journey. Having a proper lab environment gives me the confidence to experiment and learn without fear of breaking anything important. Next week, I'll be diving into my first Nmap scans!

*What's your lab setup like? Any recommendations for vulnerable machines or tools I should try next? Let me know!*
  `,
  date: "2024-01-15",
  readTime: "5 min read",
  tags: ["Lab Setup", "Kali Linux", "Beginner", "VirtualBox"],
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{blogPost.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(blogPost.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {blogPost.readTime}
            </div>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <Separator />
        </header>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="whitespace-pre-wrap leading-relaxed">
            {blogPost.content.split("\n").map((line, index) => {
              // Handle headers
              if (line.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                    {line.substring(2)}
                  </h1>
                )
              }
              if (line.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                    {line.substring(3)}
                  </h2>
                )
              }
              if (line.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold mt-4 mb-2">
                    {line.substring(4)}
                  </h3>
                )
              }
              if (line.startsWith("#### ")) {
                return (
                  <h4 key={index} className="text-lg font-bold mt-3 mb-2">
                    {line.substring(5)}
                  </h4>
                )
              }

              // Handle code blocks
              if (line.startsWith("```")) {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto"
                  >
                    <code>{line}</code>
                  </div>
                )
              }

              // Handle inline code
              if (line.includes("`") && !line.startsWith("```")) {
                const parts = line.split("`")
                return (
                  <p key={index} className="mb-4">
                    {parts.map((part, i) =>
                      i % 2 === 0 ? (
                        part
                      ) : (
                        <code key={i} className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">
                          {part}
                        </code>
                      ),
                    )}
                  </p>
                )
              }

              // Handle bold text
              if (line.includes("**")) {
                const parts = line.split("**")
                return (
                  <p key={index} className="mb-4">
                    {parts.map((part, i) => (i % 2 === 0 ? part : <strong key={i}>{part}</strong>))}
                  </p>
                )
              }

              // Handle lists
              if (line.startsWith("- ")) {
                return (
                  <li key={index} className="mb-1">
                    {line.substring(2)}
                  </li>
                )
              }

              // Handle links
              if (line.includes("[") && line.includes("](")) {
                const linkRegex = /\[([^\]]+)\]$$([^)]+)$$/g
                const parts = line.split(linkRegex)
                return (
                  <p key={index} className="mb-4">
                    {parts.map((part, i) => {
                      if (i % 3 === 1)
                        return (
                          <Link key={i} href={parts[i + 1]} className="text-green-600 hover:text-green-700 underline">
                            {part}
                          </Link>
                        )
                      if (i % 3 === 2) return null
                      return part
                    })}
                  </p>
                )
              }

              // Regular paragraphs
              if (line.trim() && !line.startsWith("#") && !line.startsWith("```")) {
                return (
                  <p key={index} className="mb-4 leading-relaxed">
                    {line}
                  </p>
                )
              }

              // Empty lines
              if (!line.trim()) {
                return <div key={index} className="h-4"></div>
              }

              return null
            })}
          </div>
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t">
          <div className="flex justify-between items-center">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                More Posts
              </Link>
            </Button>
            <Button variant="ghost">
              <Share2 className="mr-2 h-4 w-4" />
              Share This Post
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}
