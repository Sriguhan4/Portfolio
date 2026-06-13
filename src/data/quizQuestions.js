export const quizCategories = [
  {
    id: 'linux',
    name: 'Linux Commands',
    icon: '🐧',
    questions: [
      {
        question: 'Which command is used to change file permissions in Linux?',
        options: ['chmod', 'chown', 'chmod', 'chperm'],
        correct: 0,
        explanation: 'chmod (change mode) is used to change the access permissions of files and directories.'
      },
      {
        question: 'What does the command "ls -la" display?',
        options: [
          'All files including hidden, in long format',
          'Only directories',
          'Only executable files',
          'File sizes in human-readable format'
        ],
        correct: 0,
        explanation: 'ls -la lists all files (including hidden ones starting with .) in long format showing permissions, owner, size, and date.'
      },
      {
        question: 'Which command shows running processes in Linux?',
        options: ['ps', 'ls', 'df', 'du'],
        correct: 0,
        explanation: 'ps (process status) displays information about currently running processes.'
      },
      {
        question: 'What is the purpose of the "grep" command?',
        options: [
          'Search for patterns in text',
          'Copy files',
          'Create directories',
          'Manage users'
        ],
        correct: 0,
        explanation: 'grep searches for patterns in files or input streams using regular expressions.'
      },
      {
        question: 'Which file contains user account information?',
        options: ['/etc/passwd', '/etc/shadow', '/etc/users', '/etc/accounts'],
        correct: 0,
        explanation: '/etc/passwd contains user account information including username, UID, GID, home directory, and default shell.'
      }
    ]
  },
  {
    id: 'networking',
    name: 'Networking',
    icon: '🌐',
    questions: [
      {
        question: 'What port does HTTPS use by default?',
        options: ['443', '80', '8080', '22'],
        correct: 0,
        explanation: 'HTTPS (HTTP Secure) uses port 443 by default for encrypted web traffic.'
      },
      {
        question: 'What does DNS stand for?',
        options: [
          'Domain Name System',
          'Dynamic Network Service',
          'Data Network Security',
          'Digital Name Server'
        ],
        correct: 0,
        explanation: 'DNS (Domain Name System) translates human-readable domain names to IP addresses.'
      },
      {
        question: 'Which protocol is used for secure remote login?',
        options: ['SSH', 'FTP', 'Telnet', 'HTTP'],
        correct: 0,
        explanation: 'SSH (Secure Shell) provides encrypted communication for remote login and command execution.'
      },
      {
        question: 'What is a VLAN used for?',
        options: [
          'Network segmentation',
          'File storage',
          'Email delivery',
          'Web hosting'
        ],
        correct: 0,
        explanation: 'VLANs (Virtual LANs) logically segment a network to improve security, performance, and management.'
      },
      {
        question: 'What does DHCP provide to network devices?',
        options: [
          'Automatic IP address assignment',
          'Firewall protection',
          'DNS resolution',
          'VPN tunneling'
        ],
        correct: 0,
        explanation: 'DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configuration to devices.'
      }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud Basics',
    icon: '☁️',
    questions: [
      {
        question: 'What does EC2 stand for in AWS?',
        options: [
          'Elastic Compute Cloud',
          'Electronic Cloud Computing',
          'Enterprise Cloud Container',
          'Elastic Container Cluster'
        ],
        correct: 0,
        explanation: 'EC2 (Elastic Compute Cloud) provides resizable compute capacity in the cloud.'
      },
      {
        question: 'Which AWS service is used for object storage?',
        options: ['S3', 'EBS', 'RDS', 'Lambda'],
        correct: 0,
        explanation: 'S3 (Simple Storage Service) provides scalable object storage for data and backups.'
      },
      {
        question: 'What is the shared responsibility model?',
        options: [
          'Cloud provider secures infrastructure, customer secures data',
          'Customer manages everything',
          'Cloud provider manages everything',
          'Security is optional in cloud'
        ],
        correct: 0,
        explanation: 'The shared responsibility model divides security duties between the cloud provider (infrastructure) and customer (data, applications).'
      },
      {
        question: 'What is Infrastructure as Code (IaC)?',
        options: [
          'Managing infrastructure through code/config files',
          'Writing code on servers',
          'Building physical data centers',
          'Manual server configuration'
        ],
        correct: 0,
        explanation: 'IaC automates infrastructure provisioning using code, enabling version control, repeatability, and consistency.'
      },
      {
        question: 'Which cloud service model gives you the most control?',
        options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'],
        correct: 0,
        explanation: 'IaaS (Infrastructure as a Service) provides the most control — you manage OS, runtime, and applications while the provider handles hardware.'
      }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: '🔧',
    questions: [
      {
        question: 'What is Docker primarily used for?',
        options: [
          'Containerization of applications',
          'Virtual machine management',
          'Network monitoring',
          'Database management'
        ],
        correct: 0,
        explanation: 'Docker packages applications and dependencies into containers for consistent deployment across environments.'
      },
      {
        question: 'What does CI/CD stand for?',
        options: [
          'Continuous Integration / Continuous Delivery',
          'Cloud Integration / Cloud Deployment',
          'Container Integration / Container Delivery',
          'Code Inspection / Code Deployment'
        ],
        correct: 0,
        explanation: 'CI/CD automates the build, test, and deployment pipeline for faster and more reliable software delivery.'
      },
      {
        question: 'What is a Dockerfile used for?',
        options: [
          'Defining how to build a Docker image',
          'Running Docker containers',
          'Managing Docker networks',
          'Storing Docker volumes'
        ],
        correct: 0,
        explanation: 'A Dockerfile contains instructions to build a Docker image, defining the base image, dependencies, and commands.'
      },
      {
        question: 'Which tool is commonly used for monitoring?',
        options: ['Prometheus', 'Jenkins', 'Terraform', 'Ansible'],
        correct: 0,
        explanation: 'Prometheus is a monitoring and alerting toolkit that collects metrics from configured targets at given intervals.'
      },
      {
        question: 'What is version control used for?',
        options: [
          'Tracking changes in code over time',
          'Controlling server versions',
          'Managing user access',
          'Monitoring application performance'
        ],
        correct: 0,
        explanation: 'Version control (e.g., Git) tracks code changes, enables collaboration, and allows reverting to previous states.'
      }
    ]
  }
];
