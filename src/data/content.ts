// Content sourced from https://shubhamm.info/ and Shubham's resume — no invented facts.

export const profile = {
  name: 'Shubham Mali',
  role: 'Full Stack Developer',
  subRole: 'Software Engineer',
  currentTitle: 'Software Engineer',
  currentCompany: 'miniOrange Security',
  yearsExperience: 2,
  bio: "I'm a full-stack software engineer with 2 years of experience building secure, scalable web applications — from user-facing interfaces to backend APIs and cloud integrations.",
  bioLong:
    "I'm a full-stack software engineer with a strong foundation in building dynamic, secure, and scalable applications end-to-end. Over the past 2 years, I've shipped production features across the stack — from React and Next.js interfaces to Node.js and Java backends, REST APIs, and cloud integrations — with an emphasis on writing reliable, maintainable code.",
  availability:
    "I'm currently accepting new freelance projects and collaborations — custom web applications, e-commerce solutions, or any other digital product.",
  location: 'Maharashtra, India',
  email: 'shubhammali929@gmail.com',
  phone: '8421075337',
  website: 'shubhamm.info',
} as const

export const focusAreas = [
  {
    title: 'Frontend Development',
    description: 'Creating beautiful and responsive user interfaces with modern frameworks like React and Next.js.',
  },
  {
    title: 'Backend Development',
    description: 'Building scalable, secure server-side applications and REST APIs with Node.js, Java, and Python.',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deploying and integrating full-stack applications with cloud services, Docker, and CI-friendly workflows.',
  },
] as const

export const socials = [
  { label: 'GitHub', url: 'https://github.com/shubhammali929', key: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shubhammalidev/', key: 'linkedin' },
  { label: 'Email', url: 'mailto:dev.shubham.mali@gmail.com', key: 'email' },
  { label: 'Buy me a coffee', url: 'https://buymeacoffee.com/shubhammali', key: 'coffee' },
] as const

export const education = [
  {
    degree: 'Master of Computer Application (M.C.A.)',
    institution: 'MES Institute of Management & Career Courses (IMCC), Pune',
    location: 'Pune, Maharashtra',
    year: '2022 — 2024',
    description:
      "In pursuit of my Master's degree in Computer Science, exploring advanced topics and sharpening my skills in software development.",
    courses: ['Advanced Web Development', 'Cloud Computing', 'Data Science', 'Software Architecture'],
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: "Deccan Education Society's Willingdon College, Sangli",
    location: 'Sangli, Maharashtra',
    year: '2019 — 2022',
    description:
      "During my Bachelor's in Computer Science, I delved into coding and mastered various technologies, laying a solid foundation for my future in tech.",
    courses: ['Data Structures', 'Operating Systems', 'Database Management', 'Web Development'],
  },
] as const

export type Project = {
  title: string
  description: string
  technologies: string[]
  github?: string
  live?: string
  videoDemo?: string
}

export const projects: Project[] = [
  {
    title: 'Web Messenger Platform',
    description:
      'Hosted web messenger platform with 50+ registered users. Built with responsive design achieving 30% improvement in cross-device accessibility.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    live: 'https://lets-chat-webmessenger.000webhostapp.com/',
  },
  {
    title: 'FixMyCode — AI Code Editor',
    description:
      'Advanced code editor combining lightweight editing with AI-powered code transformation using OpenAI Codex API integration.',
    technologies: ['React', 'JavaScript', 'Firebase', 'OpenAI API'],
    github: 'https://github.com/shubhammali929/fix_my_code',
    live: 'https://fixmycode.netlify.app/',
    videoDemo: 'https://www.youtube.com/watch?v=znxQCv4sGuA',
  },
  {
    title: 'Easy Navigate — Voice Navigation',
    description:
      'Hands-free mobile app for safe location exploration while driving. Voice-command enabled for discovering nearby attractions without distraction.',
    technologies: ['React', 'Express.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/shubhammali929/Highway-Alerts',
    live: 'https://highway-alerts.netlify.app/',
  },
]

export const certifications = [
  {
    title: 'Java 5-Star Gold Badge',
    organization: 'HackerRank',
    date: 'Verified',
    description:
      'Achieved 5-star gold badge in Java programming, demonstrating advanced proficiency in Java problem-solving and algorithms.',
    credentialId: '@shubhammali929',
    link: 'https://www.hackerrank.com/profile/shubhammali929',
    badge: 'gold',
  },
  {
    title: 'Ethical Hacking and Cybersecurity',
    organization: 'Udemy',
    date: 'Certified',
    description:
      'Comprehensive certification in ethical hacking techniques, cybersecurity fundamentals, and penetration testing methodologies.',
    credentialId: 'UC-b01608d3-ee10-467e-9746-be55c99e6a5c',
    link: 'https://www.udemy.com/certificate/UC-b01608d3-ee10-467e-9746-be55c99e6a5c/',
    badge: 'silver',
  },
  {
    title: 'Java Certification',
    organization: 'HackerRank',
    date: 'Certified',
    description: 'Verified proficiency in core Java concepts, object-oriented design, and language fundamentals.',
    credentialId: 'a98571bb6275',
    link: 'https://www.hackerrank.com/certificates/a98571bb6275',
    badge: 'silver',
  },
  {
    title: 'Problem Solving (Intermediate)',
    organization: 'CodeChef',
    date: 'Certified',
    description: 'Intermediate-level certification in algorithmic problem solving, data structures, and optimization techniques.',
    credentialId: '8b97995',
    link: 'https://www.codechef.com/certificates/public/8b97995',
    badge: 'silver',
  },
  {
    title: 'SQL (Basics & Intermediate)',
    organization: 'CodeChef',
    date: 'Certified',
    description: 'Certification covering SQL fundamentals through intermediate database management, queries, and data manipulation.',
    credentialId: '8b97995',
    link: 'https://www.codechef.com/certificates/public/8b97995',
    badge: 'bronze',
  },
  {
    title: 'Python Programming Certification',
    organization: 'GUVI',
    date: 'Certified',
    description: 'Certified proficiency in Python programming fundamentals, covering syntax, data structures, and problem solving.',
    credentialId: 'H06b40zx92819fu0P6',
    link: 'https://www.guvi.in/share-certificate/H06b40zx92819fu0P6',
    badge: 'bronze',
  },
] as const

// Every technology below is directly referenced on shubhamm.info or Shubham's resume (skills copy, project, or professional experience).
export const skills = [
  { name: 'React', group: 'frontend' },
  { name: 'Next.js', group: 'frontend' },
  { name: 'JavaScript', group: 'frontend' },
  { name: 'HTML', group: 'frontend' },
  { name: 'CSS', group: 'frontend' },
  { name: 'Node.js', group: 'backend' },
  { name: 'Express.js', group: 'backend' },
  { name: 'Python', group: 'backend' },
  { name: 'PHP', group: 'backend' },
  { name: 'Java', group: 'backend' },
  { name: 'MongoDB', group: 'data' },
  { name: 'PostgreSQL', group: 'data' },
  { name: 'SQL', group: 'data' },
  { name: 'Redis', group: 'data' },
  { name: 'Firebase', group: 'data' },
  { name: 'AWS', group: 'cloud' },
  { name: 'Docker', group: 'cloud' },
  { name: 'OpenAI API', group: 'tools' },
] as const

export const navItems = [
  { id: 'home', label: 'Home', number: '01' },
  { id: 'about', label: 'About', number: '02' },
  { id: 'experience', label: 'Experience', number: '03' },
  { id: 'skills', label: 'Skills', number: '04' },
  { id: 'projects', label: 'Projects', number: '05' },
  { id: 'certifications', label: 'Certifications', number: '06' },
  { id: 'education', label: 'Education', number: '07' },
  { id: 'contact', label: 'Contact', number: '08' },
] as const
