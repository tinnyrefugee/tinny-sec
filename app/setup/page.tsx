import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Monitor, HardDrive, Cpu, Network, Shield, Terminal, Settings, CheckCircle } from "lucide-react"

const hardwareSpecs = [
  {
    component: "Processor",
    spec: "Intel Core i7-12700K",
    details: "8 cores, 16 threads, 3.6GHz base clock",
    icon: Cpu,
  },
  {
    component: "Memory",
    spec: "32GB DDR4-3200",
    details: "Crucial Ballistix, dual channel",
    icon: HardDrive,
  },
  {
    component: "Storage",
    spec: "1TB NVMe SSD + 2TB HDD",
    details: "Samsung 980 Pro + WD Black",
    icon: HardDrive,
  },
  {
    component: "Graphics",
    spec: "NVIDIA RTX 3070",
    details: "8GB VRAM, CUDA support for password cracking",
    icon: Monitor,
  },
]

const virtualMachines = [
  {
    name: "Kali Linux 2024.1",
    purpose: "Primary penetration testing OS",
    specs: "8GB RAM, 80GB Storage",
    status: "Active",
    tools: ["Nmap", "Burp Suite", "Metasploit", "Wireshark", "John the Ripper"],
  },
  {
    name: "Metasploitable 2",
    purpose: "Vulnerable Linux target for practice",
    specs: "2GB RAM, 20GB Storage",
    status: "Active",
    tools: ["Intentionally vulnerable services"],
  },
  {
    name: "Windows 10 Lab",
    purpose: "Windows-based testing and tools",
    specs: "4GB RAM, 60GB Storage",
    status: "Active",
    tools: ["PowerShell Empire", "Mimikatz", "BloodHound"],
  },
  {
    name: "pfSense Firewall",
    purpose: "Network segmentation and monitoring",
    specs: "2GB RAM, 20GB Storage",
    status: "Planned",
    tools: ["Firewall rules", "IDS/IPS", "VPN"],
  },
]

const networkSetup = [
  {
    name: "Isolated Lab Network",
    description: "VirtualBox Host-Only network for safe testing",
    subnet: "192.168.56.0/24",
    purpose: "Isolated environment for malware analysis and exploitation",
  },
  {
    name: "Internet Access Network",
    description: "NAT network for updates and research",
    subnet: "10.0.2.0/24",
    purpose: "Controlled internet access for VMs when needed",
  },
  {
    name: "DMZ Network",
    description: "Simulated DMZ for advanced scenarios",
    subnet: "192.168.100.0/24",
    purpose: "Practice network penetration and lateral movement",
  },
]

const securityTools = [
  {
    category: "Network Scanning",
    tools: [
      { name: "Nmap", proficiency: 70, description: "Network discovery and port scanning" },
      { name: "Masscan", proficiency: 30, description: "High-speed port scanner" },
      { name: "Zmap", proficiency: 20, description: "Internet-wide network scanner" },
    ],
  },
  {
    category: "Web Application Testing",
    tools: [
      { name: "Burp Suite", proficiency: 60, description: "Web application security testing platform" },
      { name: "OWASP ZAP", proficiency: 40, description: "Automated web application scanner" },
      { name: "Nikto", proficiency: 50, description: "Web server scanner" },
    ],
  },
  {
    category: "Exploitation Frameworks",
    tools: [
      { name: "Metasploit", proficiency: 35, description: "Penetration testing framework" },
      { name: "Cobalt Strike", proficiency: 10, description: "Advanced threat emulation" },
      { name: "Empire", proficiency: 25, description: "PowerShell post-exploitation framework" },
    ],
  },
  {
    category: "Password Attacks",
    tools: [
      { name: "John the Ripper", proficiency: 45, description: "Password cracking tool" },
      { name: "Hashcat", proficiency: 30, description: "Advanced password recovery" },
      { name: "Hydra", proficiency: 40, description: "Network login cracker" },
    ],
  },
]

const upcomingUpgrades = [
  {
    item: "Dedicated Lab Server",
    description: "Separate machine for running multiple VMs simultaneously",
    priority: "High",
    timeline: "Q2 2024",
  },
  {
    item: "Hardware Security Keys",
    description: "YubiKey for practicing 2FA bypass techniques",
    priority: "Medium",
    timeline: "Q1 2024",
  },
  {
    item: "Network Attached Storage",
    description: "Centralized storage for lab data and backups",
    priority: "Medium",
    timeline: "Q3 2024",
  },
  {
    item: "Raspberry Pi Cluster",
    description: "ARM-based testing environment and IoT security research",
    priority: "Low",
    timeline: "Q4 2024",
  },
]

export default function SetupPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Lab Setup</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My current cybersecurity lab environment, tools, and infrastructure
          </p>
        </div>

        {/* Hardware Specifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Monitor className="h-6 w-6 text-green-600" />
            Hardware Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {hardwareSpecs.map((spec, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <spec.icon className="h-5 w-5 text-green-600" />
                    {spec.component}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium">{spec.spec}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{spec.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Virtual Machines */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="h-6 w-6 text-green-600" />
            Virtual Machines
          </h2>
          <div className="grid gap-6">
            {virtualMachines.map((vm, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{vm.name}</CardTitle>
                    <Badge
                      variant={vm.status === "Active" ? "default" : "secondary"}
                      className={vm.status === "Active" ? "bg-green-600" : ""}
                    >
                      {vm.status === "Active" && <CheckCircle className="h-3 w-3 mr-1" />}
                      {vm.status}
                    </Badge>
                  </div>
                  <CardDescription>{vm.purpose}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <strong>Specifications:</strong> {vm.specs}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Installed Tools:</p>
                    <div className="flex flex-wrap gap-2">
                      {vm.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Network Configuration */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Network className="h-6 w-6 text-green-600" />
            Network Configuration
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {networkSetup.map((network, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{network.name}</CardTitle>
                  <CardDescription>{network.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Subnet:</span>
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">{network.subnet}</code>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{network.purpose}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Security Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="h-6 w-6 text-green-600" />
            Security Tools & Proficiency
          </h2>
          <div className="space-y-8">
            {securityTools.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <span className="font-medium">{tool.name}</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{tool.description}</p>
                          </div>
                          <span className="text-sm text-gray-500">{tool.proficiency}%</span>
                        </div>
                        <Progress value={tool.proficiency} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Upgrades */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Settings className="h-6 w-6 text-green-600" />
            Planned Upgrades
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingUpgrades.map((upgrade, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{upgrade.item}</CardTitle>
                    <Badge
                      variant={
                        upgrade.priority === "High"
                          ? "destructive"
                          : upgrade.priority === "Medium"
                            ? "default"
                            : "secondary"
                      }
                      className={
                        upgrade.priority === "High"
                          ? "bg-red-600"
                          : upgrade.priority === "Medium"
                            ? "bg-yellow-600"
                            : ""
                      }
                    >
                      {upgrade.priority}
                    </Badge>
                  </div>
                  <CardDescription>{upgrade.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-600 font-medium">Target: {upgrade.timeline}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
