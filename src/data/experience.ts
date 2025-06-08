import { Experience } from '../types/experience';

export const experienceData: Experience[] = [
  {
    id: 1,
    company: 'NextZen Minds',
    position: 'Backend Developer',
    duration: 'Aug 2024 - Present',
    location: 'Remote',
    description: [
      'Architected and developed nagent.ai - a high-scalability AI agent platform using Node.js and Express.js',
      'Implemented microservices architecture with multi-LLM integration (OpenAI, Claude, Gemini) for content generation',
      'Built AI agents for LinkedIn post generation, business planning, ad video creation, and pitch deck automation',
      'Designed scalable backend systems with MySQL and Firebase for real-time data storage and processing',
      'Deployed applications on Google Cloud Platform with optimized serverless functions and APIs',
      'Developed multi-modal AI functionality for text, audio, video, and image content generation'
    ],
    technologies: ['Node.js', 'Express.js', 'OpenAI', 'Claude', 'Gemini', 'MySQL', 'Firebase', 'GCP', 'LangChain', 'Multi-LLM Architecture'],
    current: true
  },
  {
    id: 2,
    company: 'CBNITS India Pvt Ltd',
    position: 'Junior Programmer',
    duration: 'Jan 2023 - Sep 2024',
    location: 'Kolkata, West Bengal',
    description: [
      'Developed and optimized Data Security Posture Management (DSPM) systems using Java, Spring Boot, and Apache Spark',
      'Implemented Cloud Security Posture Management (CSPM) solutions with Python, Flask, and Celery for multi-cloud platforms',
      'Built regex-based PII detection systems and integrated tuned spaCy models for compliance reporting',
      'Deployed scalable applications on AWS EC2 with Docker containerization for enhanced portability',
      'Executed automated multi-cloud integrations and cloud security audits using Prowler for compliance validation',
      'Processed large datasets to generate actionable security insights and improve data protection posture'
    ],
    technologies: ['Java', 'Spring Boot', 'Apache Spark', 'Python', 'Flask', 'Celery', 'AWS', 'Docker', 'spaCy', 'Prowler', 'Regex'],
    current: false
  },
  {
    id: 3,
    company: 'NextZen Minds',
    position: 'Backend Engineer (Project-based)',
    duration: 'Jun 2024 - Aug 2024',
    location: 'Remote',
    description: [
      'Designed comprehensive Hospital Management System backend using Java and Spring Boot architecture',
      'Integrated Apache Tika for automated document parsing and medical record management',
      'Implemented API Gateway with circuit breaker patterns for fault-tolerant and scalable communication',
      'Developed secure payment processing pipeline with Razorpay integration for billing and transactions',
      'Utilized Redis caching to optimize read-heavy operations and reduce system latency',
      'Applied Spring Batch for efficient big data processing of patient records and medical reports'
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Batch', 'Apache Spark', 'Apache Tika', 'Redis', 'Razorpay', 'API Gateway', 'Circuit Breaker'],
    current: false
  },
  {
    id: 4,
    company: 'HawkShield AI',
    position: 'Backend Developer (Contract)',
    duration: 'Mar 2024 - Jun 2024',
    location: 'Remote',
    description: [
      'Built elastic file processing pipelines using Celery for distributed data processing across S3, SharePoint, and databases',
      'Developed advanced PII detection systems combining regex patterns with trained spaCy models',
      'Contributed to SaaS architecture design for enhanced DSPM and CSPM security capabilities',
      'Automated cross-account S3 bucket access using AWS STS and Role ARN for multi-cloud security',
      'Implemented vulnerability scanning and compliance reporting to strengthen cloud security posture',
      'Executed automated CSPM scans with Prowler to ensure adherence to cloud security best practices'
    ],
    technologies: ['Python', 'Flask', 'Celery', 'spaCy', 'AWS STS', 'Prowler', 'S3', 'SharePoint', 'Regex', 'PII Detection'],
    current: false
  },
  {
    id: 5,
    company: 'Swift Security',
    position: 'Software Developer Intern',
    duration: 'Dec 2022 - Mar 2023',
    location: 'Remote',
    description: [
      'Developed scalable DSPM pipeline using Apache Spark for data processing across cloud platforms',
      'Implemented robust PII detection mechanisms using regex for compliance and security reporting',
      'Assisted in designing SaaS application architecture to enhance data security policies',
      'Deployed and managed Apache Spark clusters on public clouds for high-speed data processing',
      'Automated secure cross-account S3 access through AWS STS integration for seamless multi-cloud operations'
    ],
    technologies: ['Java', 'Spring Boot', 'Apache Spark', 'AWS', 'S3', 'STS', 'Regex', 'PII Detection', 'Cloud Security'],
    current: false
  }
];