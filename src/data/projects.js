export const projects = [
  {
    id: 1,
    title: 'Cloud Command Center Portfolio',
    description: 'A terminal-inspired, cloud-management-console-themed portfolio website showcasing cloud & infrastructure expertise through an immersive Operations Center experience.',
    status: 'completed',
    techStack: ['React', 'Vite', 'CSS', 'JavaScript'],
    architecture: ['User', 'Browser', 'React App', 'Vite Dev Server'],
    lessons: [
      'React component architecture and state management',
      'CSS design systems and custom properties',
      'Responsive design for complex dashboard layouts',
      'Animation performance optimization'
    ],
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Home Lab Infrastructure',
    description: 'Personal home lab server running Ubuntu Server with Docker containers, monitoring stack, and self-hosted services. Includes networking, security hardening, and automation.',
    status: 'in-progress',
    techStack: ['Ubuntu', 'Docker', 'Nginx', 'SSH', 'Bash'],
    architecture: ['Internet', 'Router/Firewall', 'Ubuntu Server', 'Docker Containers', 'Services'],
    lessons: [
      'Linux server administration and hardening',
      'Docker containerization and networking',
      'Nginx reverse proxy configuration',
      'SSH key management and security best practices'
    ],
    github: '#',
    demo: null
  },
  {
    id: 3,
    title: 'Monitoring & Observability Stack',
    description: 'Full monitoring stack using Grafana, Prometheus, and Node Exporter for real-time infrastructure monitoring, alerting, and performance dashboards.',
    status: 'in-progress',
    techStack: ['Grafana', 'Prometheus', 'Node Exporter', 'Docker'],
    architecture: ['Servers', 'Node Exporter', 'Prometheus', 'Grafana Dashboard'],
    lessons: [
      'Metrics collection and time-series databases',
      'Dashboard design and visualization best practices',
      'Alert rules and notification channels',
      'Resource monitoring and capacity planning'
    ],
    github: '#',
    demo: null
  },
  {
    id: 4,
    title: 'CI/CD Pipeline Automation',
    description: 'Automated deployment pipeline using GitHub Actions for continuous integration and delivery. Includes testing, building, and deploying to cloud infrastructure.',
    status: 'planned',
    techStack: ['GitHub Actions', 'Docker', 'AWS', 'Bash'],
    architecture: ['GitHub Repo', 'GitHub Actions', 'Docker Build', 'AWS Deploy'],
    lessons: [
      'Pipeline design and workflow automation',
      'Container-based build environments',
      'Cloud deployment strategies',
      'Infrastructure as Code concepts'
    ],
    github: '#',
    demo: null
  }
];
