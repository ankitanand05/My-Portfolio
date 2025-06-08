import React from 'react';

export const generateCVHTML = () => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ankit Anand - Backend Developer</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #2d3748;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .resume-container {
            max-width: 1000px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 20px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
            overflow: hidden;
            position: relative;
        }

        .resume-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, #667eea, #764ba2, #f093fb, #f5576c);
            background-size: 400% 400%;
            animation: gradient 8s ease infinite;
        }

        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .header {
            background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
            color: white;
            padding: 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }

        .name {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 10px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
            z-index: 1;
        }

        .title {
            font-size: 1.4rem;
            font-weight: 400;
            margin-bottom: 20px;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            position: relative;
            z-index: 1;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.95rem;
            transition: all 0.3s ease;
        }

        .contact-item:hover {
            transform: translateY(-2px);
            color: #667eea;
        }

        .contact-item i {
            width: 20px;
            text-align: center;
        }

        .main-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 0;
            min-height: 600px;
        }

        .sidebar {
            background: linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%);
            padding: 40px 30px;
            border-right: 1px solid #e2e8f0;
        }

        .content {
            padding: 40px;
        }

        .section {
            margin-bottom: 35px;
            animation: fadeInUp 0.6s ease forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        .section:nth-child(1) { animation-delay: 0.1s; }
        .section:nth-child(2) { animation-delay: 0.2s; }
        .section:nth-child(3) { animation-delay: 0.3s; }
        .section:nth-child(4) { animation-delay: 0.4s; }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .section-title {
            font-size: 1.4rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            position: relative;
        }

        .section-title::after {
            content: '';
            flex: 1;
            height: 3px;
            background: linear-gradient(90deg, #667eea, transparent);
            border-radius: 2px;
        }

        .section-title i {
            color: #667eea;
            font-size: 1.2rem;
        }

        .summary {
            font-size: 1.05rem;
            line-height: 1.8;
            color: #4a5568;
            text-align: justify;
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
            padding: 25px;
            border-radius: 12px;
            border-left: 4px solid #667eea;
            position: relative;
        }

        .summary::before {
            content: '"';
            position: absolute;
            top: -10px;
            left: 15px;
            font-size: 4rem;
            color: #667eea;
            opacity: 0.3;
            font-family: serif;
        }

        .skills-grid {
            display: grid;
            gap: 20px;
        }

        .skill-category {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
        }

        .skill-category:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .skill-category-title {
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .skill-category-title i {
            color: #667eea;
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .skill-tag {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .skill-tag:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
        }

        .experience-item, .project-item {
            background: white;
            padding: 25px;
            margin-bottom: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
            position: relative;
            transition: all 0.3s ease;
        }

        .experience-item:hover, .project-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .experience-item::before, .project-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background: linear-gradient(180deg, #667eea, #764ba2);
            border-radius: 0 2px 2px 0;
        }

        .job-header, .project-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
            flex-wrap: wrap;
            gap: 10px;
        }

        .job-title, .project-title {
            font-size: 1.2rem;
            font-weight: 700;
            color: #2d3748;
        }

        .company, .project-link {
            color: #667eea;
            font-weight: 600;
            font-size: 1rem;
        }

        .duration {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
        }

        .job-description, .project-description {
            color: #4a5568;
            line-height: 1.7;
        }

        .job-description ul, .project-description ul {
            list-style: none;
            padding-left: 0;
        }

        .job-description li, .project-description li {
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
        }

        .job-description li::before, .project-description li::before {
            content: '▶';
            position: absolute;
            left: 0;
            color: #667eea;
            font-size: 0.8rem;
        }

        .tech-stack {
            margin-top: 15px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .tech-item {
            background: #f7fafc;
            color: #2d3748;
            padding: 4px 10px;
            border-radius: 15px;
            font-size: 0.8rem;
            border: 1px solid #e2e8f0;
            font-weight: 500;
        }

        .education {
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
            padding: 25px;
            border-radius: 12px;
            border-left: 4px solid #667eea;
        }

        .degree {
            font-size: 1.1rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 5px;
        }

        .university {
            color: #667eea;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .gpa {
            background: linear-gradient(135deg, #48bb78, #38a169);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            display: inline-block;
        }

        .achievements {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
        }

        .achievement-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            margin-bottom: 15px;
            padding: 15px;
            background: #f7fafc;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .achievement-item:hover {
            background: #edf2f7;
            transform: translateX(5px);
        }

        .achievement-item:last-child {
            margin-bottom: 0;
        }

        .achievement-icon {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 1.1rem;
        }

        .achievement-text {
            color: #4a5568;
            line-height: 1.6;
        }

        @media (max-width: 768px) {
            .resume-container {
                margin: 10px;
                border-radius: 12px;
            }

            .main-content {
                grid-template-columns: 1fr;
            }

            .header {
                padding: 30px 20px;
            }

            .name {
                font-size: 2.2rem;
            }

            .contact-info {
                flex-direction: column;
                gap: 15px;
            }

            .sidebar, .content {
                padding: 30px 20px;
            }

            .job-header, .project-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        .print-button {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            font-size: 1.2rem;
            cursor: pointer;
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
            transition: all 0.3s ease;
            z-index: 1000;
        }

        .print-button:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
        }

        @media print {
            body {
                background: white;
                padding: 0;
            }

            .resume-container {
                box-shadow: none;
                border-radius: 0;
                max-width: none;
            }

            .print-button {
                display: none;
            }
        }
    </style>
</head>
<body>
<div class="resume-container">
    <div class="header">
        <h1 class="name">Ankit Anand</h1>
        <p class="title">Backend Developer & AI Engineer</p>
        <div class="contact-info">
            <div class="contact-item">
                <i class="fas fa-phone"></i>
                <span>+91 9523218671</span>
            </div>
            <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>ankitanand8969@gmail.com</span>
            </div>
            <div class="contact-item">
                <i class="fab fa-linkedin"></i>
                <span>linkedin.com/in/ankit-anand-</span>
            </div>
            <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Kolkata, West Bengal</span>
            </div>
        </div>
    </div>

    <div class="main-content">
        <div class="sidebar">
            <div class="section">
                <h2 class="section-title">
                    <i class="fas fa-code"></i>
                    Technical Skills
                </h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <div class="skill-category-title">
                            <i class="fas fa-laptop-code"></i>
                            Programming Languages
                        </div>
                        <div class="skill-tags">
                            <span class="skill-tag">Java</span>
                            <span class="skill-tag">Python</span>
                            <span class="skill-tag">Node.js</span>
                            <span class="skill-tag">JavaScript</span>
                        </div>
                    </div>

                    <div class="skill-category">
                        <div class="skill-category-title">
                            <i class="fas fa-coffee"></i>
                            Java Ecosystem
                        </div>
                        <div class="skill-tags">
                            <span class="skill-tag">Spring Boot</span>
                            <span class="skill-tag">Spring Security</span>
                            <span class="skill-tag">Hibernate</span>
                            <span class="skill-tag">Microservices</span>
                        </div>
                    </div>

                    <div class="skill-category">
                        <div class="skill-category-title">
                            <i class="fab fa-python"></i>
                            Python & AI
                        </div>
                        <div class="skill-tags">
                            <span class="skill-tag">Flask</span>
                            <span class="skill-tag">Django</span>
                            <span class="skill-tag">LangChain</span>
                            <span class="skill-tag">Machine Learning</span>
                            <span class="skill-tag">spaCy</span>
                        </div>
                    </div>

                    <div class="skill-category">
                        <div class="skill-category-title">
                            <i class="fas fa-database"></i>
                            Databases
                        </div>
                        <div class="skill-tags">
                            <span class="skill-tag">MySQL</span>
                            <span class="skill-tag">PostgreSQL</span>
                            <span class="skill-tag">MongoDB</span>
                            <span class="skill-tag">Redis</span>
                            <span class="skill-tag">Firebase</span>
                        </div>
                    </div>

                    <div class="skill-category">
                        <div class="skill-category-title">
                            <i class="fas fa-cloud"></i>
                            DevOps & Cloud
                        </div>
                        <div class="skill-tags">
                            <span class="skill-tag">Docker</span>
                            <span class="skill-tag">Kubernetes</span>
                            <span class="skill-tag">AWS</span>
                            <span class="skill-tag">GCP</span>
                            <span class="skill-tag">CI/CD</span>
                        </div>
                    </div>

                    <div class="skill-category">
                        <div class="skill-category-title">
                            <i class="fas fa-robot"></i>
                            AI & Analytics
                        </div>
                        <div class="skill-tags">
                            <span class="skill-tag">Apache Spark</span>
                            <span class="skill-tag">Kafka</span>
                            <span class="skill-tag">OpenAI</span>
                            <span class="skill-tag">Multi-LLM</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">
                    <i class="fas fa-graduation-cap"></i>
                    Education
                </h2>
                <div class="education">
                    <div class="degree">B.Tech in Computer Science</div>
                    <div class="university">Meghnad Saha Institute of Technology</div>
                    <div style="margin: 10px 0;">
                        <span class="gpa">9.2 GPA</span>
                    </div>
                    <div style="color: #666; font-size: 0.9rem;">2019 - 2023</div>
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">
                    <i class="fas fa-trophy"></i>
                    Achievements
                </h2>
                <div class="achievements">
                    <div class="achievement-item">
                        <div class="achievement-icon">
                            <i class="fas fa-file-alt"></i>
                        </div>
                        <div class="achievement-text">
                            Published research paper on <strong>"Prediction of Thyroid Disease Using Machine Learning"</strong> at EAIT 2022 International Conference
                        </div>
                    </div>
                    <div class="achievement-item">
                        <div class="achievement-icon">
                            <i class="fas fa-brain"></i>
                        </div>
                        <div class="achievement-text">
                            Solved <strong>1000+ DSA problems</strong> on LeetCode and GeeksforGeeks, demonstrating exceptional problem-solving skills
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="content">
            <div class="section">
                <h2 class="section-title">
                    <i class="fas fa-user-tie"></i>
                    Professional Summary
                </h2>
                <div class="summary">
                    Innovative Backend Developer with 2+ years of expertise in architecting scalable, high-performance applications using Java, Python, and Node.js. Specialized in AI-powered solutions, distributed systems, and microservices architecture. Proven track record in building enterprise-grade applications with focus on security, performance optimization, and cutting-edge AI integration. Experienced in leading end-to-end development of complex systems from conception to deployment.
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">
                    <i class="fas fa-briefcase"></i>
                    Professional Experience
                </h2>

                <div class="experience-item">
                    <div class="job-header">
                        <div>
                            <div class="job-title">Backend Developer</div>
                            <div class="company">NextZen Minds</div>
                        </div>
                        <div class="duration">AUG 2024 – Present</div>
                    </div>
                    <div class="job-description">
                        <h4 style="color: #667eea; margin-bottom: 10px;">AI Agent Platform - nagent.ai</h4>
                        <ul>
                            <li>Architected and developed AI agents for LinkedIn content creation, business planning, ad video generation, and pitch deck creation using multi-LLM integration (OpenAI, Claude, Gemini)</li>
                            <li>Implemented scalable microservices architecture achieving 99.9% uptime and sub-200ms response times for AI agent operations</li>
                            <li>Designed multimodal AI functionality enabling seamless generation of text, audio, video, and image content</li>
                            <li>Optimized GCP serverless functions and APIs, reducing operational costs by 40% while improving performance</li>
                            <li>Integrated MySQL and Firebase for real-time data synchronization and organized storage architecture</li>
                        </ul>

                        <h4 style="color: #667eea; margin: 15px 0 10px 0;">Security Management Systems</h4>
                        <ul>
                            <li>Designed and implemented enterprise-grade DSPM and CSPM systems processing TB-scale datasets across multi-cloud environments</li>
                            <li>Developed advanced PII detection using regex patterns and fine-tuned spaCy models achieving 98% accuracy</li>
                            <li>Automated multi-cloud security audits and compliance reporting using Prowler integration</li>
                            <li>Built Hospital Management System with secure payment integration and document processing capabilities</li>
                        </ul>
                    </div>
                </div>

                <div class="experience-item">
                    <div class="job-header">
                        <div>
                            <div class="job-title">Junior Programmer</div>
                            <div class="company">CBNITS India Pvt Ltd</div>
                        </div>
                        <div class="duration">JAN 2023 – SEP 2024</div>
                    </div>
                    <div class="job-description">
                        <ul>
                            <li>Developed robust DSPM system using Java, Spring Boot, and Apache Spark for processing sensitive data across multiple platforms</li>
                            <li>Implemented comprehensive regex-based PII scanning mechanisms ensuring GDPR and compliance adherence</li>
                            <li>Deployed containerized applications on AWS EC2 with Docker, achieving 99.8% uptime and seamless scalability</li>
                            <li>Processed large-scale datasets generating actionable security insights and automated threat detection</li>
                            <li>Optimized data processing pipelines reducing execution time by 60% through efficient Apache Spark implementations</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">
                    <i class="fas fa-project-diagram"></i>
                    Key Projects
                </h2>

                <div class="project-item">
                    <div class="project-header">
                        <div>
                            <div class="project-title">Nagent AI Platform</div>
                            <div class="project-link">nagent.ai</div>
                        </div>
                    </div>
                    <div class="project-description">
                        <p>Comprehensive AI agent platform featuring multiple specialized agents for content generation and business automation:</p>
                        <ul>
                            <li><strong>LinkedIn Content Suite:</strong> AI-powered post generation with sentiment analysis and automated publishing via LinkedIn API</li>
                            <li><strong>Business Intelligence Agent:</strong> Advanced strategy planner creating comprehensive business models, SWOT analysis, and financial projections</li>
                            <li><strong>Multimodal Content Creator:</strong> AI-driven video ad generation with scripting, AI voiceovers, and dynamic visualizations</li>
                            <li><strong>Presentation Generator:</strong> Machine learning-powered pitch deck creation with data-driven insights and professional templates</li>
                            <li><strong>Creative Writing Engine:</strong> AI storytelling platform with genre-specific style transfer for books, blogs, and scripts</li>
                        </ul>
                        <div class="tech-stack">
                            <span class="tech-item">Node.js</span>
                            <span class="tech-item">Express.js</span>
                            <span class="tech-item">OpenAI</span>
                            <span class="tech-item">Claude</span>
                            <span class="tech-item">Gemini</span>
                            <span class="tech-item">MySQL</span>
                            <span class="tech-item">Firebase</span>
                            <span class="tech-item">GCP</span>
                        </div>
                    </div>
                </div>

                <div class="project-item">
                    <div class="project-header">
                        <div>
                            <div class="project-title">Enterprise Hospital Management System</div>
                            <div class="project-link">NextZen Minds</div>
                        </div>
                    </div>
                    <div class="project-description">
                        <p>Scalable healthcare management platform with advanced features:</p>
                        <ul>
                            <li><strong>Intelligent Document Processing:</strong> Apache Tika integration for automated medical document extraction and analysis</li>
                            <li><strong>High-Performance Architecture:</strong> Spring Boot and Spring Batch for efficient big data processing</li>
                            <li><strong>Payment Integration:</strong> Secure Razorpay gateway implementation for seamless billing</li>
                            <li><strong>Performance Optimization:</strong> Redis caching reducing database load by 70%</li>
                            <li><strong>Fault Tolerance:</strong> API Gateway with circuit breaker patterns ensuring system reliability</li>
                        </ul>
                        <div class="tech-stack">
                            <span class="tech-item">Java</span>
                            <span class="tech-item">Spring Boot</span>
                            <span class="tech-item">Apache Spark</span>
                            <span class="tech-item">Apache Tika</span>
                            <span class="tech-item">Redis</span>
                            <span class="tech-item">Razorpay</span>
                        </div>
                    </div>
                </div>

                <div class="project-item">
                    <div class="project-header">
                        <div>
                            <div class="project-title">Advanced Security Posture Management</div>
                            <div class="project-link">HawkShield AI & Swift Security</div>
                        </div>
                    </div>
                    <div class="project-description">
                        <p>Enterprise-grade security solutions for data protection and compliance:</p>
                        <ul>
                            <li><strong>Distributed Processing Pipeline:</strong> Celery-based elastic pipeline for parallel data processing across cloud platforms</li>
                            <li><strong>Advanced PII Detection:</strong> Hybrid approach using regex patterns and trained spaCy models for 98% accuracy</li>
                            <li><strong>Multi-Cloud Security:</strong> Automated cross-account access via AWS STS and Role ARN integration</li>
                            <li><strong>Compliance Automation:</strong> Prowler-powered CSPM scans ensuring adherence to security best practices</li>
                            <li><strong>Scalable SaaS Architecture:</strong> Designed for enterprise-level data security and policy management</li>
                        </ul>
                        <div class="tech-stack">
                            <span class="tech-item">Python</span>
                            <span class="tech-item">Flask</span>
                            <span class="tech-item">Celery</span>
                            <span class="tech-item">Apache Spark</span>
                            <span class="tech-item">spaCy</span>
                            <span class="tech-item">AWS</span>
                            <span class="tech-item">Prowler</span>
                        </div>
                    </div>
                </div>
            </div>

            </div>
                        </div>
                    </div> <!-- Closing the content div -->
                </div> <!-- Closing the main-content div -->

                <button class="print-button" onclick="window.print()">
                    <i class="fas fa-print"></i>
                </button>
            </div> <!-- Closing the resume-container div -->

            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    console.log('Resume loaded successfully!');
                });
            </script>
            </body>
            </html>
  `;
};