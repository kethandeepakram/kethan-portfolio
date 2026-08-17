import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  Rocket,
  Search,
  Sun,
  X,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "R. Kethan Deepak Ram",
  shortName: "Kethan Deepak",
  role: "Java Full Stack Developer | Fresher",
  phone: "+91 8124682887",
  email: "rkethandeepakram@gmail.com",
  linkedin: "https://www.linkedin.com/in/kethan-deepak-ram-r-795a46265/?locale=en",
  github: "https://github.com/kethandeepakram",
  photo: `${import.meta.env.BASE_URL}kethan-profile.jpg`,
resume: `${import.meta.env.BASE_URL}R-Kethan-Deepak-Ram-Resume.pdf`,
};

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Achievements", "achievements"],
  ["Contact", "contact"],
];

const skills = [
  { group: "Programming", items: ["Java", "Python", "SQL"] },
  { group: "Backend", items: ["Spring Boot", "REST APIs"] },
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js"] },
  { group: "AI & Data", items: ["Artificial Intelligence", "Machine Learning", "NLP", "OpenAI API"] },
  { group: "Database", items: ["MySQL", "Supabase"] },
  { group: "Development", items: ["Full-Stack Development", "API Integration", "Authentication"] },
  { group: "Tools", items: ["Git", "GitHub", "Clerk", "PostHog", "Oxylabs"] },
];

const projects = [
  {
    number: "01",
    title: "AI-Powered HR Recruitment System",
    description:
      "An AI-powered recruitment platform designed to automate resume screening, candidate information extraction, job matching, and applicant ranking.",
    highlights: [
      "Connected React.js frontend, Spring Boot backend, and AI services through REST APIs.",
      "Applied NLP and Machine Learning to analyze resumes and match skills against job requirements.",
      "Designed the workflow to reduce manual effort and improve recruitment efficiency.",
    ],
    tech: ["Java", "Spring Boot", "React.js", "Python", "NLP", "Machine Learning", "MySQL"],
  },
  {
    number: "02",
    title: "AI-Powered News Blog",
    description:
      "A full-stack news aggregation platform combining automated news collection, AI-powered analysis and summarization, authentication, database management, and product analytics.",
    highlights: [
      "Used Oxylabs for automated news collection and OpenAI API for article analysis and summarization.",
      "Implemented secure authentication with Clerk and application data management with Supabase.",
      "Integrated PostHog for user behavior tracking, product analytics, feature experimentation, and bug monitoring.",
    ],
    tech: ["React.js", "OpenAI API", "Oxylabs", "Clerk", "Supabase", "PostHog"],
  },
];

const certifications = [
  { title: "Java Full Stack", icon: Code2 },
  { title: "Cloud Architecture", icon: Layers3 },
  { title: "App Development", icon: Rocket },
];

const achievements = [
  {
    title: "Deepfake Technology — Published Research Paper",
    icon: Search,
    body:
      "Published research on deepfake technology covering Artificial Intelligence, Deep Learning, Generative Adversarial Networks (GANs), facial manipulation, synthetic media, detection challenges, and the impact of deepfakes on cybersecurity, misinformation, privacy, and digital identity.",
    tags: ["AI", "Deep Learning", "GANs", "Deepfake Detection"],
  },
  {
    title: "Neural Network — Published Research Paper",
    icon: Sparkles,
    body:
      "Published research on neural networks covering artificial neurons, activation functions, forward propagation, backpropagation, loss functions, model training, and architectures including Feedforward Neural Networks, CNNs, and RNNs.",
    tags: ["Neural Networks", "CNN", "RNN", "Machine Learning"],
  },
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    navItems.forEach(([, id]) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <div className="background-grid" aria-hidden="true"></div>

      <header className="topbar">
        <button className="brand" onClick={() => goTo("home")} aria-label="Go to home">
          <span className="brand-mark">K</span>
          <span>
            <strong>R. Kethan Deepak Ram</strong>
            <small>Java Full Stack Developer</small>
          </span>
        </button>

        <nav className={`desktop-nav ${menuOpen ? "open" : ""}`}>
          {navItems.map(([label, id]) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => goTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="topbar-actions">
          <button
            className="icon-button"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse"></span>
              Open to entry-level opportunities
            </div>
            <p className="hero-kicker">JAVA FULL STACK · AI · WEB DEVELOPMENT</p>
            <h1>
             Driven to Learn.
            <span> Ready to Build.</span>
            <br />
             Eager to Make an Impact.
            </h1>
            <p className="hero-description">
              Hi, I’m Kethan Deepak. I’m a recent B.Tech graduate and an aspiring
              Java Full Stack Developer. I have hands-on knowledge of Java, Spring
              Boot, REST APIs, SQL, React.js, and web development. Along with
              full-stack development, I also have a good understanding of AI
              technologies and modern AI concepts, and I’m interested in exploring
              how AI can be integrated into real-world applications.
            </p>
            <p className="hero-description secondary">
              I’m a quick learner, passionate about technology, and looking for an
              opportunity where I can apply my skills, learn from experienced
              professionals, and contribute to the organization’s growth.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href={profile.resume} target="_blank" rel="noreferrer">
                <Download size={18} />
                View / Download Resume
              </a>
              <a className="secondary-button" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <Phone size={18} />
                Contact Me
              </a>
            </div>

            <div className="social-row">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={19} />
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={19} />
                GitHub
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={19} />
                Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="profile-card">
              <div className="profile-photo-wrap">
                <img src={profile.photo} alt="R. Kethan Deepak Ram" className="profile-photo" />
              </div>
              <div className="profile-card-bottom">
                <div>
                  <span className="mini-label">CURRENT FOCUS</span>
                  <strong>Full-Stack Development + AI</strong>
                </div>
                <span className="availability-dot" title="Open to opportunities"></span>
              </div>
            </div>

            <div className="floating-chip chip-one">
              <Code2 size={16} />
              Java
            </div>
            <div className="floating-chip chip-two">
              <Layers3 size={16} />
              Spring Boot
            </div>
            <div className="floating-chip chip-three">
              <Sparkles size={16} />
              AI
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <span className="section-index">01</span>
            <div>
              <p className="eyebrow">About Me</p>
              <h2>Focused on learning, building, and growing.</h2>
            </div>
          </div>

          <div className="about-grid">
            <article className="glass-card about-main">
              <div className="card-icon"><BriefcaseBusiness size={21} /></div>
              <h3>Professional Summary</h3>
              <p>
                Recent B.Tech graduate in Artificial Intelligence and Data Science
                with a strong foundation in Java, SQL, Python, web technologies,
                and full-stack application development.
              </p>
              <p>
                I bring hands-on project experience across Spring Boot, React.js,
                MySQL, NLP, Machine Learning, OpenAI APIs, and Supabase, with a
                strong interest in building practical and scalable solutions.
              </p>
              <div className="quote-line">
                <span></span>
                <em>“Learn fast. Build thoughtfully. Keep improving.”</em>
              </div>
            </article>

            <article className="glass-card objective-card">
              <div className="card-icon"><TargetIcon /></div>
              <h3>Career Objective</h3>
              <p>
                Motivated and detail-oriented <strong>Java Full Stack Developer</strong>
                and recent B.Tech graduate with hands-on experience in
                <strong> Java, Spring Boot, React.js, REST APIs, SQL, and AI-integrated
                applications</strong>. Passionate about building scalable, user-focused
                software solutions and continuously learning new technologies.
              </p>
              <p>
                Seeking an opportunity to contribute my technical skills,
                problem-solving abilities, and enthusiasm for software development
                while growing as a professional developer.
              </p>
            </article>

            <article className="glass-card education-snapshot">
              <div className="education-badge"><GraduationCap size={24} /></div>
              <div>
                <span className="mini-label">EDUCATION</span>
                <h3>B.Tech — Artificial Intelligence & Data Science</h3>
                <p>Anand Institute of Higher Technology · Anna University</p>
                <div className="education-meta">
                  <span>2025</span>
                  <span>CGPA 7.9 / 10</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <span className="section-index">02</span>
            <div>
              <p className="eyebrow">Technical Skills</p>
              <h2>Tools I use to turn ideas into applications.</h2>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.group}>
                <h3>{skill.group}</h3>
                <div className="tag-list">
                  {skill.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <span className="section-index">03</span>
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Projects that show how I apply my stack.</h2>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span>{project.number}</span>
                  <ArrowUpRight size={20} />
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list project-tags">
                  {project.tech.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-details">
                  {project.highlights.map((highlight) => (
                    <div className="detail-row" key={highlight}>
                      <CheckCircle2 size={16} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                  View GitHub Profile <ExternalLink size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading">
            <span className="section-index">04</span>
            <div>
              <p className="eyebrow">Education</p>
              <h2>Academic foundation.</h2>
            </div>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2025</span>
                <h3>B.Tech — Artificial Intelligence and Data Science</h3>
                <p>Anand Institute of Higher Technology</p>
                <div className="education-meta">
                  <span>CGPA 7.9 / 10</span>
                  <span>Anna University</span>
                </div>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content compact">
                <span className="timeline-year">Schooling</span>
                <div className="school-stats">
                  <div><strong>78.83%</strong><span>Higher Secondary · 12th</span></div>
                  <div><strong>66.60%</strong><span>Secondary · 10th</span></div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="achievements" className="section">
          <div className="section-heading">
            <span className="section-index">05</span>
            <div>
              <p className="eyebrow">Certifications & Achievements</p>
              <h2>Beyond development, I explore AI through research.</h2>
            </div>
          </div>

          <div className="cert-grid">
            {certifications.map(({ title, icon: Icon }) => (
              <article className="cert-card" key={title}>
                <div className="card-icon"><Icon size={20} /></div>
                <h3>{title}</h3>
                <span>Certification / Course</span>
              </article>
            ))}
          </div>

          <div className="research-grid">
            {achievements.map(({ title, icon: Icon, body, tags }) => (
              <article className="research-card" key={title}>
                <div className="research-icon"><Icon size={22} /></div>
                <div>
                  <div className="research-title-row">
                    <h3>{title}</h3>
                    <span className="research-pill">Published Research</span>
                  </div>
                  <p>{body}</p>
                  <div className="tag-list">
                    {tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div className="contact-copy">
              <p className="eyebrow">Let’s Connect</p>
              <h2>Looking for the right opportunity to start my developer journey.</h2>
              <p>
                I’m open to entry-level Java Full Stack and software development
                opportunities where I can contribute, learn from experienced teams,
                and grow through real-world projects.
              </p>
              <div className="contact-actions">
                <a className="primary-button" href={`mailto:${profile.email}`}>
                  <Mail size={18} /> Email Me
                </a>
                <a className="secondary-button" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  <Phone size={18} /> Call Me
                </a>
              </div>
            </div>

            <div className="contact-links">
              <a href={`mailto:${profile.email}`} className="contact-link">
                <span><Mail size={18} /></span>
                <div><small>Email</small><strong>{profile.email}</strong></div>
                <ArrowUpRight size={17} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <span><Linkedin size={18} /></span>
                <div><small>LinkedIn</small><strong>Connect with me</strong></div>
                <ArrowUpRight size={17} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
                <span><Github size={18} /></span>
                <div><small>GitHub</small><strong>View my repositories</strong></div>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>R. Kethan Deepak Ram</strong>
          <span>Java Full Stack Developer · Fresher</span>
        </div>
        <a href={profile.resume} target="_blank" rel="noreferrer">
          Resume <Download size={15} />
        </a>
        <span>© {new Date().getFullYear()} · Built with React + Vite</span>
      </footer>
    </div>
  );
}

function TargetIcon() {
  return <span className="target-icon">◎</span>;
}

createRoot(document.getElementById("root")).render(<App />);
