export const profileData = {
    name: "Ankit Anand",
    title: "Senior Backend Developer & AI Engineer",
    contact: {
      phone: "+91 9523218671",
      email: "ankitanand8969@gmail.com",
      linkedin: "linkedin.com/in/ankit-anand-",
      location: "Kolkata, West Bengal"
    },
    skills: {
      programming: ["Java", "Python", "Node.js", "JavaScript"],
      javaEcosystem: ["Spring Boot", "Spring Security", "Hibernate", "Microservices"],
      pythonAI: ["Flask", "Django", "LangChain", "Machine Learning", "spaCy"],
      databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"],
      devopsCloud: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD"],
      aiAnalytics: ["Apache Spark", "Kafka", "OpenAI", "Multi-LLM"]
    },
    experience: [
      {
        role: "Backend Developer",
        company: "NextZen Minds",
        period: "AUG 2024 – Present",
        projects: ["AI Agent Platform - nagent.ai", "Security Management Systems"]
      },
      {
        role: "Junior Programmer",
        company: "CBNITS India Pvt Ltd",
        period: "JAN 2023 – SEP 2024",
        projects: ["DSPM system", "PII scanning mechanisms"]
      }
    ],
    education: {
      degree: "B.Tech in Computer Science",
      institution: "Meghnad Saha Institute of Technology",
      gpa: "9.2 GPA",
      period: "2019 - 2023"
    },
    projects: [
      {
        name: "Nagent AI Platform",
        url: "nagent.ai",
        description: "Comprehensive AI agent platform with LinkedIn Content Suite, Business Intelligence Agent, and more",
        tech: ["Node.js", "Express.js", "OpenAI", "Claude", "Gemini", "MySQL", "Firebase", "GCP"]
      },
      {
        name: "Enterprise Hospital Management System",
        company: "NextZen Minds",
        description: "Scalable healthcare management platform with document processing and payment integration",
        tech: ["Java", "Spring Boot", "Apache Spark", "Apache Tika", "Redis", "Razorpay"]
      }
    ]
  };
  
  export const chatbotResponses = {
    greetings: [
      "Hello! I'm Ankit's AI assistant. How can I help you learn more about his background and experience?",
      "Hi there! I can answer questions about Ankit's skills, projects, and professional experience. What would you like to know?",
      "Welcome! I'm here to help you explore Ankit's portfolio. Feel free to ask about his technical expertise or projects."
    ],
    
    skills: {
      keywords: ["skill", "technology", "tech", "programming", "language", "framework"],
      response: `Ankit has expertise in multiple technology stacks:
  
  🔹 **Programming Languages:** Java, Python, Node.js, JavaScript
  🔹 **Java Ecosystem:** Spring Boot, Spring Security, Hibernate, Microservices
  🔹 **Python & AI:** Flask, Django, LangChain, Machine Learning, spaCy
  🔹 **Databases:** MySQL, PostgreSQL, MongoDB, Redis, Firebase
  🔹 **DevOps & Cloud:** Docker, Kubernetes, AWS, GCP, CI/CD
  🔹 **AI & Analytics:** Apache Spark, Kafka, OpenAI, Multi-LLM
  
  Would you like to know more about any specific technology?`
    },
  
    experience: {
      keywords: ["experience", "work", "job", "career", "professional"],
      response: `Ankit has 2+ years of professional experience:
  
  **Current Role:** Backend Developer at NextZen Minds (Aug 2024 - Present)
  - Working on AI Agent Platform (nagent.ai)
  - Developing security management systems
  - Achieved 99.9% uptime and sub-200ms response times
  
  **Previous Role:** Junior Programmer at CBNITS India Pvt Ltd (Jan 2023 - Sep 2024)
  - Developed DSPM systems using Java and Spring Boot
  - Implemented PII detection with 98% accuracy
  - Optimized data processing pipelines by 60%
  
  Would you like more details about any specific role or project?`
    },
  
    projects: {
      keywords: ["project", "nagent", "hospital", "security", "ai platform"],
      response: `Here are Ankit's key projects:
  
  🚀 **Nagent AI Platform** (nagent.ai)
  - Multi-LLM integration (OpenAI, Claude, Gemini)
  - LinkedIn content generation and business planning
  - Multimodal AI for text, audio, video, image content
  
  🏥 **Enterprise Hospital Management System**
  - Intelligent document processing with Apache Tika
  - Secure payment integration with Razorpay
  - Redis caching reducing database load by 70%
  
  🔐 **Advanced Security Posture Management**
  - PII detection with 98% accuracy using spaCy
  - Multi-cloud security automation
  - Enterprise-grade compliance solutions
  
  Which project interests you most?`
    },
  
    contact: {
      keywords: ["contact", "email", "phone", "linkedin", "reach", "hire"],
      response: `You can reach Ankit through:
  
  📧 **Email:** ankitanand8969@gmail.com
  📱 **Phone:** +91 9523218671
  💼 **LinkedIn:** linkedin.com/in/ankit-anand-
  📍 **Location:** Kolkata, West Bengal
  
  Feel free to connect for collaboration opportunities or technical discussions!`
    },
  
    education: {
      keywords: ["education", "degree", "college", "university", "study"],
      response: `**Education Background:**
  
  🎓 **B.Tech in Computer Science**
  📍 Meghnad Saha Institute of Technology
  ⭐ 9.2 GPA
  📅 2019 - 2023
  
  **Achievements:**
  - Published research paper on "Prediction of Thyroid Disease Using Machine Learning" at EAIT 2022
  - Solved 1000+ DSA problems on LeetCode and GeeksforGeeks`
    },
  
    ai: {
      keywords: ["ai", "artificial intelligence", "machine learning", "ml", "llm", "openai"],
      response: `Ankit specializes in AI & Machine Learning:
  
  🤖 **AI Technologies:**
  - Multi-LLM integration (OpenAI, Claude, Gemini)
  - LangChain for AI application development
  - Machine Learning model development
  - Natural Language Processing with spaCy
  
  🛠️ **AI Projects:**
  - AI agents for content creation and business planning
  - Multimodal AI systems for text, audio, video generation
  - PII detection systems with ML models
  - Intelligent document processing
  
  His AI expertise combines practical implementation with cutting-edge research!`
    },
  
    default: [
      "I'd be happy to help! You can ask me about Ankit's skills, experience, projects, education, or contact information.",
      "I can provide information about Ankit's technical expertise, professional background, or specific projects. What interests you?",
      "Feel free to ask about Ankit's programming skills, AI experience, backend development expertise, or any of his projects!"
    ]
  };