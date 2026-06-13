export const commandRegistry = {
  help: {
    description: 'List all available commands',
    execute: () => ({
      type: 'table',
      content: [
        { command: 'help', description: 'Show this help menu' },
        { command: 'whoami', description: 'Display identity info' },
        { command: 'about', description: 'Professional summary' },
        { command: 'skills', description: 'Technical skill set' },
        { command: 'homelab', description: 'Home lab specifications' },
        { command: 'homelab status', description: 'Service status dashboard' },
        { command: 'projects', description: 'View project portfolio' },
        { command: 'resume', description: 'Download resume' },
        { command: 'contact', description: 'Contact information' },
        { command: 'ping sri', description: 'Ping Sriguhan' },
        { command: 'sudo hire sri', description: '🔓 Unlock hiring mode' },
        { command: 'traceroute career', description: 'Trace career path' },
        { command: 'clear', description: 'Clear terminal output' },
      ]
    })
  },

  whoami: {
    description: 'Display identity info',
    execute: () => ({
      type: 'text',
      content: `╭──────────────────────────────────────╮
│  👤 Sriguhan S                       │
│  ☁  Cloud & Infrastructure Engineer  │
│  🐧 Linux Enthusiast                 │
│  🏠 Home Lab Operator                │
│  📍 India                            │
╰──────────────────────────────────────╯`
    })
  },

  about: {
    description: 'Professional summary',
    execute: () => ({
      type: 'text',
      content: `┌─ PROFESSIONAL SUMMARY ─────────────────────────────┐
│                                                     │
│  Cloud & Infrastructure Enthusiast building          │
│  real-world systems through hands-on home lab        │
│  experience. Passionate about Linux administration,  │
│  networking, and cloud computing.                    │
│                                                     │
│  Currently focused on:                              │
│  → Linux Server Administration                      │
│  → Cloud Computing (AWS)                            │
│  → Networking & Infrastructure                      │
│  → DevOps & Automation                              │
│                                                     │
└─────────────────────────────────────────────────────┘`
    })
  },

  skills: {
    description: 'Technical skill set',
    execute: () => ({
      type: 'text',
      content: `┌─ TECH ARSENAL ──────────────────────────────────────┐
│                                                     │
│  ☁  CLOUD         │ AWS, Azure*, GCP*               │
│  🔧 DEVOPS        │ Docker, Git, GitHub Actions      │
│  🐧 LINUX         │ Ubuntu Server, SSH, Bash, Systemd│
│  🌐 NETWORKING    │ TCP/IP, DNS, DHCP, VLANs         │
│  📊 MONITORING    │ Grafana, Prometheus, Uptime       │
│  💻 WEB           │ HTML, CSS, JS, React, Next.js    │
│                                                     │
│  * = Planned / Learning                             │
└─────────────────────────────────────────────────────┘`
    })
  },

  homelab: {
    description: 'Home lab specifications',
    execute: () => ({
      type: 'text',
      content: `┌─ HOME LAB SPECS ────────────────────────────────────┐
│                                                     │
│  🖥  Machine    : Lenovo V15                         │
│  💻 OS         : Ubuntu Server 22.04 LTS            │
│  🧠 RAM        : 8 GB DDR4                          │
│  💾 Storage    : 256 GB SSD                          │
│  🌐 Network    : Ethernet (1 Gbps)                  │
│                                                     │
│  RUNNING SERVICES:                                  │
│  ├── 🌐 Web Server (Nginx)                          │
│  ├── 📊 Monitoring (Grafana + Prometheus)            │
│  ├── 🔒 SSH Server                                   │
│  └── 🐳 Docker Engine                                │
│                                                     │
│  Status: ● ONLINE | Uptime: 47d 12h                 │
└─────────────────────────────────────────────────────┘`
    })
  },

  'homelab status': {
    description: 'Service status dashboard',
    execute: () => ({
      type: 'text',
      content: `┌─ SERVICE STATUS ────────────────────────────────────┐
│                                                     │
│  SERVICE          STATUS      UPTIME     PORT       │
│  ─────────────────────────────────────────────────   │
│  ● nginx          active      47d 12h    80/443     │
│  ● grafana        active      47d 12h    3000       │
│  ● prometheus     active      47d 12h    9090       │
│  ● sshd           active      47d 12h    22         │
│  ● docker         active      47d 12h    2375       │
│  ● node-exporter  active      47d 12h    9100       │
│  ○ jenkins        inactive    -          8080       │
│                                                     │
│  ● Active: 6  ○ Inactive: 1  ✕ Failed: 0           │
└─────────────────────────────────────────────────────┘`
    })
  },

  projects: {
    description: 'View project portfolio',
    execute: () => ({
      type: 'text',
      content: `┌─ PROJECT PORTFOLIO ─────────────────────────────────┐
│                                                     │
│  01. Cloud Command Center Portfolio                  │
│      Status: ✅ Completed                            │
│      Stack: React, Vite, CSS                         │
│                                                     │
│  02. Home Lab Infrastructure                         │
│      Status: 🔄 In Progress                          │
│      Stack: Ubuntu, Docker, Nginx                    │
│                                                     │
│  03. Monitoring Stack                                │
│      Status: 🔄 In Progress                          │
│      Stack: Grafana, Prometheus, Node Exporter       │
│                                                     │
│  04. CI/CD Pipeline                                  │
│      Status: 📋 Planned                              │
│      Stack: GitHub Actions, Docker, AWS              │
│                                                     │
│  Scroll down to 'Projects' section for details →     │
└─────────────────────────────────────────────────────┘`
    })
  },

  resume: {
    description: 'Download resume',
    execute: () => ({
      type: 'action',
      action: 'download-resume',
      content: `📄 Initiating resume download...
✅ Download started! Check your downloads folder.`
    })
  },

  contact: {
    description: 'Contact information',
    execute: () => ({
      type: 'text',
      content: `┌─ CONTACT CENTER ────────────────────────────────────┐
│                                                     │
│  📧 Email     : sriguhan@example.com                │
│  💼 LinkedIn  : linkedin.com/in/sriguhan            │
│  🐙 GitHub    : github.com/sriguhan                 │
│  🐦 X/Twitter : @sriguhan                           │
│  📋 Naukri    : naukri.com/sriguhan                  │
│                                                     │
│  Or scroll down to the Contact section →             │
└─────────────────────────────────────────────────────┘`
    })
  },

  'ping sri': {
    description: 'Ping Sriguhan',
    execute: () => ({
      type: 'animated',
      lines: [
        'PING sriguhan@cloudlab (127.0.0.1): 56 data bytes',
        '64 bytes from sriguhan: icmp_seq=0 ttl=64 time=0.042 ms',
        '64 bytes from sriguhan: icmp_seq=1 ttl=64 time=0.038 ms',
        '64 bytes from sriguhan: icmp_seq=2 ttl=64 time=0.041 ms',
        '',
        '--- sriguhan ping statistics ---',
        '3 packets transmitted, 3 received, 0% packet loss',
        'round-trip min/avg/max = 0.038/0.040/0.042 ms',
        '',
        '✅ Sriguhan is online and ready to connect!'
      ]
    })
  },

  'sudo hire sri': {
    description: 'Unlock hiring mode',
    execute: () => ({
      type: 'animated',
      lines: [
        '[sudo] password for recruiter: ********',
        '',
        '🔓 ACCESS GRANTED',
        '',
        '╔══════════════════════════════════════════╗',
        '║                                          ║',
        '║   🎉 HIRING MODE ACTIVATED!              ║',
        '║                                          ║',
        '║   Sriguhan is available for:             ║',
        '║   → Cloud Engineering roles              ║',
        '║   → DevOps positions                     ║',
        '║   → Infrastructure roles                 ║',
        '║   → Linux Administration                 ║',
        '║                                          ║',
        '║   📧 Send an email to get started!       ║',
        '║   💼 Check LinkedIn for more details.     ║',
        '║                                          ║',
        '╚══════════════════════════════════════════╝'
      ]
    })
  },

  'traceroute career': {
    description: 'Trace career path',
    execute: () => ({
      type: 'animated',
      lines: [
        'traceroute to career.sriguhan (future.cloud.io), 10 hops max',
        '',
        ' 1  curiosity.localhost          0.1 ms  — Started exploring tech',
        ' 2  linux.basics.local           1.2 ms  — Learned Linux fundamentals',
        ' 3  networking.fundamentals      2.8 ms  — Studied TCP/IP, DNS, DHCP',
        ' 4  homelab.setup.lan            3.5 ms  — Built home lab server',
        ' 5  docker.containers.io         4.1 ms  — Containerization journey',
        ' 6  cloud.aws.compute            5.7 ms  — AWS Cloud exploration',
        ' 7  monitoring.grafana.stack     6.3 ms  — Monitoring & observability',
        ' 8  devops.pipeline.ci           7.8 ms  — CI/CD & automation',
        ' 9  portfolio.cloudlab.dev       8.2 ms  — Built this portfolio!',
        '10  dream.cloud.career         ★★★★★  — Next destination! 🚀',
        '',
        'Trace complete. All hops responded. Career path is healthy! ✅'
      ]
    })
  },

  clear: {
    description: 'Clear terminal output',
    execute: () => ({
      type: 'clear'
    })
  }
};

export const getWelcomeMessage = () => [
  '',
  '╔══════════════════════════════════════════════════════════╗',
  '║                                                          ║',
  '║   ☁  Cloud Command Center v1.0                          ║',
  '║   Welcome to Sriguhan\'s Terminal                         ║',
  '║                                                          ║',
  '║   Type "help" to see available commands.                 ║',
  '║   Use ↑↓ arrows to navigate command history.            ║',
  '║                                                          ║',
  '╚══════════════════════════════════════════════════════════╝',
  ''
];
