import Link from "next/link"
import { Shield, Github, Linkedin, X, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-green-600" />
              <span className="font-bold text-xl">EthicalHacker</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Documenting my journey in cybersecurity and ethical hacking. Learning in public and sharing knowledge with
              the community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors">
                  Latest Posts
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors"
                >
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link href="/setup" className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors">
                  Lab Setup
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Topics</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-600 dark:text-gray-400">Web Security</span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400">Network Security</span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400">Penetration Testing</span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400">Lab Setup</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tinnyrefugee"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/khamis-michael-8aa1b4254/"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors"
                aria-label="X"
              >
                <X className="h-5 w-5" />
              </a>
              <a
                href="mailto:michaeldenis748@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-green-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 KhamisMichael. tinny-sec
          </p>
        </div>
      </div>
    </footer>
  )
}
